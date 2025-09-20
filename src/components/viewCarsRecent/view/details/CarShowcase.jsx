"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import carData from "../../../../data/CarShowcase";

const flattenData = (categories) => {
  const allSlides = [];
  Object.keys(categories).forEach((cat) => {
    categories[cat].items.forEach((item) => {
      allSlides.push({ category: cat, item });
    });
  });
  return allSlides;
};

export default function CarShowcase() {
  const categories = carData;
  const allSlides = flattenData(categories);

  const [activeCategory, setActiveCategory] = useState("Exterior");

  return (
    <div className="d-flex overflow-hidden" style={{ height: "500px" }}>
      {/* Sidebar */}
      <div
        className="buttonSide text-white d-flex flex-column p-2"
        // style={{ width: "120px", backgroundColor: "#1E3A8A", borderRadius: "8px" }}
      >
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className="d-flex flex-column align-items-center justify-content-center p-2 border-0 bg-transparent text-white"
            style={{
              cursor: "pointer",
              width: "100%",
            }}
            onClick={() => {
              setActiveCategory(category);
              const firstIndex = allSlides.findIndex(
                (s) => s.category === category
              );
              document
                .querySelector(".car-swiper")
                ?.swiper.slideToLoop(firstIndex);
            }}
          >
            <img
              src={categories[category].icon}
              alt={category}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "6px",
                border:
                  activeCategory === category
                    ? "2px solid #fff"
                    : "2px solid transparent",
              }}
            />
            <span
              className="mt-2"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              {category}
            </span>
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <div className="flex-grow-1 bg-light">
        <Swiper
          className="w-100 h-100 car-swiper"
          loop={true}
          speed={800}
          slidesPerView={1}
          modules={[]} // keep Navigation removed
          onSlideChange={(swiper) => {
            const current = allSlides[swiper.realIndex];
            setActiveCategory(current.category);
          }}
        >
          {allSlides.map((slide, idx) => (
            <SwiperSlide key={idx} className="slide-container">
              {typeof slide.item === "string" ? (
                <img src={slide.item} alt={`${slide.category} ${idx}`} />
              ) : slide.item.type === "youtube" ? (
                <iframe
                  src={slide.item.src.replace("watch?v=", "embed/")}
                  title={`YouTube ${idx}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : slide.item.type === "image" ? (
                <img src={slide.item.src} alt={`${slide.category} ${idx}`} />
              ) : null}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
