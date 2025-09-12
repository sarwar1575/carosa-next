import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


function VeriantForm({variant,backTo2,goStep5}) {
  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep5}>
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
                    <img src={items.image} className="w-100" />
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
  );
}

export default VeriantForm;
