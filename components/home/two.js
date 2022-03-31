import React from "react";
import { AnimateDiv } from "../animations";
import items from "../../utils/home.json";
import _Image from "../image";
import image from "../../public/join-our-community.png";
import Button from "../button";
import styles from "../../styles/Home.module.css";
import ScrollToView from "../scrollIntoView";

const Two = () => {
  return (
    <ScrollToView className={styles.two}>
      <AnimateDiv
        className={styles.image}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className={styles.placeholder}></div>
        <_Image src={image} alt={"join our community"} />
      </AnimateDiv>

      <AnimateDiv
        className={styles.content}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1>{items.two.header}</h1>
        <p>{items.two.body}</p>
        <Button class={styles.button} animate={true}>
          {items.two.button}
        </Button>
      </AnimateDiv>
    </ScrollToView>
  );
};

export default Two;
