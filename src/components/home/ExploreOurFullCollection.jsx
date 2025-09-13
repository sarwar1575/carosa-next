import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import recentcars from "../../data/ExploreCollection.json";
import {
  faIndianRupeeSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import RecentlyViewedCars from './RecentlyViewedCars';

function ExploreOurFullCollection() {
  return (
    <>
      
         <RecentlyViewedCars title='Explore Our Full Collection'/>
    </>
  )
}

export default ExploreOurFullCollection;
