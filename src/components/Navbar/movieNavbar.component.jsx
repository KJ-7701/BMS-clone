import React, { useContext } from "react";
import { BiChevronDown, BiSearch, BiMenu, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

// CONTEXT
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex gap-4 items-center w-1/2">
        <Link to="">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-lg">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for Movies, Events, Place, Sports and Activities"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
          Mumbai
          <BiChevronDown />
        </span>
        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
          Sign In
        </button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-40 backdrop-filter backdrop-blur-md lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
          {/* Medium/Tab screen */}
          <NavSm />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
