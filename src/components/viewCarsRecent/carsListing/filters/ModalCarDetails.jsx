import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function ModalCarDetails() {
  const filterItems = [
    "Model Year",
    "Kms Driven",
    "Fuel",
    "Body Type",
    "Transmission",
    "Color",
    "Features",
    "Seats",
    "Owners",
  ];

  return (
    <>
      {filterItems.map((item, index) => (
        <div
          key={index}
          className="carModals d-flex align-items-center justify-content-between border-bottom pb-2 mb-3"
        >
          <p className="m-0 fSize-4 fw-semibold text-dark">{item}</p>
          <div className="modalsCardDown">
            <Link
              href=""
              className="listModal d-flex justify-content-center align-items-center"
            >
              <FontAwesomeIcon icon={faAngleDown} className="angleDown" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ModalCarDetails;
