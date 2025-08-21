"use client";
import { Col, Row } from "react-bootstrap";
import carosaBharosa from "../../../../../data/CarosaBharosa.json";
function CarosaKaBharosa() {
  return (
    <>
           <Row className="mt-4">
            <Col xs={12} className="pb-3">
              <div className="">
                <div className="webMainTitle">
                  <h1 className="fSize-6 fw-bold m-0">
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6 row-cols-xxl-6 g-2 g-lg-3 pb-3">
            {carosaBharosa.map((items, index)=>(
                <div className="col" key={index}>
                    <div className="cardMain bg-white p-4 d-flex flex-column align-items-center justify-content-center text-center h-100">
                        <img src={items.image} alt="" className="pb-3" height={45}/>
                        <p className="m-0 fSize-2 fw-semibold text-wrap">{items.title}</p>
                    </div>
                </div>
            ))}
          </div>
    </>
  )
}

export default CarosaKaBharosa;
