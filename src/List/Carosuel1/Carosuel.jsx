
import { useEffect, useState } from "react";
import "./Carosuel.css";

const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1020/800/400",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Auto rotate
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // Next slide
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  // Previous slide
  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex + 1}`}
      />

      <button className="prev" onClick={handlePrevious}>
        ❮
      </button>

      <button className="next" onClick={handleNext}>
        ❯
      </button>

      {/* <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Pause" : "Resume"}
      </button>

      {/* <p>
        {activeIndex + 1} / {images.length}
      </p> */}
    </div>
  );
};

export default Carousel;
