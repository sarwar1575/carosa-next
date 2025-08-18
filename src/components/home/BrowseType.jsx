import React from "react";
import sighting from "../../data/BrowseType.json";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

function BrowseType() {
  return (
    <>
      <section className="sightingMain padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold">Browse by Type</h1>
                </div>
                <div className="viewAll">
                  <Link href="" className="fSize-3 fw-medium viewBtn">
                    View All{" "}
                    <img
                      src="/images/arrowRight.png"
                      alt=""
                      width={14}
                      className="ms-2"
                    />{" "}
                  </Link>
                </div>
              </div>
            </Col>
            {sighting.map((items, index)=>(
                <Col xl={2} lg={3} md={3} sm={4} key={index}>
                    <div className="sightingsParent">
                        <div className="sightingVideo position-relative">
                            <Link href="">
                            <img src={items.image} alt="" className="w-100 object-fit-cover rounded-4" height={295}/>
                            <div className="availableCard">
                                <p className="text-white m-0 fSize-3 fw-medium">{items.available} Cars</p>
                                <h4 className="text-white fSize-5 fw-semibold">{items.types}</h4>
                            </div>
                            </Link>
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

export default BrowseType;
