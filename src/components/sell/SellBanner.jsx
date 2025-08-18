"use client";

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function SellBanner() {
  return (
    <>
      <section className="sellBannerMain position-relative">
        <div className="bannerHere">
          <img
            src="/images/sellbanner.png"
            alt=""
            className="w-100 object-fit-cover"
            height={730}
          />
        </div>
        <Container
          fluid
          className="position-absolute top-50 start-50 translate-middle padding-Y-X mt-5"
        >
          <Row>
            <Col xs={8}>
              <div className="sellBannerContant">
                <h1 className="text-white text-center fSize-over fw-semibold">
                  Sell your car at the
                  <br />
                  best price
                </h1>
              </div>
            </Col>
            <Col xs={4}>
              <div className="map p-4 bg-white rounded-3">
                <div className="currentLocation d-flex align-items-center justify-content-between mb-2">
                  <p className="fSize-3 fw-medium text-dark m-0">
                    Current Location
                  </p>
                  <p className="fSize-3 fw-medium manualLocation m-0">
                    Manual Location
                  </p>
                </div>
                <div className="spaceLocation rounded-5 mb-1">
                  <p className="m-0 fSize-3 fw-normal text-dark">
                    H-161, Sector 63, BSI Business Park, Noida, Uttar Pradesh
                    201309
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112068.7996338383!2d77.29601969268018!3d28.62526648243237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ceff3260c6761%3A0x2ecd01b8bfe74df2!2sH-161%2C%20Sector%2063%20Rd%2C%20H%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!3m2!1d28.6252914!2d77.3784211!5e0!3m2!1sen!2sin!4v1755339350067!5m2!1sen!2sin"
                width="100%"
                  height={250}
                  className="rounded-3"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6216317740204!2d77.36018921114118!3d28.611125675574975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5690af88405%3A0x6d50c7970775e5fa!2sBSI%20Business%20Park%20C51!5e0!3m2!1sen!2sin!4v1683715679193!5m2!1sen!2sin"
                  width="100%"
                  height={350}
                  className="rounded-3"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <div className="createListingBtn mt-2 d-flex align-items-center justify-content-center py-3 rounded-3">
                  <Link href="" className="text-white fSize-4 fw-medium">
                    Create Listing
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SellBanner;
