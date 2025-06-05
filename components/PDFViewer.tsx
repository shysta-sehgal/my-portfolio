"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Tell it where the worker script is
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function PDFViewer({ fileUrl }: { fileUrl: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="border border-gray-300 shadow-md"
      >
        <Page pageNumber={pageNumber} width={600} />
      </Document>

      <div className="flex space-x-4">
        <button
          onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
          disabled={pageNumber === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ⬅ Prev
        </button>
        <span className="text-sm">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber(p => (numPages ? Math.min(p + 1, numPages) : p))}
          disabled={pageNumber === numPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
