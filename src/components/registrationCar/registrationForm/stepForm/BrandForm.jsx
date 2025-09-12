import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Col, Form, Row } from "react-bootstrap";

function BrandForm({
  years,
  details,
  setDetails,
  filteredBrands,
  searchBrand,
  setSearchBrand,
  backTo1,
  goStep3,
}) {
  const handleYearChange = (e) =>
    setDetails((d) => ({ ...d, year: e.target.value }));

  const selectBrand = (b) =>
    setDetails((d) => ({ ...d, brand: b.brandName || b.name || "" }));
  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep3}>
        <div className="inputBody mb-3">
          {" "}
          <label className="fSize-3 fw-medium mb-1">Make Year</label>{" "}
          <Form.Select
            aria-label="Select Year"
            className="selector py-2 px-3 rounded-1 fSize-2 w-100"
            value={details.year}
            onChange={handleYearChange}
          >
            {" "}
            <option value="">Select Year</option>{" "}
            {years.map((y) => (
              <option key={y} value={y}>
                {" "}
                {y}{" "}
              </option>
            ))}{" "}
          </Form.Select>{" "}
        </div>

        {/* Brand */}
        <div className="brandsMain d-flex align-items-center justify-content-between pb-3">
          <div>
            <h6 className="fSize-8-5 fw-semibold">Brand</h6>
          </div>
          <div className="searchBrand position-relative">
            <input
              placeholder="Search by Brand"
              className="rounded-pill border-0 py-2 px-5"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
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
          {filteredBrands.map((items, i) => {
            const name = items.brandName || items.name || "";
            const isActive = details.brand === name;
            return (
              <Col xl={3} key={i} className="position-relative mb-3">
                <button
                  type="button"
                  className={`select_carbrands bg-white rounded-3 d-flex flex-column align-items-center justify-content-center w-100 ${
                    isActive ? "border border-success" : ""
                  }`}
                  onClick={() => selectBrand(items)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={items.image} alt={name} />
                  <p className="fSize-3 fw-medium text-dark mt-2">{name}</p>
                </button>
              </Col>
            );
          })}
        </Row>

        <div className="d-flex align-items-center justify-content-end gap-4 mt-4">
          <div className="priveBtn">
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
              onClick={backTo1}
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

export default BrandForm;
