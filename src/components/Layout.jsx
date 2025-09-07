
import React from "react";
import TopNavbar from "./Navbar/TopNavbar";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
