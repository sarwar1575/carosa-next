"use client";

import { faArrowRight, faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useMemo, useState } from "react";
import brands from "../../../data/Brands.json";
import model from "../../../data/Model.json";
import variant from "../../../data/Variant.json";

function RegistrationForm() {
  const [step, setStep] = useState(1);

  // Step-1
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");

  // Shared selections
  const [searchBrand, setSearchBrand] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const [details, setDetails] = useState({
    year: "",
    brand: "",
    model: "",
    variant: "",
    fuel: "",
    transmission: "",
    km: "",
  });

  // Helper: current year list (latest -> older)
  const years = useMemo(() => {
    const arr = [];
    const now = new Date().getFullYear();
    for (let y = now; y >= 1990; y--) arr.push(String(y));
    return arr;
  }, []);

  // Minimal variants list (agar tumhare paas JSON hai to usse bind kar lena)
  const variants = ["Base", "Mid", "Top", "Sport", "Limited"];

  // Pattern for Indian Reg. No.
  const regPattern = /^[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,2}\s?\d{1,4}[A-Z]{0,2}$/i;

  // ---- Step 1 handlers
  const goStep2 = () => {
    if (!regNo.trim()) {
      setError("Please enter a registration number.");
      return;
    }
    if (!regPattern.test(regNo.trim())) {
      setError(
        "Please enter a valid registration number (e.g., DL 01 AB 1234)."
      );
      return;
    }
    setError("");
    setStep(2);
  };

  // ---- Step 2 handlers
  const handleYearChange = (e) =>
    setDetails((d) => ({ ...d, year: e.target.value }));

  const filteredBrands = useMemo(() => {
    const q = searchBrand.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter(
      (b) =>
        (b.brandName || "").toLowerCase().includes(q) ||
        (b.name || "").toLowerCase().includes(q)
    );
  }, [searchBrand]);

  const selectBrand = (b) => {
    setDetails((d) => ({ ...d, brand: b.brandName || b.name || "" }));
  };

  const goStep3 = (e) => {
    e.preventDefault();
    // Optional validation
    // if (!details.year) return alert("Please select year");
    // if (!details.brand) return alert("Please select brand");
    setStep(3);
  };

  // ---- Step 3 handlers
  const filteredModels = useMemo(() => {
    const q = searchModel.trim().toLowerCase();
    if (!q) return model;
    return model.filter(
      (m) =>
        (m.brandName || m.modelName || "").toLowerCase().includes(q) ||
        (m.name || "").toLowerCase().includes(q)
    );
  }, [searchModel]);

  const selectModel = (m) => {
    setDetails((d) => ({
      ...d,
      model: m.brandName || m.modelName || m.name || "",
    }));
  };

  const goStep4 = (e) => {
    e.preventDefault();
    // if (!details.model) return alert("Please select model");
    setStep(4);
  };

  // ---- Step 4 handlers
  const handleVariant = (e) =>
    setDetails((d) => ({ ...d, variant: e.target.value }));
  const handleFuel = (e) => setDetails((d) => ({ ...d, fuel: e.target.value }));
  const handleTransmission = (e) =>
    setDetails((d) => ({ ...d, transmission: e.target.value }));
  const handleKm = (e) => setDetails((d) => ({ ...d, km: e.target.value }));

  const goStep5 = (e) => {
    e.preventDefault();
    setStep(5);
  };

  // ---- Back buttons
  const backTo1 = () => setStep(1);
  const backTo2 = () => setStep(2);
  const backTo3 = () => setStep(3);
  const backTo4 = () => setStep(4);

  // ---- Final submit
  const handleSubmitFinal = (e) => {
    e.preventDefault();
    alert(
      "Submitted ✅\n\n" +
        JSON.stringify(
          {
            registration: regNo,
            ...details,
          },
          null,
          2
        )
    );
  };

  return (
    <>
      <section
        className="registrationFormMain"
        style={{ paddingTop: "130px", paddingBottom: "130px" }}
      >
        <Container fluid>
          <Row className="">
            <Col xs={12} className="mb-4">
              <Row className="justify-content-center">
                <Col xs={4}>
                  <div className="carBasicDetails position-relative">
                    <h6 className="bg-white py-3 text-center fw-semibold fSize-6">
                      Vehicle Basic Details
                    </h6>
                    <div className="quadrat"></div>
                    <div className="check d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faCheck} className="fSize-1" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={12}>
              <Row className="justify-content-center">
                <Col xs={5}>
                  <div className="registrationFormBody bg-white p-3 border">
                    <div className="me__tx d-flex justify-content-end pb-3">
                      <Link href="" className="ma_entr fSize-4 fw-medium">
                        Manual Entry
                      </Link>
                    </div>

                    {/* ========= STEP 1: Registration ========= */}
                    {step === 1 && (
                      <>
                        <div className="d-flex justify-content-center">
                          <p className="fSize-4 fw-semibold text-dark">
                            Enter Registration No.
                          </p>
                        </div>

                        <form
                          className="registraionMainFillForm"
                          onSubmit={(e) => {
                            e.preventDefault();
                            goStep2();
                          }}
                        >
                          <div className="plate-wrap mb-2 position-relative d-flex align-items-center bg-white rounded-2">
                            {/* Left emblem (round flag + IND) */}
                            <div
                              className="plate-emblem d-flex align-items-center flex-column gap-1"
                              aria-hidden
                            >
                              <Image
                                src="/assets/img/indiachak.png"
                                height={18}
                                width={18}
                                alt="Ashoka Chakra"
                                className="object-fit-cover"
                              />
                              <span className="ind fSize-1 fw-bold text-black">
                                IND
                              </span>
                            </div>

                            <input
                              type="text"
                              className="plate-input flex-1 border-none outline-none bg-transparent"
                              placeholder="DL 01 AB 1234"
                              aria-label="Vehicle Registration Number"
                              value={regNo}
                              onChange={(e) =>
                                setRegNo(e.target.value.toUpperCase())
                              }
                            />
                          </div>

                          {error && (
                            <div className="pb-2">
                              <small className="text-danger fSize-2">
                                {error}
                              </small>
                            </div>
                          )}

                          <div className="hint d-flex align-items-center gap-2 fSize-2 mt-4 pb-4">
                            <i className="d-inline-flex align-items-center justify-content-center border fSize-1 rounded-circle">
                              ℹ
                            </i>
                            <span>
                              (auto-fill if RTO integration available)
                            </span>
                          </div>

                          <div className="d-flex align-items-center justify-content-end gap-4">
                            <div className="priveBtn">
                              <button
                                type="button"
                                className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
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
                    )}

                    {/* ========= STEP 2: Year + Brand ========= */}
                    {step === 2 && (
                      <>
                        <form
                          className="registraionMainFillForm"
                          onSubmit={goStep3}
                        >
                          {/* Year */}
                          <div className="inputBody mb-3">
                            <label className="fSize-3 fw-medium mb-1">
                              Make Year
                            </label>
                            <Form.Select
                              aria-label="Select Year"
                              className="selector py-2 px-3 rounded-1 fSize-2 w-100"
                              value={details.year}
                              onChange={handleYearChange}
                            >
                              <option value="">Select Year</option>
                              {years.map((y) => (
                                <option key={y} value={y}>
                                  {y}
                                </option>
                              ))}
                            </Form.Select>
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
                                <Col
                                  xl={3}
                                  key={i}
                                  className="position-relative mb-3"
                                >
                                  <button
                                    type="button"
                                    className={`select_carbrands bg-white rounded-3 d-flex flex-column align-items-center justify-content-center w-100 ${
                                      isActive ? "border border-success" : ""
                                    }`}
                                    onClick={() => selectBrand(items)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <img src={items.image} alt={name} />
                                    <p className="fSize-3 fw-medium text-dark mt-2">
                                      {name}
                                    </p>
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
                    )}

                    {/* ========= STEP 3: Model ========= */}
                    {step === 3 && (
                      <>
                        <form
                          className="registraionMainFillForm"
                          onSubmit={goStep4}
                        >
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
                            {filteredModels.map((items, i) => {
                              const name =
                                items.brandName ||
                                items.modelName ||
                                items.name ||
                                "";
                              const isActive = details.model === name;
                              return (
                                <Col
                                  xl={3}
                                  key={i}
                                  className="position-relative mb-3"
                                >
                                  <button
                                    type="button"
                                    className={`select_carmodel bg-white rounded-3 d-flex flex-column align-items-center justify-content-center p-2 w-100 ${
                                      isActive ? "border border-success" : ""
                                    }`}
                                    onClick={() => selectModel(items)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <img src={items.image} alt={name} />
                                    <p className="fSize-3 fw-medium text-dark pt-3">
                                      {name}
                                    </p>
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
                    )}

                    {/* ========= STEP 4: Variant + Other Details ========= */}
                    {step === 4 && (
                      <>
                        <form
                          className="registraionMainFillForm"
                          onSubmit={goStep5}
                        >
                          <div className="brandsMain d-flex align-items-center justify-content-between pb-3">
                            <div>
                              <h6 className="fSize-8-5 fw-semibold">variant</h6>
                            </div>
                          </div>
                          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-3 pb-3 scollerClass">
                            {variant.length > 0 ? (
                              variant.map((items, ind) => (
                                <div className="col" key={ind}>
                                  <div className="variantImage">
                                    <Link href="">
                                    <img
                                      src={items.image}
                                     className="w-100"
                                    />
                                    </Link>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>No items found</p>
                            )}
                          </div>
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
                    )}

                    {/* ========= STEP 5: Review & Submit ========= */}
                    {step === 5 && (
                      <>
                        <form
                          className="registraionMainFillForm"
                          onSubmit={handleSubmitFinal}
                        >         
                        <div className="owner__list border-bottom pb-3 mb-4">
                          <label className="fSize-4 fw-semibold text-black pb-2">Owner</label>
                          <div className="d-flex align-items-center gap-3">
                          <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
                              <span className="fSize-1 fw-semibold">1st</span>
                          </div>
                            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
                              <span className="fSize-1 fw-semibold">2st</span>
                          </div>
                            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
                              <span className="fSize-1 fw-semibold">3st</span>
                          </div>
                            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
                              <span className="fSize-1 fw-semibold">4st</span>
                          </div>
                            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
                              <span className="fSize-1 fw-semibold">5st</span>
                          </div>
                          </div>
                          </div> 
                          <div className="owner__list border-bottom pb-3 mb-3">
                            <label className="fSize-4 fw-semibold text-black pb-2">Owner</label>
                            <Row>
                              <Col lg={6}>
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Manual</button>
                              </div>
                              </Col>
                                <Col lg={6}>
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Automatic</button>
                              </div>
                              </Col>
                            </Row>
                            </div>     
                              <div className="owner__list border-bottom pb-3 mb-3">
                            <label className="fSize-4 fw-semibold text-black pb-2">Fuel Type</label>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-3">
                              <div className="col">
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Petrol</button>
                              </div>
                              </div>
                                <div className="col">
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Diesel</button>
                              </div>
                              </div>
                                <div className="col">
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">CNG</button>
                              </div>
                              </div>
                                <div className="col">
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Electric</button>
                              </div>
                              </div>
                                <div className="col">
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Hybrid</button>
                              </div>
                              </div>
                            </div>
                            </div>    
                                <div className="owner__list border-bottom pb-3 mb-3">
                            <label className="fSize-4 fw-semibold text-black pb-2">Kilometers Driven</label>
                            <Row>
                              <Col lg={6}>
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Enter Manual</button>
                              </div>
                              </Col>
                                {/* <Col lg={6}>
                              <div className="carType">
                                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">Automatic</button>
                              </div>
                              </Col> */}
                            </Row>
                            </div>    
                             <div className="owner__list border-bottom pb-3 mb-4">
                          <label className="fSize-4 fw-semibold text-black pb-2">Spare Key</label>
                          <div className="d-flex align-items-center gap-3">
                          <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              {/* <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" /> */}
                              <span className="fSize-1 fw-semibold">Yes</span>
                          </div>
                            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
                              {/* <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" /> */}
                              <span className="fSize-1 fw-semibold">No</span>
                          </div>
                          </div>
                          </div>    
                          <div className="d-flex align-items-center justify-content-end gap-4">
                            <div className="priveBtn">
                              <button
                                type="button"
                                className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
                                onClick={backTo4}
                              >
                                Preview
                              </button>
                            </div>

                            <div className="bookBtn nextBtn">
                              <button
                                type="submit"
                                className="bookHere text-white fSize-5 fw-semibold py-2 px-5 rounded-1"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RegistrationForm;
