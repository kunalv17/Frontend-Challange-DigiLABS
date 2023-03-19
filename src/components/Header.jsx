import { stringify } from "postcss";
import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";

const Header = ({ success }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth/2);
    setHeight(window.innerHeight/2);
  }, [success]);

  return (
    <div className="flex mt-4 mx-6 items-center justify-between">
      <img
        src={Logo}
        alt="Logo"
        className={"duration-1000"}
        style={{transform: success && `translate(calc(${width}px - 34px),calc(${height}px - 60px))`}}
        
        
      />
      {!success && (
        <p className="text-[13px] font-[500] md:hidden">
          Not member?{" "}
          <a href="/" className="text-[#0858F7] ">
            Create account
          </a>
        </p>
      )}
      {!success && (
        <p className="absolute left-[49px] bottom-[48px] text-[13px] font-[500] hidden md:block">
          Not member?{" "}
          <a href="/" className="text-[#0858F7] ">
            Create account
          </a>
        </p>
      )}
    </div>
  );
};

export default Header;
