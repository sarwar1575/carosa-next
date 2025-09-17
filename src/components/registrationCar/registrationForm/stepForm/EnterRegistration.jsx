import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function EnterRegistration({ setRegNo, error, setError, goStep2 }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="fSize-4 fw-semibold text-dark">Enter Registration No.</p>
      </div>

      <form
        className="registraionMainFillForm"
        onSubmit={(e) => {
          e.preventDefault();
          goStep2();
        }}
      >
        <div className="plate-wrap mb-2 position-relative d-flex align-items-center bg-white rounded-2">
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
            <span className="ind fSize-1 fw-bold text-black">IND</span>
          </div>

          <input
            type="text"
            className="plate-input flex-1 border-none outline-none bg-transparent"
            placeholder="DL 01 AB 1234"
            aria-label="Vehicle Registration Number"
            // value={regNo}
            onChange={(e) => setRegNo(e.target.value.toUpperCase())}
          />
        </div>

        {error && (
          <div className="pb-2">
            <small className="text-danger fSize-2">{error}</small>
          </div>
        )}

        <div className="hint d-flex align-items-center gap-2 fSize-2 mt-4 pb-4">
          <i className="d-inline-flex align-items-center justify-content-center border fSize-1 rounded-circle">
            ℹ
          </i>
          <span>(auto-fill if RTO integration available)</span>
        </div>

        <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="priveBtn">
            {" "}
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
            >
              Preview
            </button>
          </div>
          <div className="bookBtn nextBtn">
            {" "}
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

export default EnterRegistration;
