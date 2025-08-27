"use client";

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import recentcars from "../../data/RecentlyViewedCars.json";
import {
  faIndianRupeeSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function RecentlyViewedCars() {
  const slugify = (s = "") =>
    s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <>
      <section className="recentlyViewCarHere padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold">Recently Viewed Cars</h1>
                </div>
                <div className="viewAll">
                  <Link href="/recentCar" className="fSize-3 fw-medium viewBtn">
                    View All{" "}
                    <img
                      src="/images/arrowRight.png"
                      alt=""
                      width={14}
                      className="ms-2"
                    />
                  </Link>
                </div>
              </div>
            </Col>

            <Swiper
              className="filters-carousel"
              loop={false}
              spaceBetween={20}
              navigation={false}
              pagination={false}
              speed={500}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                500: { slidesPerView: 1.5 },
                700: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
                1400: { slidesPerView: 5 },
              }}
              modules={[Navigation, Autoplay]}
            >
              {recentcars.map((items, index) => {
                const slug = slugify(`${items.brand}-${items.modal}`);
                const href = `/recentCar/${index}/${slug}`;

                return (
                  <SwiperSlide key={index}>
                    <div className="cardMain">
                      <div className="card border-0 position-relative">
                        <Link href={href} className="position-relative">
                          <img
                            src={items.image}
                            alt={`${items.brand} ${items.modal}`}
                            className="w-100 object-fit-cover"
                            height={218}
                          />
                          {items.platform && (
                            <div className="carosaBisk">
                              <p className="text-white m-0 py-1 px-4 fSize-2 fw-normal text-center">
                                {items.platform}
                              </p>
                            </div>
                          )}
                        </Link>

                        <Link href={href}>
                          <div className="addMore bg-white d-flex justify-content-center align-items-center">
                            <img src="/images/readding.png" alt="" width={9} />
                          </div>
                        </Link>

                        <div className="card-body">
                          <div className="vehicleDetaile border-bottom">
                            <h4 className="text-white fSize-4 fw-semibold">
                              {items.brand}
                            </h4>
                            <p className="text-white fSize-3 fw-normal">
                              {items.modal}
                            </p>
                            <p className="text-white fSize-3 fw-normal">
                              <FontAwesomeIcon
                                icon={faLocationDot}
                                // FontAwesome React accepts size keywords; for pixel control, use style
                                style={{ width: 13, height: 13 }}
                              />{" "}
                              {items.location}
                            </p>
                          </div>

                          <div className="vehicleCapibility mt-3 d-flex justify-content-between align-items-center px-4 border-bottom">
                            <div className="miles d-flex align-items-center flex-column gap-2">
                              <img src="/images/miles.png" alt="" width={16} />
                              <p className="text-white fSize-3 fw-normal">
                                {items.use} Miles
                              </p>
                            </div>
                            <div className="pump d-flex align-items-center flex-column gap-2">
                              <img src="/images/pump.png" alt="" width={16} />
                              <p className="text-white fSize-3 fw-normal">
                                {items.vehicle}
                              </p>
                            </div>
                            <div className="auto d-flex align-items-center flex-column gap-2">
                              <img
                                src="/images/automation.png"
                                alt=""
                                width={16}
                              />
                              <p className="text-white fSize-3 fw-normal">
                                {items.vehicle}
                              </p>
                            </div>
                          </div>

                          <div className="pricingDetailes d-flex align-items-center justify-content-between mt-3">
                            <div>
                              <h4 className="m-0 text-white fSize-5 fw-bold">
                                {items.price}
                              </h4>
                              <span
                                className="fSize-2 fw-normal"
                                style={{ color: "#E6E6E6" }}
                              >
                                + {items.charges}
                              </span>
                            </div>
                            <div>
                              <p className="text-white fSize-2 fw-semibold m-0">
                                EMI{" "}
                                <FontAwesomeIcon
                                  icon={faIndianRupeeSign}
                                  style={{ width: 12, height: 12 }}
                                />{" "}
                                {items.EMI}/m
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RecentlyViewedCars;
