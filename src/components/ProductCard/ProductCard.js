import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, height: 500, position: "relative" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={product.cardImg}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            sx={{ textAlign: "justify" }}
            variant="body2"
            color="text.secondary"
          >
            {product.shortDescription}
          </Typography>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            bottom: "70px",
            left: "110px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "warning.main" }}
            variant="h6"
          >
            Price: {product.price}
          </Typography>
        </Box>
        <CardActions sx={{ position: "absolute", bottom: "10px" }}>
          <NavLink to={`/purchase/${product._id}`}>
            <Button sx={{ px: 3 }} variant="contained" size="small">
              Buy Now
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
