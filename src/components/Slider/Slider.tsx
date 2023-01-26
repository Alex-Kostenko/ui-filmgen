import React, { useRef } from "react";
import "./Slider.css";
import Slider from "react-slick";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";
import { storiesOf } from "@storybook/react";

export interface SliderProps {
  className?: string;
  [name: string]: any;
  img: any;
}

const SliderComponent = (props: SliderProps) => {
  const sliderRef = useRef<any>(null);

  const imageAlt = "my image";

  var settings = {
    dots: true,
    arrows: false,
    autoplay: false,
  };

  return (
    <div className="wrapperSlider">
      <div className="leftArrow" onClick={() => sliderRef.current.slickPrev()}>
        <div className="left">
          <LeftArrow />
        </div>
      </div>
      <div className="rightArrow" onClick={() => sliderRef.current.slickNext()}>
        <div className="right">
          <RightArrow />
        </div>
      </div>
      <Slider className="customSlider" ref={sliderRef} {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/201" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/203" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/204" />
        </div>
      </Slider>
      {/* <div>{storiesOf("graphic.png", module)}</div> */}

      <img src="/images/ukr.png" />
    </div>
  );
};

export default SliderComponent;
