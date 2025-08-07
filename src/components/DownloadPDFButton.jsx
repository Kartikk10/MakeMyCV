import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function DownloadPDFButton({
  isResumeCleared,
  resumePreviewRef,
  selectedLayout,
}) {
  const generatePdf = async () => {
    try {
      const element = resumePreviewRef.current;

      if (!element) {
        return;
      }

      const html = element.outerHTML;
      const screenWidth = window.innerWidth;

      const res = await fetch("http://localhost:5000/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html, screenWidth }),
      });
      if (!res.ok) {
        const error = await res.text();
        toast.error("Server Error: " + error);
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "My_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Something went wrong");
      console.error("❌ PDF fetch error:", err);
    }
  };

  const handleDownloadPDF = (e) => {
    e.preventDefault();
    if (!isResumeCleared) {
      Swal.fire({
        title: "Download Resume?",
        text: "Are you sure you’ve added all the details correctly?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, download it!",
        cancelButtonText: "Review again",
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            try {
              generatePdf();
              toast.info("This might take a few seconds sometimes.");
            } catch (e) {
              console.error("💥 generatePdf threw an error:", e);
            }
          }, 0);
        }
      });
    } else {
      toast.warning(
        " Your resume is currently empty. Add content to generate a PDF."
      );
    }
  };

  return (
    <button
      type="button"
      className="h-fit py-6 px-3 bg-white rounded-xl font-semibold flex flex-col items-center justify-center gap-y-2 cursor-pointer"
      style={{
        boxShadow:
          "0 13px 27px -5px rgba(50, 50, 93, .1), 0 8px 16px -8px rgba(0, 0, 0, .25)",
      }}
      onClick={handleDownloadPDF}
    >
      <FaFilePdf className="text-lg sm:text-xl" />
      <p className="text-sm sm:text-base">Download PDF</p>
    </button>
  );
}

export default DownloadPDFButton;
