import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WarrantyForm({goStep7,backTo5}) {
  return (
    <>
      <form
        className="registraionMainFillForm"
       onSubmit={goStep7}
      >
        <div className="mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            City / Location
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Delhi"
          />
        </div>
        <div className="mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Asking Price (₹)
          </label>
          <input
            type="number"
            min={0}
            className="form-control"
            placeholder="e.g., 525000"
          />
        </div>
        <div className="mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            rows={3}
            className="form-control"
            placeholder="Add any highlights, accessories, recent work, etc."
          />
        </div>
    <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="priveBtn">
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
              onClick={backTo5}
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

export default WarrantyForm;
