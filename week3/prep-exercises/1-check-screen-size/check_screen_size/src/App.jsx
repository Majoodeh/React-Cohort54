import React from "react";
import { useWindowResize } from "./hooks/useWindowResize";

function App() {
  const width = useWindowResize();

  // Student logic for breakpoints
  let size = "Large";
  let bgColor = "bg-blue-50";
  let textColor = "text-blue-600";

  if (width < 700) {
    size = "Small";
    bgColor = "bg-red-50";
    textColor = "text-red-600";
  } else if (width < 1000) {
    size = "Medium";
    bgColor = "bg-yellow-50";
    textColor = "text-yellow-600";
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${bgColor}`}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <h1 className="text-gray-500 uppercase tracking-widest text-sm font-bold">
          Screen Size Detector
        </h1>

        <h2 className={`text-3xl font-black mb-2 ${textColor}`}>
          {size} Screen
        </h2>

        <p className="text-gray-400 font-medium">
          Window Width: <span className="text-gray-800">{width}px</span>
        </p>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 italic">
            Check React DevTools "Hooks" section to see useDebugValue label.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
