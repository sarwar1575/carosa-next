import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PricingForm({backTo8}) {
  return (
    <form className="registraionMainFillForm">
     <h4>comingsoon! heer</h4>
       <div className="d-flex align-items-center justify-content-end gap-4">
                <div className="priveBtn">
                  <button
                    type="button"
                    className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
                    onClick={backTo8}
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
  );
}

export default PricingForm;
