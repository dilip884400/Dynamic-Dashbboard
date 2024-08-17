import React, { useEffect } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWidgets } from "@/redux/slices/widget";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(searchWidgets(searchInput));
  // }, [searchInput]);

  const handleChnage = (e: any) => {
    setSearchInput(e.target.value);
    dispatch(searchWidgets(searchInput));
  };

  return (
    <div className="w-full h-10 bg-white mb-8 flex items-center justify-between">
      <div className="flex items-center text-xs font-extrabold ml-8">
        <span className="flex items-center text-gray-400 font-medium">
          Home <IoChevronForwardSharp />
        </span>
        <span className="text-[#1c4369]">Dashboard V2</span>
      </div>
      <div className="flex items-center m-2 border border-blue-400 rounded gap-4 mr-20 w-1/4 px-2 bg-[#f0f4fa]">
        <CiSearch />

        <input
          className="outline-none text-gray-600 bg-[#f0f4fa]"
          placeholder="search anything"
          value={searchInput}
          onChange={handleChnage}
        />
      </div>
    </div>
  );
};

export default Navbar;
