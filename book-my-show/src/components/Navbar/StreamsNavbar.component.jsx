import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
  BiShareAlt,
  BiChevronsLeft,
} from "react-icons/bi";
import {MdOndemandVideo} from "react-icons/md";
import {BsChevronLeft} from "react-icons/bs";

const NavSm = () => {
  return (
    <>
      <div className="text-gray-800 flex items-center justify-between">
        <div>
            <BsChevronLeft className="w-6 h-6" />
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-800"><img src="https://in.bmscdn.com/discovery-catalog/icons/stream-logo-202101050337.png" alt="stream" className="w-15 h-6 md:w-36 md:h-12" /></div>
        </div>
        <div className="text-gray-800 flex items-center gap-4">
        <div className="w-8 h-8">
          <MdOndemandVideo className="w-full h-full" />
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            Bengaluru <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const StreamsNavbar = () => {
  return (
    <>
        <nav className="inset-x-0 z-30 bg-opacity-1 backdrop-filter backdrop-blur-lg bg-gradient-to-b from-stream1-50 to-stream2-50 md:hidden lg:hidden p-2">
        <div className="md:hidden lg:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        </nav>
        <nav className="hidden md:block inset-x-0 z-30 bg-opacity-1 backdrop-filter backdrop-blur-lg md:bg-gradient-to-b from-stream1-50 to-stream2-50 lg:hidden p-4">
        <div className="hidden md:block lg:hidden">
          {/* Medium/Tab screen */}
          <NavSm />
        </div>
        </nav>
        <nav className="hidden lg:flex lg:bg-navmobcolor-700 p-4">
        <div className="w-full">
          {/* Large screen */}
          <NavLg />
        </div>
        </nav>
    </>
  );
};

export default StreamsNavbar;