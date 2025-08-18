"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Banner() {
  return (
    <>
    <section className="detailsBanner">
        <div className="detailsBannerImg position-relative">
            <img src="/images/detailBannerImg.png" alt="" className="w-100 object-fit-cover" height={200}/>
            <Link href="/" className="setPositioning fSize-4 fw-semibold text-white">Home <FontAwesomeIcon icon={faChevronRight} size={8}/> <span className="useModal">Used 2024 Tata Altroz Cars</span></Link>
        </div>
    </section>
    </>
  )
}

export default Banner;