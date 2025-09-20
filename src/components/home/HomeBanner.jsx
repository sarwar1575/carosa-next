"use client";

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";

function HomeBanner() {
  const pathname = usePathname();
  return (
    <>
   <section className="mainBanner position-relative">
  <div className="linearBox position-relative">
    <img
      src="/assets/img/Background.png"
      alt=""
      className="w-100 object-fit-cover home__bannerXp"
      height={800}
    />

    {/* Text overlay */}
    <Container fluid className="position-absolute top-50 start-50 translate-middle">
      <Row>
        <Col xs={12}>
          <div className="bannerContents padding-Y-X mt-5">
            <p className="fSize-6 fw-bold text-white">Find cars for sale and near you</p>
            <h1 className="fSize-over fw-semibold text-white banner__biggerText">
              4,675 Vehicles
              <br />
              Available
            </h1>
            <div className="buttonsBookingSelling d-flex align-items-center gap-sm-5 gap-3 pt-4">
              <div className="bookBtn">
                <Link href='' className="fSize-7 fw-bold buyBtn">Buy Now <img src="/images/arrowRight.png" alt="" width={14} className="ms-2"/></Link>
              </div>
               <div className="bookBtn">
                <Link href='/sell' className={`fSize-7 fw-bold buyBtn ${pathname === "/sell" ? "active-class" : ""}`}>Sell <img src="/images/arrowRight.png" alt="" width={14} className="ms-2"/></Link>
              </div>
            </div>
            <div className="modalTabsListsBtns pt-sm-5 pt-4">
              <p className="m-0 fSize-6 fw-bold text-white">Or Browse Featured Model</p>
              <div className="modalsBtns mt-3 d-flex align-items-center gap-4">
                <Link href="" className="carTabs fSize-4 fw-medium text-white text-uppercase"><img src="/images/suvcar.png" alt="" width={26} className="me-1"/> Body</Link>
                <Link href="" className="carTabs fSize-4 fw-medium text-white text-uppercase"><img src="/images/sedancar.png" alt="" width={26} className="me-1"/> Budget</Link>
                <Link href="" className="carTabs fSize-4 fw-medium text-white text-uppercase"><img src="/images/hacthbackcar.png" alt="" width={26} className="me-1"/> Fuel type</Link>
                {/* <Link href="" className="carTabs fSize-4 fw-medium text-white text-uppercase"><img src="/images/coupecar.png" alt="" width={26} className="me-1"/> Coupe</Link>
                <Link href="" className="carTabs fSize-4 fw-medium text-white text-uppercase"><img src="/images/haybridcar.png" alt="" width={26} className="me-1"/> Hybrid</Link> */}

              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</section>

    </>
  );
}

export default HomeBanner;
