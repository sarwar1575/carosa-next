import React from "react";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
