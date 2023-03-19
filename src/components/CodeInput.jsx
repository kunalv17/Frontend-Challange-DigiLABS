import React, { useState, useRef } from "react";

const CodeInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
  };

  return (
    <div className="mt-8 cursor-pointer  flex w-full justify-between ">
      {otp.map((data, index) => (
        <input
          key={index}
          name="otp"
          maxLength="1"
          type="text"
          value={data}
          className="cursor-pointer w-[48px] h-[56px] outline-none border border-[#0858F7] codeInput rounded-2xl text-center shadow-custom"
          onChange={(e) => handleChange(e.target, index)}
        />
      ))}
    </div>
  );
};

export default CodeInput;
