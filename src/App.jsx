import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// PAGES
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import CSS Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// AXIOS default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      {/* <div className="App p-10">
        <button className="text-red-500 border-2 px-2 py-1 bg-sky-700 border-blue-500 rounded-md hover:bg-transparent hover:text-sky-500 hover:bg-red-400 hover:border-indigo-600 hover:text-blue-600 hover:border" >
          Hello TAILWIND
        </button>
      </div> */}
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
