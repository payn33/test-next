import React from "react";
import { AnimateList, AnimateDiv } from "../animations";
import items from "../../utils/home.json";
import _Image from "../image";
import image from "../../public/girl-in-glasses.png";
import Button from "../button";
import styles from "../../styles/Home.module.css";
import ScrollToView from "../scrollIntoView";
import { motion } from "framer-motion";

export default function Four() {
  return (
    <ScrollToView className={styles.four}>
      <AnimateDiv>
        <h1>{items.four.header}</h1>
      </AnimateDiv>

      <motion.ol className={styles.content}>
        {items.four.content.map((data, idx) => (
          <motion.li key={idx}>
            <h2>0{idx + 1}</h2>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </ScrollToView>
  );
}
