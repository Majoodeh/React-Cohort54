import { useState, useEffect, useDebugValue } from "react";

export function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useDebugValue("Current Width: " + width + "px");

  return width;
}
