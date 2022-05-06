import React, { useContext, useState } from "react";

// COMPONENTS
import PaymentModal from "../PaymentModal/Payment.component";

// CONTEXT
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  // Optional Chaining
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(349);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3  lg:gap-6">
        <div className="flex items-center gap-3 md:px-3">
          <div className="w-40 h-10 ">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-700 p-2 text-white rounded-md">
            Streaming Now
          </span>
        </div>
        <h1 className="font-bold hidden lg:block lg:text-4xl text-white">
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse lg:gap-5 lg:flex-col gap-2">
          <div className="text-white text-md font-light flex-col md:px-3">
            <h4>4K &bull; {movie.original_language}</h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 13+
            </h4>
          </div>
          <div className="flex items-center md:w-screen md:px-3 lg:w-96 gap-3">
            <button
              onClick={rentMovies}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-xl"
            >
              Rent ₹149
            </button>
            <button
              onClick={buyMovies}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-xl"
            >
              Buy ₹349
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
