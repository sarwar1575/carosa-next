import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import brandCars from "../../data/FavoriteBrand.json";

function YourFavoriteBrand() {
  return (
    <>
      <section className="yourBrandMain padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold">
                    Choose Your Favorite Brand
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
          <div
            className="row g-3 g-lg-2 pb-3"
            style={{
              "--bs-columns": 1,
              "@media (min-width: 768px)": { "--bs-columns": 4 },
              "@media (min-width: 992px)": { "--bs-columns": 5 },
              "@media (min-width: 1200px)": { "--bs-columns": 7 },
            }}
          >
            {brandCars.map((items, index) => (
              <div className="col position-relative" key={index}>
                <div className="cardBrands bg-white rounded-3 d-flex align-items-center justify-content-center ">
                  <img
                    src={items.image}
                    alt=""
                    // width={100}
                    // height={100}
                    // className="w-100"
                  />
                  <div className="position-absolute bottom-0 start-50 translate-middle-x">
                    <p className="fSize-3 fw-medium text-dark">{items.brandName}</p>
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

export default YourFavoriteBrand;
