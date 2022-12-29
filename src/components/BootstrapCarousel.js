import React from "react";
import { Carousel } from "react-bootstrap";
import CardNew from "./CardNew";

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <CardNew />
        </Carousel.Item>
        <Carousel.Item>
          <CardNew />
        </Carousel.Item>
        <Carousel.Item>
          <CardNew />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
