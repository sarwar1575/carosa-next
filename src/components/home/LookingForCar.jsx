import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import lookForCar from "../../data/LookingForCar.json";
import Link from "next/link";

function LookingForCar() {

  return (
    <>
      <section className="loogingForCarHere padding-Y-X">
        <Container fluid>
          <Row>
            {lookForCar.map((items, index) => (
              <Col xl={6} lg={6} md={12} key={index} className="mb-lg-0 mb-3">
                <div className="carBody position-relative rounded-4">
                  <img
                    src={items.image}
                    alt=""
                    className="w-100 h-100 object-fit-cover rounded-4"
                  />
                  <div className="titles pe-5">
                    <h1 className="text-white fSize-11 fw-bold">{items.heading}</h1>
                    <p className="text-white fSize-5 fw-semibold text-wrap">{items.paragraph}</p>
                    <div className="bookBtn mt-5">
                        <Link href={items.slug} className="fSize-3 fw-medium buyBtn text-dark">Get Started <img src="/images/arrowRight.png" alt="" width={14} className="ms-2"/></Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LookingForCar;
