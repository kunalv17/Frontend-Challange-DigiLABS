import React from "react";
import RightArrow from "../assets/Icon/ArrowRight.svg";

const Button = ({ handleClick }) => {
  return (
    <div
      className="cursor-pointer group flex bg-[#0858F7] hover:bg-[#074edb] mt-8 mx-6 justify-center rounded-xl h-[56px] items-center p-[4px]"
      onClick={handleClick}
    >
      <button className="relative flex items-center font-[700] text-base text-white">
        <p className=" group-hover:-translate-x-3 duration-200">Next</p>
        <img
          className="h-4 w-4 absolute -right-[18px] hidden group-hover:block"
          src={RightArrow}
        />
      </button>
    </div>
  );
};

export default Button;
