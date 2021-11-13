import { Button, Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://warm-lake-37627.herokuapp.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <Container sx={{ mt: 5 }}>
      <h2>Choose Your Favourite Cycle</h2>

      <Grid sx={{ mt: 3 }} container spacing={2}>
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Grid>
      <NavLink to="/allbikes">
        <Button sx={{ bgcolor: "salmon", mt: 5, px: 5 }} variant="contained">
          Explore more
        </Button>
      </NavLink>
    </Container>
  );
};

export default ProductSection;
