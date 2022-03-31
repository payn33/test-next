import React, { forwardRef, useEffect, useRef } from "react";
import useMousePosition from "../utils/useMousePosition";
import { animationControls } from "framer-motion";
import { motion } from "framer-motion";
import { distance } from "../utils/utils";
import styles from "../styles/Button.module.css";
import useHover from "../utils/useHover";

const Button = (props) => {
  const { x, y } = useMousePosition();
  const textRef = useRef();
  const controls = animationControls();

  const [hoverRef, isHovered] = useHover();

  const animate = props.animate ? hoverRef : null;

  useEffect(() => {
    let _x = 0;
    let _y = 0;
    if (hoverRef) {
      const node = hoverRef.current;
      const textNode = textRef.current;
      const rect = node?.getBoundingClientRect();
      const distanceToTrigger = rect?.width * 0.7;
      const distanceMouseButton = distance(
        x + window.scrollX,
        y + window.scrollY,
        rect?.left + rect?.width / 2,
        rect?.top + rect?.height / 2
      );
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        _x = (x + window.scrollX - (rect?.left + rect?.width / 2)) * 0.2;
        _y = (y + window.scrollY - (rect?.top + rect?.height / 2)) * 0.2;
        node?.style.transform = `translate3d(${_x}px, ${_y}px, 0)`;
        // textNode.style.fontSize = 20 + "px";

        textNode?.style.transform = `translate3d(${_x / 2}px, ${_y / 2}px, 0)`;
      } else {
        // Restore initial position
        props.nav && (textNode?.style.fontSize = 40 + "px");

        node?.style.transform = `translate3d(0, 0, 0)`;
        textNode?.style.transform = `translate3d(0, 0, 0)`;
      }

      const handleMouseEnter = () => {
        // Handle background color animation
        props.nav && (textNode?.style.fontSize = 50 + "px");
        controls.start({
          y: ["80%", "-10%"],
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        });
      };
      const handleMouseLeave = () => {
        props.nav && (textNode?.style.fontSize = 30 + "px");

        controls.start({
          y: "-80%",
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        });
      };

      if (textNode) {
        textNode?.addEventListener("mouseenter", handleMouseEnter);
        textNode?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          textNode?.removeEventListener("mouseenter", handleMouseEnter);
          textNode?.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y, hoverRef, textRef, isHovered, controls]);

  return (
    <>
      {props.animate ? (
        <button
          className={`${styles.button} ${props.class}`}
          ref={hoverRef}
          onClick={props.action}
        >
          <motion.span
            animate={{ controls }}
            ref={textRef}
            className={styles.text}
          >
            {props.text || props.children}
          </motion.span>
        </button>
      ) : (
        <button
          className={`${styles.button} ${props.class}`}
          onClick={props.action}
        >
          <motion.span
            animate={{ controls }}
            className={styles.text}
          >
            {props.text || props.children}
          </motion.span>
        </button>
      )}
    </>
  );
};

Button.displayName = "Button";

export default Button;
