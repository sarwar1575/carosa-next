"use client";

import DealersBanner from "@/components/dealers/DealersBanner";
import Banner from "../view/details/comps/Banner";
import { Col, Container, Row } from "react-bootstrap";
import CarFilters from "./filters/CarFilters";
import CarCollectionTab from "./filters/CarCollectionTab";
import CarsCard from "@/components/home/CarsCard";

function CarListing() {
  return (
    <>
          <Banner />
          <section className="padding-Y-X">
            <Container fluid>
              <Row>
                <Col xs={12}>
                <CarCollectionTab />
                </Col>
                <Col xl={3} className="">
                <CarFilters />
                </Col>
                <Col xl={9}>
                <CarsCard slider={false}/>
                </Col>
              </Row>
            </Container>
          </section>
    </>
  )
}

export default CarListing;
