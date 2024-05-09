import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({ arrImages }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <WrapperSliderStyle {...settings}>
      {arrImages.map((item) => {
        return (
          <Image
            src={item}
            alt="slider"
            preview={false}
            width="100%"
            height="274px"
          />
        );
      })}
    </WrapperSliderStyle>
  );
};

export default SliderComponent;
