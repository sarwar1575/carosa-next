import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function DealersBanner() {
  return (
    <>
      <section className="mainBanner position-relative">
        <div className="position-relative">
          <div className="dealerBan_img_dx">
            <img
              src="/assets/img/dealersBanner.png"
              alt=""
              className="w-100 object-fit-cover"
            />
          </div>

          {/* Text overlay */}
          <Container fluid className="dealerBannerPositions">
            <Row>
              <Col xs={7} className="padding-Y-X">
                <div className="bannerContents dealerBanner mt-0">
                  {/* <p className="fSize-6 fw-bold text-white">Find cars for sale and near you</p> */}
                  <h1 className="fSize-over fw-semibold text-white d-inline-block pb-3 mb-4">
                    <span className="d-inline-block fSize-12 ">
                      Welcome Back,
                    </span>
                    <br />
                    Mr. Rajat Gupta
                  </h1>
                  <p className="fSize-6 fw-normal text-white">
                    Good to see you again!
                  </p>
                  <p className="fSize-6 fw-normal d-inline-block text-wrap text-white">
                    You’re all set to start creating new listings and showcase
                    your cars to verified buyers.
                  </p>
                </div>
                <Row>
                  <Col lg={10}>
                    <div className="detailsBox bg-white p-4">
                      <div className="d-flex gap-2 align-items-center pb-3">
                        <div className="locationIcon">
                          <Image
                            src="/assets/img/stash_location.png"
                            alt="Location Icon"
                            width={28}
                            height={28}
                          />
                        </div>
                        <div className="loc_text">
                          <p className="m-0 fSize-5 fw-semibold text-dark">
                            <span>Your Location:</span> Ashok Vihar
                          </p>
                        </div>
                      </div>
                      <div className="d-flex gap-2 align-items-center pb-4">
                        <div className="locationIcon">
                          <Image
                            src="/assets/img/delivery_center.png"
                            alt="Location Icon"
                            width={25}
                            height={16}
                          />
                        </div>
                        <div className="loc_text">
                          <p className="m-0 fSize-4 fw-medium text-dark">
                            <span>Nearest Delivery Centre:</span>
                          </p>
                        </div>
                      </div>
                      <div className="mainLoc_tx">
                        <p className="fSize-3 fw-normal text-dark text-wrap">
                          Shop No.4, DDA Market, Kakaji Lane, Swami Narayan
                          Marg, Near Shakti Apartments, Opp. Bharat Nagar
                          Cricket Academy, Ashok Vihar Phase 3, Delhi – 110052
                        </p>
                      </div>
                      <div className="listingButton_del w-100">
                        <Link
                          href="/RegistrationYourCar"
                          className="createList fSize-5 fw-bold text-dark py-3 w-100 d-inline-block text-center rounded-2"
                        >
                          Create Listing
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default DealersBanner;
