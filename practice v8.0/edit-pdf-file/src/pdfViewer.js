// src/PdfViewer.js

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({ pdfDocument }) => {
  return (
    <div style={{ height: '100vh' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfDocument} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
