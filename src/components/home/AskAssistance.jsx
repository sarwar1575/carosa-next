import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gupshup from "../../data/GupSup.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function AskAssistance() {
  return (
    <>
      <section className="askAssistanceMain padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xl={4}>
              <Row className="h-100">
                <Col xs={12} className="pb-3">
                  <div className="d-flex justify-content-between align-items-center h-100">
                    <div className="webMainTitle">
                      <h1 className="fSize-11 fw-bold">
                        The Heart of Our Mission
                      </h1>
                    </div>
                    {/* <div className="viewAll">
                  <Link href="" className="fSize-3 fw-medium viewBtn">
                    View All{" "}
                    <img
                      src="/images/arrowRight.png"
                      alt=""
                      width={14}
                      className="ms-2"
                    />{" "}
                  </Link>
                </div> */}
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="asksMainParent px-4 py-5 h-100">
                    <div className="here pb-5">
                      <div className="socialAsker d-flex align-items-center gap-3">
                        <img src="/images/whatsaapchat.png" alt="" />
                        <div className="socialText">
                          <h6 className="m-0 fSize-4 fw-semibold pb-1">
                            Ask us on WhatsApp!
                          </h6>
                          <p className="m-0 fSize-3 fw-normal">
                            Get instant support via experts
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="here pb-5">
                      <div className="socialAsker d-flex align-items-center gap-3">
                        <img src="/images/callback.png" alt="" />
                        <div className="socialText">
                          <h6 className="m-0 fSize-4 fw-semibold pb-1">
                            Ask us on WhatsApp!
                          </h6>
                          <p className="m-0 fSize-3 fw-normal">
                            Get instant support via experts
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="here">
                      <div className="socialAsker d-flex align-items-center gap-3">
                        <img src="/images/request.png" alt="" />
                        <div className="socialText">
                          <h6 className="m-0 fSize-4 fw-semibold pb-1">
                            Ask us on WhatsApp!
                          </h6>
                          <p className="m-0 fSize-3 fw-normal">
                            Get instant support via experts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={8}>
              <Row className="h-100">
                <Col xs={12} className="pb-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="webMainTitle">
                      <h1 className="fSize-11 fw-bold m-0">
                        Gaadi ki Gup-Shup by <span className="car">CAR</span>
                        <span className="osa">OSA</span>
                      </h1>
                    </div>
                    {/* <div className="viewAll">
                  <Link href="" className="fSize-3 fw-medium viewBtn">
                    View All{" "}
                    <img
                      src="/images/arrowRight.png"
                      alt=""
                      width={14}
                      className="ms-2"
                    />{" "}
                  </Link>
                </div> */}
                  </div>
                </Col>
                {gupshup.map((items, index) => (
                  <Col xl={3} key={index}>
                    <div className="gupshupCardParent">
                      <div className="card border-0">
                        <img
                          src={items.image}
                          alt=""
                          className="w-100 object-fit-cover"
                        />
                        <div className="card-body position-relative">
                          <p className="m-0 fSize-3 fw-semibold">
                            {items.discriptions}
                          </p>
                          <div className="dottetDropdown">
                            <Link href="">
                              <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="dotVartical text-dark"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AskAssistance;
