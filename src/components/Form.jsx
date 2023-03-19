import React from "react";
import EyeBlocked from "../assets/Icon/Eye blocked.svg";

const Form = () => {
  return (
    <div>
      <div className="active:border-[#0858F7]/20 cursor-pointer border-4 border-transparent mx-[calc(1.5rem-4px)] mt-8 rounded-2xl">
        <div className="flex cursor-pointer justify-between bg-[#f3f3f3] hover:bg-white font-[500] text-base rounded-xl hover:border-[#0858F7] border border-[#f3f3f3] h-[56px] items-center p-[4px]">
          <label className="ml-4">hellouser</label>
          <select className="bg-[#ffffff] cursor-pointer rounded-lg outline-none h-full px-4 text-[#7A7A85]  hover:bg-[#0858F7]/10 hover:text-[#0858F7] active:bg-[#0858F7]/30">
            <option>@heads.design</option>
          </select>
        </div>
      </div>
      <div className="active:border-[#0858F7]/20 cursor-pointer border-4 border-transparent mx-[calc(1.5rem-4px)] mt-6 rounded-2xl">
        <div className="flex cursor-pointer justify-between bg-[#f3f3f3] hover:bg-white font-[500] text-base rounded-xl hover:border-[#0858F7] border border-[#f3f3f3] h-[56px] items-center p-[4px]">
          <input
            type="password"
            placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022; "
            className="outline-none cursor-pointer bg-transparent ml-4 w-[calc(100%-46.4px)] placeholder:text-black"
          />
          <div className="h-[46.4px] w-[46.4px] flex items-center justify-center rounded-lg hover:bg-[#0858F7]/10 active:bg-[#0858F7]/30 hover:text-[#0858F7]">
            <img
              src={EyeBlocked}
              alt=""
              className="mx-[22px] fill-white text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
