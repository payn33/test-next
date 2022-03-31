import { useRef, useState, useEffect } from "react";
import { elementPosition } from "./utils";

function usePosition() {
  const [position, setPosition] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;
      const body = document.body;
      const scroll = window;
      const _position = elementPosition(ref.current);

      const handleScroll = () => {
        if (scroll.scrollY > 0) {
          setPosition(_position);
          // console.log("down", _position);
        } else if (scroll.scrollY) console.log("up");
      };

      scroll.addEventListener("scroll", handleScroll);

      return () => {
        scroll.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref, position]);
  return [ref, position];
}

export default usePosition;
