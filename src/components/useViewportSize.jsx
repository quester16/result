import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [rects, setRects] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setRects({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { height: rects.height, width: rects.width };
};
