"use client";

import DealersBanner from "@/components/dealers/DealersBanner";
import Banner from "../view/details/comps/Banner";
import { Col, Container, Row } from "react-bootstrap";
import CarFilters from "./filters/CarFilters";

function CarListing() {
  return (
    <>
          <Banner />
          <section className="padding-Y-X">
            <Container fluid>
              <Row>
                <Col xl={3} className="">
                <CarFilters />
                </Col>
              </Row>
            </Container>
          </section>
    </>
  )
}

export default CarListing;
