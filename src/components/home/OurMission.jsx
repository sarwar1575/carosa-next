import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import missions from "../../data/Mission.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

function OurMission() {
  return (
    <>
      <section className="missionOurMain padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold">The Heart of Our Mission</h1>
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
          </Row>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-3 pb-3">
            {missions.map((items, index) => (
              <div className="col" key={index}>
                <div className="cardParent bg-white rounded-3 p-4">
                    <div className="d-flex align-items-center gap-4 pb-3">
                  <div className="ratting d-flex gap-1">
                    <Link href="">
                      <div className="rattingBox d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faStar} className="startIcon" />
                      </div>
                    </Link>
                     <Link href="">
                      <div className="rattingBox d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faStar} className="startIcon" />
                      </div>
                    </Link>
                     <Link href="">
                      <div className="rattingBox d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faStar} className="startIcon" />
                      </div>
                    </Link>
                     <Link href="">
                      <div className="rattingBox d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faStar} className="startIcon" />
                      </div>
                    </Link>
                     <Link href="">
                      <div className="rattingBox d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faStar} className="startIcon" />
                      </div>
                    </Link>
                  </div>
                  <div className="verify d-flex gap-2 align-items-center">
                      <div className="verifyTik d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faCheck} className="verifyCheck"/>
                      </div>
                      <div className="verifyTitle">
                        <span className="fSize-2 fw-normal">Verified</span>
                      </div>
                  </div>
                  </div>
                  <div className="ratersTitle">
                    <h6 className="fSize-3 fw-medium pb-1">{items.missionTitle}</h6>
                    <p className="fSize-2 fw-normal pb-1">{items.missionDiscription}</p>
                    <p className="fSize-3 fw-medium m-0">{items.person}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default OurMission;
