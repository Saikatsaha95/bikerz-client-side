import { Button } from "@mui/material";
import { height } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PlaceOrderModal from "../PlaceOrderModal/PlaceOrderModal";

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [openPlaceOrder, setOpenPlaceOrder] = React.useState(false);
  const handleOpenPlaceOrder = () => setOpenPlaceOrder(true);
  const handleClosePlaceOrder = () => setOpenPlaceOrder(false);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <img style={{ width: 800, height: 500 }} src={product.bannerImg} alt="" />

      <div>
        <h2>{product.name}</h2>
        <p style={{ textAlign: "justify " }}>{product.detailDescription}</p>
        <div
          style={{
            border: "1px solid black",
            width: "20%",
            textAlign: "center",
            margin: "10px auto",
            backgroundColor: "gold",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>Price: {product.price}</h3>
        </div>
        <Button onClick={handleOpenPlaceOrder} variant="contained">
          Place Order
        </Button>
      </div>

      <PlaceOrderModal
        product={product}
        openPlaceOrder={openPlaceOrder}
        handleClosePlaceOrder={handleClosePlaceOrder}
      ></PlaceOrderModal>
    </div>
  );
};

export default ProductDetails;
