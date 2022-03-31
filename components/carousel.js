import React from "react";
import { Carousel } from "react-responsive-carousel";
import _Image from "./image";
import { AnimateDiv } from "./animations";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrousel({ items, ...rest }) {
  return (
    <Carousel {...rest}>
      {items.map((data, idx) => (
        <_Image key={idx} src={data.src} alt={data.alt} />
      ))}
    </Carousel>
  );
}
