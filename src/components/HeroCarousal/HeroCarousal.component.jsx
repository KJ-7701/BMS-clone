import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Component
import { NextArrow, PrevArrow } from "./Arrows.component";

//Import CSS Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // async
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  const settingsLG = {
    arrows: true,
    centerMode: true,
    autoplay: true,
    centerPadding: "250px",
    slideToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-80 md:h-72 py-4">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Testing"
                className="w-full h-full rounded"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Testing"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
