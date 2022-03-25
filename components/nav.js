import React, { forwardRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import items from "../utils/nav.json";
import styles from "../styles/Nav.module.css";
import _Image from "./image";
import { AnimateDiv, Presence } from "./animations";
import useHover from "../utils/useHover";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [hoverRef, isHovered] = useHover();

  const topLine = {
    open: { d: "M0 0.5L25 24" },
    closed: { d: "M0 9.5L34 9.5" },
  };
  const bottomLine = {
    open: { d: "M0 24L25 0" },
    moving: { d: "M0 20L34 20" },
    closed: { d: "M0 20L25 20" },
  };

  const topControl = useAnimation();
  const bottomControl = useAnimation();

  const navHandler = async () => {
    setOpen(!open);
    console.log("is open", open);

    if (!open) {
      await topControl.start(bottomLine.moving);
      topControl.start(topLine.open);
      bottomControl.start(bottomLine.open);
    } else {
      topControl.start(topLine.closed);
      await bottomControl.start(bottomLine.moving);
      bottomControl.start(bottomLine.closed);
    }
  };
  console.log(hoverRef, isHovered);
  return (
    <React.Fragment>
      {" "}
      <div className={styles.container}>
        <div className={styles.logo}>
          <_Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
          <p>
            Web3
            <br />
            Ladies
          </p>
        </div>

        <div className={styles.burger}>
          <p>menu</p>
          <svg
            onClick={navHandler}
            width="46"
            height="24"
            viewBox="0 0 46 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={topControl}
              transition={{ duration: 0.2 }}
              stroke="black"
              strokeWidth="2"
              d="M0 9.5L34 9.5"
              {...topLine.closed}
            />
            <motion.path
              animate={bottomControl}
              transition={{ duration: 0.2 }}
              stroke="black"
              strokeWidth="2"
              d="M0 20L25 20"
              {...bottomLine.closed}
            />
          </svg>
        </div>
        <Presence>
          {open && (
            <AnimateDiv
              className={styles.menu_wrapper}
              animate={{ opacity: 1, x: "0%" }}
              initial={{ opacity: 0, x: "100%" }}
              exit={{ opacity: 0, x: "100%" }}
            >
              <div className={styles.menu}>
                {items.map((data) => (
                  <Link href={`/${data.link}`} ref={hoverRef} key={data.id}>
                    {data.name}
                  </Link>
                ))}
              </div>
            </AnimateDiv>
          )}
        </Presence>
      </div>
    </React.Fragment>
  );
};

export default forwardRef(Nav);
