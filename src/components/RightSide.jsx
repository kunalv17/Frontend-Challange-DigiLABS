import React from "react";
import Banner from "../assets/Banner.svg";
import CarrotLeft from "../assets/Icon/Carrot_left.svg";
import CarrotRight from "../assets/Icon/Carrot_right.svg";

const RightSide = ({ success }) => {
  return (
    <>
      {!success && (
        <div className="relative hidden md:block group w-[480px] h-[664px] cursor-pointer">
          <div className="absolute h-[664px] w-[240px] group/left z-40">
            <div className="absolute flex items-center invisible group-hover/left:visible group-hover/right:duration-75 justify-center h-12 w-12 border-white border-8 rounded-full active:bg-black active:duration-75 bg-[#0858F7] z-[40] top-[calc(50%-24px)] left-[calc(-24px)] group-hover:translate-x-[35px] group-hover:duration-500">
              <img src={CarrotLeft} alt="" />
            </div>
          </div>
          <div className="absolute h-[664px] w-[240px] left-[240px] group/right z-40">
            <div className="absolute flex items-center invisible group-hover/right:visible group-hover/right:duration-75 justify-center h-12 w-12 border-white border-8 rounded-full  active:bg-black active:duration-75 bg-[#0858F7] z-[40] top-[calc(50%-24px)] right-[calc(-24px)] group-hover:translate-x-[35px] group-hover:duration-500">
              <img src={CarrotRight} alt="" />
            </div>
          </div>
          <img
            src={Banner}
            alt="Banner1"
            className="z-30 absolute group-hover:translate-x-[35px] duration-500"
          />
          <div className="absolute rounded-[22px] group-hover:left-[70px] duration-500 group-hover:rotate-0 group-hover:top-[35px] top-[calc(50%-600.32px/2-0.61px)] left-[calc(50%-433.96px/2+40.61px)] rotate-[5deg] w-[433.96px] h-[600.32px] -z-[10] bg-[#0646C6]" />
          <div className="absolute h-[644px] left-[480px] w-[24px] group/banner2">
            <div className="absolute rotate-[5deg] flex items-center group-hover/banner2:visible justify-center h-12 w-12 border-white border-8 rounded-full active:bg-black active:duration-75 bg-[#0858F7] -z-[10] top-[calc(50%)] right-[-18px] group-hover:-translate-x-[10px] duration-500 ">
              <img src={CarrotRight} alt="" />
            </div>
          </div>
          <div className="absolute rounded-[22px] group-hover:left-[70px] duration-500 group-hover:rotate-0 top-[calc(50%-534px/2)] left-[calc(50%-387.7px/2+80.13px)] rotate-[10deg] w-[387.7px] h-[536.32px] -z-[20] bg-[#053594]" />
          <div className="absolute h-[644px] w-[24px] left-[504px] group/banner3 ">
            <div className="absolute rotate-[10deg] flex items-center group-hover/banner3: justify-center h-12 w-12 border-white border-8 rounded-full active:bg-black active:duration-75 bg-[#0858F7] -z-[20] top-[calc(50%+24px)] right-[-12px] group-hover:-translate-x-[20px]  duration-500 ">
              <img src={CarrotRight} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSide;
