// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
const pdfSrc = "./test.pdf";

export const App = ({ preview = pdfSrc, setPreview }) => {
  const canvasRef = useRef(null);
  const [thumb, setThumb] = useState(null);
  if (thumb) return <img src={thumb} alt="pdf preview" className="rounded overflow-hidden" />;
  return (
    <>
      <Document file={preview}>
        <Page
          onRenderSuccess={() => {
            canvasRef?.current?.toBlob((blob) => setThumb(URL.createObjectURL(blob)));
          }}
          height={600}
          canvasRef={canvasRef}
          className="rounded overflow-hidden shadow-lg "
          renderTextLayer={false}
          pageNumber={1}
        />
      </Document>
    </>
  );
};


export default App;
