import React, { useEffect } from "react";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";
import { useLoaderData } from "react-router";
import FeatureLists from "../components/FeatureCards";
import Benifits from "../components/Benifits";
import NewsLetter from "../components/NewsLetter";
import BlogSection from "../components/BlogSection";

const Home = () => {
  const lists = useLoaderData();
  console.log(lists);

  useEffect(() => {
      document.title = "Home";
    }, []);

  return (
    <>
      <Slider></Slider>
      <FeatureLists lists={lists}></FeatureLists>
      <Benifits></Benifits>
      <BlogSection/>
      <FAQ></FAQ>
      <NewsLetter/>
    </>
  );
};

export default Home;


