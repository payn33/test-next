import React from "react";
import { AnimateDiv } from "../animations";
import items from "../../utils/home.json";
import _Image from "../image";
import image from "../../public/girl-in-glasses.png";
import Button from "../button";
import styles from "../../styles/Home.module.css";
import ScrollToView from "../scrollIntoView";

const One = () => {
  return (
    <div className={styles.contain}>
      <AnimateDiv
        className={styles.one}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <AnimateDiv
          className={styles.text}
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1>
            Equipping <span>ladies</span> with relevant Blockchain skills to
            thrive in the Web3 ecosystem
          </h1>
          <Button animate={true} class={styles.button}>
            {items.one.button}
          </Button>
        </AnimateDiv>
        <div className={styles.placeholder}></div>
        <div className={styles.image}>
          <_Image
            src={image}
            alt={"girl with glasses"}
            priority={true}
            layout={"fill"}
          />
        </div>
      </AnimateDiv>
      <ScrollToView className={styles.values}>
        <AnimateDiv
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1>{items.one.header}</h1>
          <p>{items.one.body}</p>
        </AnimateDiv>
      </ScrollToView>
    </div>
  );
};

export default One;
