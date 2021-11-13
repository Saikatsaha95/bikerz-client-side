import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://warm-lake-37627.herokuapp.com/addproduct", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Service added");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h2>Add a new product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Product name" />
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Product price"
        />
        <input
          {...register("shortDescription", { required: true })}
          placeholder="Add short description"
        />
        <input
          {...register("detailDescription", { required: true })}
          placeholder="Add detail description"
        />
        <input
          {...register("cardImg", { required: true })}
          placeholder="Card image url"
        />
        <input
          {...register("bannerImg", { required: true })}
          placeholder="Banner image Url"
        />
        <Button
          sx={{ width: "40%", padding: 1.5 }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
