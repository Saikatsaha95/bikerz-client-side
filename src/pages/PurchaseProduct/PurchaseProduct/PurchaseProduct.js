import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ProductDetails from "../ProductDetails/ProductDetails";

const PurchaseProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Container>
        <ProductDetails key={id} id={id}></ProductDetails>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default PurchaseProduct;
