import React, { useState } from "react";
import "../components/Slider.css"; // Import the CSS file
import slider1 from "../components/assets/slider1.png";
import slider2 from "../components/assets/slider2.png";
import slider3 from "../components/assets/slider3.png";
import slider4 from "../components/assets/slider4.png";
import right from "../components/assets/right.png";
import left from "../components/assets/left.png";

const images = [
  {
    src: slider1,
    title: "Dashboard",
    text: "They work to find cures to cancer, travel to space, bulid tomorrow's,innovation,and beyond.They work to find cures to cancer, travel to space, build tomorrow's,innovation,and beyond.",
  },
  {
    src: slider2,
  },
  {
    src: slider3,
  },
  {
    src: slider4,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>
          <img src={left} alt="Left Arrow" />
        </button>

        <div className="slide">
          <img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className={currentIndex !== 0 ? "other-slide" : "first-slide-image"}
          />
          <div
            className={`text-container ${
              currentIndex === 0 ? "first-slide" : "center-text"
            }`}
          >
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].text}</p>
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <img src={right} alt="right Arrow" />
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
