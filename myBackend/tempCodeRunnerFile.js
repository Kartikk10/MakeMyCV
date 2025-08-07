import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let cssText = "";
try {
  const cssDir = path.join(__dirname, "..", "dist", "assets");
  const cssFile = fs.readdirSync(cssDir).find(f => f.startsWith("index") && f.endsWith(".css"));
  cssText = fs.readFileSync(path.join(cssDir, cssFile), "utf-8");
  console.log("✅ Tailwind CSS loaded:", cssFile);
} catch (err) {
  console.error("❌ Failed to load Tailwind CSS from dist:", err);
}

// const cssDir = path.join(__dirname, "..", "dist", "assets");
// const cssFile = fs.readdirSync(cssDir).find(f => f.startsWith("index") && f.endsWith(".css"));
// const cssText = fs.readFileSync(path.join(cssDir, cssFile), "utf-8");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.post("/generate-pdf", async (req, res) => {
  console.log("✅ /generate-pdf route hit");
  const { html } = req.body;

  if (!html) return res.status(400).send("No HTML provided");

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <style>${cssText}</style>
        <style>
          @page {
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
          }
          .page-break {
            page-break-before: always;
          }
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
  console.log("✅ Writing debug.html to inspect rendered HTML...");
  fs.writeFileSync(path.join(__dirname, "debug.html"), fullHtml);

  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(fullHtml, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0", bottom: "0", left: "0", right: "0" },
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=My_Resume.pdf",
      "Content-Length": pdfBuffer.length,
    });

    res.send(pdfBuffer);
  } catch (err) {
    console.error("PDF generation error:", err);
    res.status(500).send("Failed to generate PDF");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
