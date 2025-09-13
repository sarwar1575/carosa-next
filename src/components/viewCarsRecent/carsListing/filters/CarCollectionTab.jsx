"use client";

import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";

function CarCollectionTab() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Deluxe", "Luxury"];

  return (
    <>
      <div className="CarTabSelect mb-4 p-2">
        <Row>
          {tabs.map((tab) => (
            <Col xl={4} key={tab}>
              <div
                className={`tab py-3 cursor-pointer ${
                  activeTab === tab ? "bg-white" : "bg-transparent"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <Link href="" onClick={(e) => e.preventDefault()}>
                  <p
                    className={`text-center m-0 ${
                      activeTab === tab ? "text-dark fSize-3 fw-medium" : "text-dark fSize-3 fw-normal"
                    }`}
                  >
                    {tab}
                  </p>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default CarCollectionTab;
