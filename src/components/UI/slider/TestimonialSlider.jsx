import Slider from "react-slick";
import React from "react";
import "../../../styles/slider.css";

import ava01 from "../../../assets/images/ava-1.jpg";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reprehenderit asperiores dolor et aliquam rem nihil amet repellendus
          officia a. Itaque deleniti eaque omnis error sapiente magni delectus.
          Rerum, reiciendis.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="" className=" rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reprehenderit asperiores dolor et aliquam rem nihil amet repellendus
          officia a. Itaque deleniti eaque omnis error sapiente magni delectus.
          Rerum, reiciendis.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reprehenderit asperiores dolor et aliquam rem nihil amet repellendus
          officia a. Itaque deleniti eaque omnis error sapiente magni delectus.
          Rerum, reiciendis.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="" className=" rounded" />
          <h6>Mitschel Marsh</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
