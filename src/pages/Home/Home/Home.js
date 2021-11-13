import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ProductSection from "../ProductSection/ProductSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import BannerSection from "./BannerSection/BannerSection";
import GallerySection from "./GallerySection/GallerySection";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <ProductSection />
      <ReviewSection></ReviewSection>
      <GallerySection></GallerySection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
