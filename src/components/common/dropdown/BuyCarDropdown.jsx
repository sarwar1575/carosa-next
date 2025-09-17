"use client";


import { Col, Container, Row } from "react-bootstrap";
import dropdownData from "../../../data/BuyDropdown.json";
import Image from "next/image";
import Link from "next/link";

function BuyCarDropdown() {
  return (
    <>
      <div className="mega-menu p-3" role="menu" aria-label="Buy used car">
        <Container fluid>
          <Row>
            <Col xs={12}>
            <div className="industriesTop__head">
              <p className="fSize-4 fw-normal">Industries</p>
              </div>
            </Col>
            {dropdownData.length > 0 &&
              dropdownData.map((dropdownitems, ind) => (
                <Col xs={3} key={ind}>
                    <Link href="">
                    <div className="d-flex gap-1">
                        <div className="industries__logo">
                            <img src={dropdownitems.image} alt="" className="object-fit-cover" height={36} width={36}/>
                        </div>
                        <div className="industries__titles">
                            <h6 className="fSize-3 fw-bold text-black m-1">{dropdownitems.heading}</h6>
                            <p className="fSize-2 fw-normal">{dropdownitems.discriptions}</p>
                        </div>
                    </div>
                    </Link>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BuyCarDropdown;
