import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import FormHeadingComponents from "../FormHeadingComponents";

function ModalForm({details,
  setDetails,
  filteredModels,
  searchModel,
  setSearchModel,
  backTo2,
  goStep4,}) {
  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep4}>
        <div className="brandsMain d-flex align-items-center justify-content-between pb-3">
          <div>
            <h6 className="fSize-8-5 fw-semibold">Model</h6>
          </div>
          <div className="searchBrand position-relative">
            <input
              placeholder="Search by Model"
              className="rounded-pill border-0 py-2 px-5"
              value={searchModel}
              onChange={(e) => setSearchModel(e.target.value)}
            />
            <Image
              src="/images/Search.png"
              className="brandSearchIcon"
              width={12}
              height={12}
              alt="search"
            />
          </div>
        </div>

        <Row className="scollerClass">
          <Col xs={12}>
          <p className="fSize-2 fw-medium text-black">POPULAR AUDI MODELS</p>
          </Col>
          {filteredModels.map((items, i) => {
            const name = items.brandName || items.modelName || items.name || "";
            const isActive = details.model === name;
            return (
              <Col xl={3} key={i} className="position-relative mb-3">
                <button
                  type="button"
                  className={`select_carmodel bg-white rounded-3 d-flex flex-column align-items-center justify-content-center p-2 w-100 ${
                    isActive ? "border border-success" : ""
                  }`}
                  onClick={() => selectModel(items)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={items.image} alt={name} />
                  <p className="fSize-3 fw-medium text-dark pt-3">{name}</p>
                </button>
              </Col>
            );
          })}
        </Row>

        <div className="d-flex align-items-center justify-content-end gap-4 mt-3">
          <div className="priveBtn">
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
              onClick={backTo2}
            >
              Preview
            </button>
          </div>

          <div className="bookBtn nextBtn">
            <button
              type="submit"
              className="bookHere text-white fSize-5 fw-semibold py-2 px-5 rounded-1"
            >
              Next{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="right_nx-ic fSize-2"
              />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ModalForm;
