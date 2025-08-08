import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cssDir = path.join(__dirname, "..", "dist", "assets");
const cssFile = fs
  .readdirSync(cssDir)
  .find((f) => f.startsWith("index") && f.endsWith(".css"));
const cssText = fs.readFileSync(path.join(cssDir, cssFile), "utf-8");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json({ limit: "10mb" }));
app.use("/static", express.static(path.join(__dirname)));

app.post("/generate-pdf", async (req, res) => {
  try {
    const { html, screenWidth } = req.body;
    if (!html) return res.status(400).send("No HTML provided");

    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta charset="UTF-8">
          <style>${cssText}</style>
          <style>
          @page {
            margin: 0; 
           }
          html, body {
            margin: 0;
            padding: 0;
            box-sizing: border-box; 
            }
          @media print {
            #resumePreviewContainer {
              overflow: visible !important;
              min-height: 1122px !important;
            }
          }
          </style>
        </head>
        <body>${html}</body>
      </html>
    `;

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: screenWidth,
      height: 900,
    });
    console.log(screenWidth);
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
    console.error("❌ PDF generation error:", err);
    return res.status(500).send("Failed to generate PDF");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
