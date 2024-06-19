// src/App.js

import React from 'react';
import PdfViewer from './pdfViewer'

function App() {
  const pdfDocument = 'https://example.com/path/to/your/pdf/document.pdf'; // Replace with your PDF URL
  return (
    <div className="App">
      <PdfViewer pdfDocument={pdfDocument} />
    </div>
  );
}

export default App;
