import React, { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: null,
    y: null,
  });
  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);
  return position;
};

export default useMousePosition;
