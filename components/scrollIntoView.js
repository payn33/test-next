import React, { useRef, useEffect, useState } from "react";
import { ScrollIntoView } from "../components/animations";
import styles from "../styles/Home.module.css";
import usePosition from "../utils/useScrollPosition";
import { AnimateDiv } from "../components/animations";
import items from "../utils/home.json";

const ScrollToView = ({ children, className, ...rest }) => {
  const [scrollRef, position] = usePosition();
  const [view, setView] = useState(false);
  const click = () => console.log(scrollRef);

  useEffect(() => {
    const node = scrollRef.current;
    const rect = node.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );

    console.log(rect.top, rect.top - viewHeight);

    if (rect.top - viewHeight <= -30) {
      setView(true);
    }
  }, [scrollRef, position]);
  return (
    <ScrollIntoView
      onClick={click}
      ref={scrollRef}
      className={className}
      {...rest}
    >
      {view && children}
    </ScrollIntoView>
  );
};

export default ScrollToView;
