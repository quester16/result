import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    const element = ref.current;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseover", handleMouseOut);
    };
  }, []);

  return { hovered, ref };
};
