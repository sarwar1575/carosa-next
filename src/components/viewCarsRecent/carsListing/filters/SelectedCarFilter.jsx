import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Row } from "react-bootstrap";

function SelectedCarFilter() {
  return (
    <>
      <div className="selectedItemsMain">
        <div className="d-flex gap-3 align-items-center mb-3">
          <div className="availableText">
            <p className="m-0 fSize-4 text-dark"><span className="fSize-5 fw-bold">1726</span> Used cars in Delhi NCR</p>
          </div>
          <div className="selectItems d-flex gap-3">
            <div className="chips d-flex align-items-center gap-2 px-4 py-2 border rounded-pill">
              <span className="fSize-3 fw-medium">Maruti</span>
              <Link href="">
                <FontAwesomeIcon icon={faXmark} className="cancleClick fSize-3"/>
              </Link>
            </div>
             <div className="d-flex align-items-center gap-2 chips px-4 py-2 border rounded-pill">
              <span className="fSize-3 fw-medium">Hyundai</span>
              <Link href="">
                <FontAwesomeIcon icon={faXmark} className="cancleClick fSize-3"/>
              </Link>
            </div>
          </div>
          <div className="clearFilter">
            <Link href="" className="fst-italic fSize-4 fw-normal clearBtn">Clear All</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedCarFilter;
