"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShare, faEye, faHeart, faDownload, faPrint, faEdit, faLocationDot, faIndianRupeeSign, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
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

function Publish() {
  const categories = carData;
  const allSlides = flattenData(categories);

  const [activeCategory, setActiveCategory] = useState("Exterior");

  return (
    <Container className="py-4">
      {/* Success Header */}
      <Row className="mb-4">
        <Col xs={12}>
          <div className="text-center">
            <FontAwesomeIcon 
              icon={faCheckCircle} 
              className="text-success mb-3" 
              style={{ fontSize: '3rem' }}
            />
            <h3 className="text-dark fw-bold mb-2">Car Successfully Published!</h3>
            <p className="text-muted fSize-4">Your listing is now live and visible to potential buyers</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Car Showcase Gallery */}
        <Col lg={8} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="d-flex overflow-hidden" style={{ height: "500px" }}>
                {/* Sidebar */}
                <div
                  className="buttonSide text-white d-flex flex-column p-2"
                  style={{backgroundColor: "#1E3A8A", borderRadius: "8px 0px 0px 8px" }}
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
                    modules={[]}
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
            </Card.Body>
          </Card>
        </Col>

        {/* Car Details Card */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              {/* Car Title */}
              <h2 className="fw-bold mb-1 text-dark">Mahindra XUV300, 2023</h2>
              <p className="fSize-4 fw-normal mb-3 text-muted">2.0 GTX+ 5dr Auto SUV</p>
              
              {/* Specification Tags */}
              <div className="d-flex gap-2 align-items-center mb-3">
                {/* Mileage Badge - Split Design */}
                <div className="position-relative">
                  <span className="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill fSize-3 fw-normal me-1">
                    40,780
                  </span>
                  <span className="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill fSize-3 fw-normal position-absolute" 
                        style={{ top: '2px', left: '8px', zIndex: -1 }}>
                    km
                  </span>
                </div>
                
                {/* Owner Badge - Split Design */}
                <div className="position-relative">
                  <span className="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill fSize-3 fw-normal me-1">
                    1st
                  </span>
                  <span className="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill fSize-3 fw-normal position-absolute" 
                        style={{ top: '2px', left: '8px', zIndex: -1 }}>
                    owner
                  </span>
                </div>
                
                {/* Fuel Badge - Single */}
                <span className="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill fSize-3 fw-normal">
                  Petrol
                </span>
                
                {/* Transmission Badge - Single */}
                <span className="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill fSize-3 fw-normal">
                  Automatic
                </span>
              </div>

              {/* Partner Badge */}
              <div className="viewCarosaBisk border-bottom pb-4">
                    <span className="text-white m-0 py-1 px-3 fSize-2 fw-normal">
                    CAROSA Assured
                    </span>
                  </div>

              {/* Pricing Information */}
              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="pricing-section">
                    <p className="fSize-3 fw-normal mb-1 text-muted">Listing Price</p>
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold mb-0 text-dark me-2">₹8.93 Lakh</h5>
                      <FontAwesomeIcon icon={faEye} className="text-muted" style={{ fontSize: '12px' }} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pricing-section">
                    <p className="fSize-3 fw-normal mb-1 text-muted">Offer Price</p>
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold mb-0 text-dark me-2">₹7.93 Lakh</h5>
                      <FontAwesomeIcon icon={faEye} className="text-muted" style={{ fontSize: '12px' }} />
                    </div>
                  </div>
                </div>
              </div>


            </Card.Body>
          </Card>
        </Col>
      </Row>

   
    </Container>
  );
}

export default Publish;
