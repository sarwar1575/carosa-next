"use client";
import { Container, Row, Col } from "react-bootstrap";
import workData from "@/data/Work.json";
import Link from "next/link";

function CarosaWork() {
  return (
    <>
      <section className="work-section padding-Y-X">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold m-0">
                    How <span className="car">CAR</span>
                    <span className="osa">OSA</span> Works
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
          </Row>
          <div className="work-panel bg-white p-3 mb-4">
            <Row className="">
              {workData.map((item) => (
                <Col key={item.id} xs={12} md={6} lg={3}>
                  <div className="work-card">
                    <div className="work-image-wrap">
                      <img
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-100 rounded-top"
                       
                        height="400"
                      />
                    </div>

                    <div className="work-caption text-center pt-4">
                      <h3 className="work-title fSize-4 fw-semibold">
                        {item.title}
                      </h3>
                      <p className="work-desc fSize-3 fw-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <Row>
            <Col xs={12}>
              <div className="watchWorksBtn d-flex justify-content-center">
                <Link href="" className="watchBtn py-3 px-4 rounded-3 text-white fSize-3 fw-normal">Watch how it works <img src="/images/watchBtn.png" width={20} height={20} className="ms-2"/></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CarosaWork;
