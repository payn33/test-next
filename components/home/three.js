import React from "react";
import { AnimateDiv } from "../animations";
import items from "../../utils/home.json";
import _Image from "../image";
import image1 from "../../public/home-carousel-1a.png";
import image2 from "../../public/home-carousel-1b.png";
import image3 from "../../public/home-carousel-1c.png";
import styles from "../../styles/Home.module.css";
import ScrollToView from "../scrollIntoView";
import Carrousel from "../carousel";

export default function Three() {
  const images = [
    {
      src: image1,
      alt: "",
    },
    {
      src: image2,
      alt: "",
    },
    {
      src: image3,
      alt: "",
    },
  ];
  return (
    <ScrollToView className={styles.three}>
      {/* include animation */}
      <AnimateDiv>
        <h1>{items.three.header}</h1>
      </AnimateDiv>
      <Carrousel
        items={images}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      ></Carrousel>
    </ScrollToView>
  );
}
