import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="footerMain padding-Y-X">
        <Container fluid>
          <Row>
            <Col xs={12} className="pb-4">
              <div className="footerLog d-flex align-items-center gap-5">
                <Link href="">
                  <img src="/images/webLogo.jpg" alt="" width={157} />
                </Link>
                <h3 className="mb-0 text-white position-relative fSize-5 fw-medium">
                  Confidance on Wheel
                </h3>
              </div>
            </Col>
            <Col xl={3} md={6}>
            <div className="footerLinks">
              <h2 className="mb-0 pb-2 text-white fSize-7 fw-semibold text-uppercase">Company</h2>
              <ul className="p-0 m-0 footerLinksParents">
                <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">about us</Link>
                </li>
                {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Careers</Link>
                </li> */}
                {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Press kit</Link>
                </li> */}
                  <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Blog</Link>
                </li>
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Article</Link>
                </li> */}
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">News</Link>
                </li> */}
                  <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Privacy Policy</Link>
                </li>
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Sustainability</Link>
                </li> */}
                  <li className="list-items pb-4">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Testimonials</Link>
                </li>
              </ul>
              </div>
            </Col>
              <Col xl={3} md={6}>
            <div className="footerLinks">
              <h2 className="mb-0 pb-2 text-white fSize-7 fw-semibold text-uppercase">Discover</h2>
              <ul className="p-0 m-0 footerLinksParents">
                <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Buy used car</Link>
                </li>
                <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Sell used car</Link>
                </li>
                {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Used car valuation</Link>
                </li> */}
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Motor insurance</Link>
                </li> */}
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Check & pay challan</Link>
                </li> */}
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Check vehicle details</Link>
                </li> */}
                  <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Explore new cars</Link>
                </li>
                  {/* <li className="list-items pb-4">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Scrap your car</Link>
                </li> */}
              </ul>
              </div>
            </Col>
              <Col xl={3} md={6}>
            <div className="footerLinks">
              <h2 className="mb-0 pb-2 text-white fSize-7 fw-semibold text-uppercase">Help & support</h2>
              <ul className="p-0 m-0 footerLinksParents">
                <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">FAQs</Link>
                </li>
                <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Security</Link>
                </li>
                <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Contact us</Link>
                </li>
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Become a partner</Link>
                </li> */}
                  {/* <li className="list-items pb-2">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">RC transfer status</Link>
                </li> */}
                  <li className="list-items pb-4">
                  <Link href="" className="link-item text-uppercase fw-normal fSize-3">Terms & conditions</Link>
                </li>
              </ul>
              </div>
            </Col>
            <Col xl={2} md={6} className="">
            <div className="footerLinks">
              <h2 className="mb-0 pb-2 text-white fSize-7 fw-semibold text-uppercase">Social Links</h2>
                    <ul className="socialMediaPlatformList p-0 m-0 d-flex gap-3 pb-3">
                        <li className="social-item"><Link href="" className="social-link d-inline-block d-flex justify-content-center align-items-center rounded-circle"><FaFacebook size={25} className="text-white"/></Link></li>
                        <li className="social-item"><Link href="" className="social-link d-inline-block d-flex justify-content-center align-items-center rounded-circle"><FaTwitter size={25} className="text-white"/></Link></li>
                        <li className="social-item"><Link href="" className="social-link d-inline-block d-flex justify-content-center align-items-center rounded-circle"><FaInstagram size={25} className="text-white"/></Link></li>
                        <li className="social-item"><Link href="" className="social-link d-inline-block d-flex justify-content-center align-items-center rounded-circle"><FaYoutube size={25} className="text-white"/></Link></li>
                        <li className="social-item"><Link href="" className="social-link d-inline-block d-flex justify-content-center align-items-center rounded-circle"><FaLinkedin size={25} className="text-white"/></Link></li>
                    </ul>
                    <div className="downloadBtns">
                      <div className="d-flex gap-1 pb-2">
                      <div className="appStore">
                        <Link href=''><img src="/images/appStore.png" alt="" width={160}/></Link>
                      </div>
                        <div className="playStore">
                        <Link href=''><img src="/images/googlePlay.png" alt="" width={160}/></Link>
                      </div>
                      </div>
                      <h4 className="fSize-5 fw-medium text-white text-uppercase">We are global</h4>
                    </div>
              </div>
            </Col>
            <Col xs={12} className="pt-4 border-top">
            <div className="allRightsReserved d-flex justify-content-center align-items-center">
              <Link href='' className="text-white fSize-3 fw-normal">© 2025 Carosa, All rights reserved. developed by Technogigz Solutions</Link>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
