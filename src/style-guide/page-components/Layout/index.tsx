import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// import Loader from "@/style-guide/components/Loader";
// import styles from "./style.module.scss";

// NOTE: Integrate the Navbar, Hanburger Menu here
const Layout = ({ children }: any) => {
  return <>

  <Navbar/>
  {children}
  <Footer/>
  </>;
};

export default Layout;
