import React, { useState, useEffect } from "react";
import "./HeroSliderMobile.scss";
import img1 from "../../assets/images/mobile-hero1.jpg";
import img2 from "../../assets/images/mobile-hero2.jpg";
import img3 from "../../assets/images/mobile-hero3.jpg";
import img4 from "../../assets/images/mobile-hero4.jpg";

const images = [img1, img2, img3, img4];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider__image">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
