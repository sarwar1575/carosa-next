"use client";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const brands = [
  {
    name: "Maruti",
    count: 35,
    models: ["Swift", "Baleno", "WagonR"],
  },
  {
    name: "Tata",
    count: 28,
    models: ["Nexon", "Harrier", "Safari"],
  },
  {
    name: "Hyundai",
    count: 22,
    models: ["Creta", "i20", "Venue"],
  },
  {
    name: "KIA",
    count: 18,
    models: ["Seltos", "Sonet"],
  },
  {
    name: "Honda",
    count: 20,
    models: ["City", "Amaze"],
  },
  {
    name: "Renault",
    count: 12,
    models: ["Kwid", "Triber"],
  },
  {
    name: "Renault",
    count: 12,
    models: ["Kwid", "Triber"],
  },
  {
    name: "Renault",
    count: 12,
    models: ["Kwid", "Triber"],
  },
  {
    name: "Renault",
    count: 12,
    models: ["Kwid", "Triber"],
  },
  {
    name: "Renault",
    count: 12,
    models: ["Kwid", "Triber"],
  },
];

function BrandsCarsList() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (brandName) => {
    setExpanded(expanded === brandName ? null : brandName);
  };

  return (
    <>
      <div className="allBrand border-bottom pb-2 mb-3">
        <div className="makeModel mb-0">
          <h6 className="fSize-4 fw-medium text-black mb-3">Make & Model</h6>
          <div className="inputfilter position-relative mb-3">
            <input
              type="search"
              placeholder="Search a brand or model"
              className="w-100 py-2 ps-5 rounded-2"
            />
            <Image
              src="/images/Search.png"
              width={16}
              height={16}
              className="searchIconWrap d-block"
              alt="Search"
            />
          </div>
          <h6 className="fSize-4 fw-normal m-0">All Brands</h6>
        </div>
        <div className="tt">
          {brands.map((brand, index) => (
            <div key={index} className="card__listing" onClick={() => toggleExpand(brand.name)}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="checkBox mt-2">
                    <input type="checkbox" className="custom-checkbox" />
                  </div>
                  <div className="brand__logo">
                    <Image
                      src="/images/brandslogo.png"
                      width={30}
                      height={12}
                      alt={brand.name}
                    />
                  </div>
                  <div className="barnd__name">
                    <p className="m-0 fSize-4 fw-normal text-black">
                      {brand.name}
                    </p>
                  </div>
                </div>

                <div className="items d-flex gap-2">
                  <div className="numberOfCar fSize-3 fw-medium">
                    ({brand.count})
                  </div>
                  <div className="brandlistdrop">
                    <button
                      type="button"
                      
                      className="btn p-0 border-0 bg-transparent"
                    >
                      <FontAwesomeIcon
                        icon={expanded === brand.name ? faAngleUp : faAngleDown}
                        className="angleDown"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable List */}
              {expanded === brand.name && (
                <ul className="brand-models list-unstyled ms-5 mt-2">
                  {brand.models.map((model, i) => (
                    <li
                      key={i}
                      className="py-1 fSize-3 text-muted d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <label className="checkBox mt-2">
                          <input type="checkbox" className="custom-checkbox" />
                        </label>
                        <p className="m-0">{model}</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div className="numberOfCar fSize-1 fw-medium">
                          ({brand.count})
                        </div>
                           <div>
                        <Link href="">
                         <FontAwesomeIcon icon={faAngleDown} className="w-6 h-6 text-red-500" />
                        </Link>
                      </div>
                      </div>
                   
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandsCarsList;
