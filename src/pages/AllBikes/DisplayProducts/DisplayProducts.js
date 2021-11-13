import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <Container>
      <h1>All Products</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default DisplayProducts;
