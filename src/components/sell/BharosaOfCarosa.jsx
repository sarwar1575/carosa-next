"use client";

import { Col, Container, Row } from "react-bootstrap";
import bharosa from "@/data/BharosaOfCarosa.json";

function BharosaOfCarosa() {
  return (
    <>
      <section className="bharosaMainParent padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold m-0">
                    <span className="car">CAR</span>
                    <span className="osa">OSA</span> Ka Bharosa
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-3 pb-3">
            {bharosa.map((items, index)=>(
                <div className="col mb-3" key={index}>
                    <div className="cardMain bg-white p-5 d-flex flex-column align-items-center justify-content-center text-center">
                        <img src={items.image} alt="" className="pb-3" height={45}/>
                        <p className="m-0 fSize-3 fw-semibold">{items.title}</p>
                    </div>
                </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default BharosaOfCarosa;
