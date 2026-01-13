import React from "react";
import { useWindowResize } from "./hooks/useWindowResize";
import "./App.css"; 

function App() {
  const width = useWindowResize();

  let size = "Large";
  let bgStyle = { backgroundColor: "#eff6ff" }; 
  let textStyle = { color: "#2563eb" };         

  if (width < 700) {
    size = "Small";
    bgStyle = { backgroundColor: "#fef2f2" };  
    textStyle = { color: "#dc2626" };         
  } else if (width < 1000) {
    size = "Medium";
    bgStyle = { backgroundColor: "#fefce8" };   
    textStyle = { color: "#ca8a04" };          
  }

  return (
    <div className="screen-container" style={bgStyle}>
      <div className="size-card">
        <h1 className="title">Screen Size Detector</h1>

        <h2 className="size-text" style={textStyle}>
          {size} Screen
        </h2>

        <p className="width-info">
          Window Width: <span className="width-number">{width}px</span>
        </p>

        <div className="footer">
          <p>
            Check React DevTools "Hooks" section to see useDebugValue label.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;