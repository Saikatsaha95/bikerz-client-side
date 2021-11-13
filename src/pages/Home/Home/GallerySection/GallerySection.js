import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../../../images/gallery-img/img-1.jpg";
import img2 from "../../../../images/gallery-img/img-2.jpg";
import img3 from "../../../../images/gallery-img/img-3.jpg";
import img4 from "../../../../images/gallery-img/img-4.jpg";
import img5 from "../../../../images/gallery-img/img-5.jpg";
import img6 from "../../../../images/gallery-img/img-6.jpg";
import { Container, Grid } from "@mui/material";

const itemData = [img1, img2, img3, img4, img5, img6];

const GallerySection = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <h2>Our Gallery</h2>
      <Grid container>
        {itemData.map((img) => (
          <Grid item xs={12} md={4}>
            <img style={{ height: "700px" }} src={img} alt="" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GallerySection;
