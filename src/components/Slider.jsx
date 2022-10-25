import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from "./Item";
import styles from "../style";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 824, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slider = () => {
  return (
    <div className={`${styles.paddingX} mt-14 mb-8`}>
        <h1>Популярные товары</h1>
      <Carousel autoPlaySpeed={1000}  responsive={responsive} className="">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </div>
  )
}

export default Slider
