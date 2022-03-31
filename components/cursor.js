import React, { useRef, useEffect } from "react";
import useMousePosition from "../utils/useMousePosition";
import styles from "../styles/Cursor.module.css";
import useHover from "../utils/useHover";

export default function Cursor({ hover }) {
  const cursorRef = useRef();
  const { x, y } = useMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  const hoverScale = 1;
  const [hovered, ishovered] = useHover();

  useEffect(() => {
    if (hasMovedCursor) {
      const bounds = cursorRef.current.getBoundingClientRect();
      const _x = x - bounds.width / (hover ? hoverScale * 1.2 : 2);
      const _y = y - bounds.height / (hover ? hoverScale * 0.25 : 2);
      cursorRef.current.style.transform = `translateX(${_x}px) translateY(${_y}px) scale(${
        hover ? hoverScale : 1
      })`;
    }
  }, [hover, x, y, hasMovedCursor]);
  // console.log(hovered, ishovered);
  return (
    <React.Fragment>
      <svg
        className={`${styles.container}, ${hover && styles.hover}`}
        ref={cursorRef}
        width={25}
        height={25}
        viewBox="0 0 25 25"
      >
        <circle cx="12.5" cy="12.5" r="6.25" />
      </svg>
    </React.Fragment>
  );
}
