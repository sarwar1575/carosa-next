// File: src/component/registrationCar/registrationForm/RegistrationForm.jsx
"use client";

import { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Steps
import EnterRegistration from "./stepForm/EnterRegistration";
import BrandForm from "./stepForm/BrandForm";
import ModalForm from "./stepForm/ModalForm";
import VeriantForm from "./stepForm/VeriantForm";
import OwnershipForm from "./stepForm/OwnershipForm";
import WarrantyForm from "./stepForm/WarrantyForm";
import MediaUploads from "./stepForm/MediaUploads";
import AdditionalFeatures from "./stepForm/AdditionalFeatures";
import PricingForm from "./stepForm/PricingForm";

// Data
import brands from "../../../data/Brands.json";
import model from "../../../data/Model.json";
import variant from "../../../data/Variant.json";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);

  // Step 1 state
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");
  const regPattern = /^[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,2}\s?\d{1,4}[A-Z]{0,2}$/i;

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

  const years = useMemo(() => {
    const arr = [];
    const now = new Date().getFullYear();
    for (let y = now; y >= 1990; y--) arr.push(String(y));
    return arr;
  }, []);

  const filteredBrands = useMemo(() => {
    const q = searchBrand.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter(
      (b) =>
        (b.brandName || "").toLowerCase().includes(q) ||
        (b.name || "").toLowerCase().includes(q)
    );
  }, [searchBrand]);

  const filteredModels = useMemo(() => {
    const q = searchModel.trim().toLowerCase();
    if (!q) return model;
    return model.filter(
      (m) =>
        (m.brandName || m.modelName || "").toLowerCase().includes(q) ||
        (m.name || "").toLowerCase().includes(q)
    );
  }, [searchModel]);

  // Nav helpers
  const goStep2 = () => {
    if (!regNo.trim()) return setError("Please enter a registration number.");
    if (!regPattern.test(regNo.trim()))
      return setError("Please enter a valid registration number (e.g., DL 01 AB 1234).");
    setError("");
    setStep(2);
  };
  const goStep3 = (e) => { e?.preventDefault?.(); setStep(3); };
  const goStep4 = (e) => { e?.preventDefault?.(); setStep(4); };
  const goStep5 = (e) => { e?.preventDefault?.(); setStep(5); };
  const goStep6 = (e) => { e?.preventDefault?.(); setStep(6); }; // ✅ fix
  const goStep7 = (e) => { e?.preventDefault?.(); setStep(7); };
  const goStep8 = (e) => { e?.preventDefault?.(); setStep(8); };

  const backTo1 = () => setStep(1);
  const backTo2 = () => setStep(2);
  const backTo4 = () => setStep(4);

  // Final submit (Step 9)
  const handleSubmitFinal = (e) => {
    e?.preventDefault?.();
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

  function renderStep() {
    switch (step) {
      case 1:
        // return (
        //   <EnterRegistration
        //     regNo={regNo}
        //     setRegNo={setRegNo}
        //     error={error}
        //     setError={setError}
        //     goStep2={goStep2}
        //   />
        // );
      case 2:
        return (
          <BrandForm
            years={years}
            details={details}
            setDetails={setDetails}
            filteredBrands={filteredBrands}
            searchBrand={searchBrand}
            setSearchBrand={setSearchBrand}
            backTo1={backTo1}
            goStep3={goStep3}
          />
        );
      case 3:
        return (
          <ModalForm
            details={details}
            setDetails={setDetails}
            filteredModels={filteredModels}
            searchModel={searchModel}
            setSearchModel={setSearchModel}
            backTo2={backTo2}
            goStep4={goStep4}
          />
        );
      case 4:
        return (
          <VeriantForm
            variant={variant}
            backTo2={backTo2}
            goStep5={goStep5}
          />
        );
      case 5:
        return (
          <OwnershipForm
            backTo4={backTo4}
            goStep6={goStep6}   // ✅ move to step 6
          />
        );
      case 6:
        // In your WarrantyForm, call setStep(7) on Next
        return <WarrantyForm backTo5={goStep5} goStep7={goStep7} />;
      case 7:
        // In your MediaUploads, call setStep(8) on Next
        return <MediaUploads backTo6={goStep6} goStep8={goStep8} />;
      case 8:
        // In your AdditionalFeatures, call setStep(9) on Next
        return <AdditionalFeatures backTo7={goStep7} goStep9={() => setStep(9)}  />;
      case 9:
        // ✅ Submit happens here
        return <PricingForm handleSubmitFinal={handleSubmitFinal} backTo8={goStep8} setStep={setStep} />;
      default:
        return null;
    }
  }

  return (
    <section className="registrationFormMain" style={{ paddingTop: 130, paddingBottom: 130 }}>
      <Container fluid>
        <Row>
          <Col xs={12} className="mb-4">
            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={6}>
                <div className="carBasicDetails position-relative">
                  <h6 className="bg-white py-3 text-center fw-semibold fSize-6">
                    Vehicle Basic Details
                  </h6>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={12}>
            <Row className="justify-content-center">
              <Col xs={12} md={10} lg={7} xl={5}>
                <div className="registrationFormBody bg-white p-3 border">
                  {renderStep()}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
