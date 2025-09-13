"use client";
import Image from "next/image";
import { useState } from "react";
import ModalCarDetails from "./ModalCarDetails";
import BrandsCarsList from "./BrandsCarsList";

function CarFilters() {
  const [minValue, setMinValue] = useState(100000);
  const [maxValue, setMaxValue] = useState(3000000);
  return (
    <>
      <div className="carFilterMain bg-white py-3 px-3">
        <div className="budget-card border-bottom pb-2 mb-4">
          <h6 className="fSize-4 fw-medium text-black">Your Budget</h6>

          <div className="rangAmmo d-flex justify-content-between mt-2">
            <span className="fSize-3 fw-semibold">
              ₹ {minValue.toLocaleString("en-IN")}
            </span>
            <span className="fSize-3 fw-semibold">
              ₹ {maxValue.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="range-container position-relative">
            <input
              type="range"
              min="100000"
              max="3000000"
              value={minValue}
              onChange={(e) => setMinValue(Number(e.target.value))}
              className="range-slider"
            />
            <input
              type="range"
              min="100000"
              max="3000000"
              value={maxValue}
              onChange={(e) => setMaxValue(Number(e.target.value))}
              className="range-slider"
            />
          </div>

          <div className="max__min d-flex justify-content-between text-muted mt-1 small">
            <span className="fSize-1 fw-normal">Minimum</span>
            <span className="fSize-1 fw-normal">Maximum</span>
          </div>
        </div>   
          <BrandsCarsList />    
          <ModalCarDetails />
      </div>
    </>
  );
}

export default CarFilters;
