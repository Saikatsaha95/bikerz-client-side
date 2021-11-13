import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import Rating from "react-rating";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((res) => setReviews(res.data));
  }, []);
  return (
    <Container sx={{ marginTop: 10 }}>
      <h2>See our customers reviews</h2>
      <div>
        <Box>
          <Slider {...settings}>
            {reviews.map((review) => (
              <Box style={{ padding: 50 }} key={review._id}>
                <Paper
                  sx={{ p: 3, m: 5, height: 150, width: 300 }}
                  elevation={8}
                >
                  <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="h5">
                    &ldquo; {review.shortDescription}...&rdquo;
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }} variant="subtitle">
                      <Rating
                        style={{ color: "gold", marginBottom: 15 }}
                        initialRating={parseFloat(review.rating)}
                        emptySymbol="far fa-star "
                        fullSymbol="fas fa-star "
                        readonly
                      />{" "}
                      ({review.rating})
                    </Typography>

                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="subtitile2"
                    >
                      {" "}
                      --- {review.name} <i class="fas fa-user"></i>
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
      </div>
    </Container>
  );
};

export default ReviewSection;
