import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    data.name = user.displayName;
    data.email = user.email;
    axios
      .post("https://warm-lake-37627.herokuapp.com/reviews", data)
      .then((res) => console.log(res.data))
      .finally(() => reset());
  };
  return (
    <div className="add-service">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("productName", { required: true })}
          placeholder="Product name"
        />
        <input
          style={{ padding: 30 }}
          {...register("shortDescription", { required: true })}
          placeholder="Add a short description"
        />
        <input
          {...register("rating", { min: 1, max: 5 })}
          placeholder="Add rating"
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

export default AddReview;
