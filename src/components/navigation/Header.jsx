"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Offcanvas,
  Accordion,
  Button,
} from "react-bootstrap";
import { FaBars, FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import CallUsForm from "../common/CallUsForm";

export default function Header() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const countryRef = useRef(null); // <-- no TS generics
  const [showCall, setShowCall] = useState(false);

  // close country dropdown on outside click / Esc
  useEffect(() => {
    const onDoc = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setCountryOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="site-header bg-white">
      <section className="navbar px-3 px-lg-3 py-0">
        <Container fluid>
          <Row className="w-100 align-items-center">
            {/* LEFT: burger (mobile) + logo + desktop nav */}
            <Col
              xxl={6}
              xs={4}
              className="d-flex align-items-center gap-3 gap-lg-5"
            >
              {/* mobile menu button */}
              <button
                className="btn btn-link p-0 d-inline-flex d-xxl-none align-items-center me-1"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <FaBars size={22} className="text-dark" />
              </button>

              {/* logo */}
              <div className="mainLogo d-flex align-items-baseline">
                <Link href="/" className="d-inline-flex align-items-center">
                  <Image
                    src="/images/finalCarosalogo.png"
                    alt="CAROSA"
                    width={160}
                    height={40}
                    className="rounded object-fit-contain"
                    priority
                  />
                </Link>
              </div>

              {/* desktop nav */}
              <nav className="navLinkLists d-none d-xxl-block">
                <ul className="nav-list p-0 m-0 d-flex align-items-center gap-4">
                  <li className="nav-items has-mega">
                    <Link
                      href=""
                      className="nav-links fSize-3 fw-medium position-relative d-inline-flex align-items-center"
                    >
                      Buy used car
                      <FaChevronDown className="ms-2 text-dark" size={14} />
                    </Link>

                    {/* mega menu */}
                    <div
                      className="mega-menu"
                      role="menu"
                      aria-label="Buy used car"
                    >
                      <div className="container py-3">
                        <div className="row gx-4">
                          <div className="col-12 col-md-6">
                            <h6 className="mega-heading">By Brand</h6>
                            <ul className="list-unstyled m-0">
                              <li className="py-1">
                                <Link href="#">Toyota</Link>
                              </li>
                              <li className="py-1">
                                <Link href="#">Honda</Link>
                              </li>
                              <li className="py-1">
                                <Link href="#">BMW</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-6">
                            <h6 className="mega-heading">By Price</h6>
                            <ul className="list-unstyled m-0">
                              <li className="py-1">
                                <Link href="#">Under ₹5L</Link>
                              </li>
                              <li className="py-1">
                                <Link href="#">₹5L – ₹10L</Link>
                              </li>
                              <li className="py-1">
                                <Link href="#">₹10L+</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-items">
                    <Link
                      href="/sell"
                      className="nav-links fSize-3 fw-medium position-relative d-inline-flex align-items-center"
                    >
                      Sell car
                      <FaChevronDown className="ms-2 text-dark" size={14} />
                    </Link>
                  </li>

                  <li className="nav-items">
                    <Link
                      href="/new-cars"
                      className="nav-links fSize-3 fw-medium position-relative d-inline-flex align-items-center"
                    >
                      New cars
                      <FaChevronDown className="ms-2 text-dark" size={14} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>

            {/* RIGHT: search + country + call + user */}
            <Col xxl={6} xs={8}>
              <div className="rightWave d-flex align-items-center justify-content-end gap-3 gap-lg-4">
                {/* search (desktop/tablet) */}
                <div className="navSearchInput d-none d-md-block">
                  <InputGroup className="position-relative">
                    <span className="searchIconWrap">
                      <Image
                        src="/images/Search.png"
                        alt="search"
                        width={16}
                        height={16}
                      />
                    </span>
                    <Form.Control
                      placeholder="Search for your wish"
                      aria-label="Search"
                      className="searhInputNav ps-5"
                    />
                  </InputGroup>
                </div>

                {/* country dropdown (desktop/tablet) */}
                <div
                  className="dropdownCountry position-relative d-none d-md-inline-block"
                  ref={countryRef}
                >
                  <button
                    className="dropdown-btn border-0 bg-transparent fSize-2 fw-medium rounded-2 d-inline-flex align-items-center"
                    onClick={() => setCountryOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={countryOpen}
                  >
                    <FaMapMarkerAlt size={15} className="text-dark me-2" />
                    India
                    <FaChevronDown className="ms-2 text-dark" size={15} />
                  </button>
                  {countryOpen && (
                    <div className="dropdown-menu show">
                      <ul className="countryLists p-0 m-0">
                        <li>
                          <button className="dropdown-item">India</button>
                        </li>
                        <li>
                          <button className="dropdown-item">USA</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Canada</button>
                        </li>
                        <li>
                          <button className="dropdown-item">UK</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Australia</button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* call button (desktop/tablet) */}
                <button
                  onClick={() => setShowCall(!showCall)}
                  className="callBtn d-none d-md-inline-flex align-items-center gap-2 text-white border-0 outline-none rounded-3 fSize-3"
                >
                  <Image
                    src="/images/callicon.png"
                    alt="call"
                    width={12}
                    height={12}
                  />
                  Call us
                </button>
               
                  <div className={`popup-box ${showCall ? "show" : ""}`}>
                    <div className="position-relative pb-4">
                    <FontAwesomeIcon icon={faXmark} className="close-icon" onClick={() => setShowCall(false)}/>
                    <p className="fSize-3 fw-normal text-dark fst-italic">Connect With Us:</p>
                    <p className="fSize-3 fw-semibold text-dark m-0">Want the best car advice?</p>
                     <p className="fSize-3 fw-semibold text-dark m-0">Connect with us at <span>+91-9090909090</span></p>
                    </div>
                    <div className="OrLine border-bottom position-relative mb-4">
                      <div className="Or rounded-circle text-white d-flex justify-content-center align-items-center fSize-3 fw-medium">Or</div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="fSize-4 fw-semibold text-dark">Request a Call Back</p>
                    </div>
                    <CallUsForm />
                  </div>
              
                {/* user pill (sm+) */}
                <div className="userNameHere d-none d-sm-flex align-items-center gap-2">
                  <div className="userProfile rounded-circle d-flex align-items-center justify-content-center">
                    <Image
                      src="/images/userPRofile.png"
                      alt="user"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="userName d-flex align-items-center gap-1">
                    <p className="m-0 fw-medium fSize-3">username</p>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="dropUserIcon"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* MOBILE DRAWER */}
        <Offcanvas
          placement="start"
          show={menuOpen}
          onHide={() => setMenuOpen(false)}
          className="mobile-drawer"
        >
          <Offcanvas.Header closeButton>
            <Link href="/" className="d-inline-flex align-items-center">
              <Image
                src="/images/webLogo.jpg"
                alt="CAROSA"
                width={140}
                height={36}
                className="rounded object-fit-contain"
              />
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* mobile search */}
            <div className="mb-3">
              <InputGroup className="position-relative">
                <span className="searchIconWrap">
                  <Image
                    src="/images/Search.png"
                    alt="search"
                    width={16}
                    height={16}
                  />
                </span>
                <Form.Control
                  placeholder="Search for your wish"
                  aria-label="Search"
                  className="searhInputNav ps-5"
                />
              </InputGroup>
            </div>

            {/* mobile country */}
            <div className="mb-3">
              <Button
                variant="light"
                className="w-100 d-flex align-items-center justify-content-between"
                onClick={() => setCountryOpen((v) => !v)}
              >
                <span className="d-inline-flex align-items-center">
                  <FaMapMarkerAlt size={15} className="text-dark me-2" />
                  India
                </span>
                <FaChevronDown size={14} />
              </Button>
              {countryOpen && (
                <div className="border rounded mt-2">
                  <button className="dropdown-item py-2">India</button>
                  <button className="dropdown-item py-2">USA</button>
                  <button className="dropdown-item py-2">Canada</button>
                  <button className="dropdown-item py-2">UK</button>
                  <button className="dropdown-item py-2">Australia</button>
                </div>
              )}
            </div>

            {/* mobile nav as accordion */}
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0" className="rounded-0">
                <Accordion.Header>Buy used car</Accordion.Header>
                <Accordion.Body>
                  <div className="mb-3">
                    <h6 className="mb-2">By Brand</h6>
                    <div className="d-grid gap-2">
                      <Link href="#" onClick={() => setMenuOpen(false)}>
                        Toyota
                      </Link>
                      <Link href="#" onClick={() => setMenuOpen(false)}>
                        Honda
                      </Link>
                      <Link href="#" onClick={() => setMenuOpen(false)}>
                        BMW
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2">By Price</h6>
                    <div className="d-grid gap-2">
                      <Link href="#" onClick={() => setMenuOpen(false)}>
                        Under ₹5L
                      </Link>
                      <Link href="#" onClick={() => setMenuOpen(false)}>
                        ₹5L – ₹10L
                      </Link>
                      <Link href="#" onClick={() => setMenuOpen(false)}>
                        ₹10L+
                      </Link>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="rounded-0">
                <Accordion.Header>Sell car</Accordion.Header>
                <Accordion.Body>
                  <Link href="/sell" onClick={() => setMenuOpen(false)}>
                    Go to Sell
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="rounded-0">
                <Accordion.Header>New cars</Accordion.Header>
                <Accordion.Body>
                  <Link href="/new-cars" onClick={() => setMenuOpen(false)}>
                    Go to New Cars
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="mt-4 d-grid">
              <Button variant="success">Call us</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </header>
  );
}
