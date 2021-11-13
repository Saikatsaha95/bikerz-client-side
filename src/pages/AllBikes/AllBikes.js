import { Container } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DisplayProducts from "./DisplayProducts/DisplayProducts";

const AllBikes = () => {
  return (
    <div>
      <Header />
      <DisplayProducts></DisplayProducts>
      <Footer></Footer>
    </div>
  );
};

export default AllBikes;
