import { faArrowRight, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MediaUploads({backTo6,goStep8}) {
  return (
    <>
      <form
        className="registraionMainFillForm"
        onSubmit={goStep8}
      >
        <div className="mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Upload Photos
          </label>
          <div className="p-4 border rounded-2 text-center">
            <FontAwesomeIcon icon={faUpload} />
            <p className="mt-2 mb-1">Drag & drop or click to select</p>
            <small className="text-muted">
              Front, back, sides, dashboard, odometer, docs (Max 10)
            </small>
            <input type="file" multiple className="form-control mt-3" />
          </div>
        </div>

         <div className="d-flex align-items-center justify-content-end gap-4">
               <div className="priveBtn">
                 <button
                   type="button"
                   className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
                   onClick={backTo6}
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

export default MediaUploads;
