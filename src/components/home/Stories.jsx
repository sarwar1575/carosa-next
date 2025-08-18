import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import stories from "../../data/StoriesBharosa.json";
import Link from "next/link";

function Stories() {
  return (
    <>
      <section className="storiesMain padding-Y-X mt-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="webMainTitle">
                  <h1 className="fSize-11 fw-bold">Stories of Bharosa</h1>
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
            {stories.map((items, index) => (
              <Col xxl={3} lg={6} sm={6} xs={12} key={index} className="mb-xl-0 mb-3">
                <div className="storyCardParent ">
                  <div className="card border-0">
                    <div className="imagelyr position-relative mb-2">
                      <img
                        src={items.image}
                        alt=""
                        className="w-100 object-fit-cover"
                        height={400}
                      />
                    </div>

                    <div className="card-body border-0 pb-4 position-relative">
                      <div className="storiesTitle d-flex gap-2 align-items-center pb-2">
                        <div className="storyUserProfile">
                          <img
                            src="/images/storyUserImg.png"
                            alt=""
                            className="w-100 h-100 object-fit-cover"
                          />
                        </div>
                        <div className="titleStory d-flex gap-2 align-items-center">
                          <p className="m-0 fSize-4 fw-semibold">
                            {items.userName}
                          </p>
                          <p className="m-0 fSize-4 fw-semibold">
                            | {items.state}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="m-0 fSize-3 fw-semibold">
                          {items.storiesTitle}
                        </p>
                      </div>
                      <div className="storyPlayBtn d-flex align-items-center justify-content-center"><Link href=""><img src="/images/palyBtn.png" alt="" className="object-fit-cover"/></Link></div>
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

export default Stories;
