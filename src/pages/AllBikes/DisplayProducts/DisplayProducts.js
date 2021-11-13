import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://warm-lake-37627.herokuapp.com/products")
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
