"use client";

import {
  faIndianRupeeSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import recentcarsData from "../../data/RecentlyViewedCars.json";
import SelectedCarFilter from "../viewCarsRecent/carsListing/filters/SelectedCarFilter";

function CarItem({ items, href }) {
  return (
    <>
    
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
              <p className="text-dark m-0 py-1 px-4 fSize-2 fw-medium text-center">
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
            <h4 className="fSize-4 fw-semibold">{items.brand}</h4>
            <p className="fSize-3 fw-normal">{items.modal}</p>
            <p className="fSize-3 fw-normal">
              <FontAwesomeIcon icon={faLocationDot} style={{ width: 13, height: 13 }} />{" "}
              {items.location}
            </p>
          </div>

          <div className="vehicleCapibility mt-3 d-flex justify-content-between align-items-center px-0 border-bottom">
            <div className="miles d-flex align-items-center flex-column gap-2">
              <img src="/images/Icon.png" alt="" width={16} />
              <p className="fSize-3 fw-normal">{items.use} Miles</p>
            </div>
            <div className="pump d-flex align-items-center flex-column gap-2">
              <img src="/images/pumpsec.png" alt="" width={16} />
              <p className="fSize-3 fw-normal">{items.vehicle}</p>
            </div>
            <div className="auto d-flex align-items-center flex-column gap-2">
              <img src="/images/auto__matic.png" alt="" width={16} />
              <p className="fSize-3 fw-normal">{items.fModal}</p>
            </div>
            <div className="auto d-flex align-items-center flex-column gap-2">
              <img src="/images/own.png" alt="" width={16} />
              <p className="fSize-3 fw-normal">
                {items.own}
                <span>st</span>
              </p>
            </div>
          </div>

          <div className="pricingDetailes d-flex align-items-center justify-content-between mt-3">
            <div>
              <h4 className="m-0 fSize-5 fw-bold">{items.price}</h4>
              <span className="fSize-2 fw-normal">+ {items.charges}</span>
            </div>
            <div>
              <p className="fSize-2 fw-semibold m-0">
                EMI{" "}
                <FontAwesomeIcon icon={faIndianRupeeSign} style={{ width: 12, height: 12 }} />{" "}
                {items.EMI}/m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function CarsCard({
  items = recentcarsData,
  slider = true,
  limit = null, // e.g. 8 ya 10 for home
}) {
  const slugify = (s = "") =>
    s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const list = Array.isArray(items) ? items : [];
  const limited = limit ? list.slice(0, limit) : list;

  // --- Slider Mode (Home Page) ---
  if (slider) {
    return (
      <Swiper
        className="filters-carousel"
        loop={false}
        spaceBetween={20}
        navigation={true}
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
        {limited.map((items, index) => {
          const slug = slugify(`${items.brand}-${items.modal}`);
          const href = `/recentCar/${index}/${slug}`;
          return (
            <SwiperSlide key={index}>
              <CarItem items={items} href={href} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <>
    <SelectedCarFilter />
    <Row className="g-3">
      {limited.map((items, index) => {
        const slug = slugify(`${items.brand}-${items.modal}`);
        const href = `/recentCar/${index}/${slug}`;
        return (
          <Col key={index} xl={3} lg={4} md={6} sm={12}>
            <CarItem items={items} href={href} />
          </Col>
        );
      })}
    </Row>
    </>
  );
}

export default CarsCard;
