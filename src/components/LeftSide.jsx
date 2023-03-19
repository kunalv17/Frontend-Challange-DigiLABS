import React, { useState, useEffect } from "react";

import Logo from "../assets/Logo.svg"

import Form from "./Form";
import Button from "./Button";
import Heading from "./Heading";
import CodeInput from "./CodeInput";

let timeArray = [
  "10",
  "09",
  "08",
  "07",
  "06",
  "05",
  "04",
  "03",
  "02",
  "01",
  "00",
];

const LeftSide = ({success, setSuccess, handleSuccess, signIn, setSignIn}) => {
  const [time, setTime] = useState(11);
  const handleClick = () => {
    setSignIn((prev) => !prev);
  };

  const handleNext = () => {
    setSignIn((prev) => !prev);
    setTime(11);
  };

  

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
        if (time === 0) clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      {success &&
        <div className={`left-side flex flex-col h-[812px] w-[375px]`}>
          <p className="absolute top-[calc(50vh-12px)] left-[calc(50vw-33px)] text-[#0858F7] font-[700]">Success!</p>
        </div>
        }
      {!success && (
        <div className="left-side flex flex-col w-[375px] h-[600px] ">
          {signIn && (
            <div className="fade-in">
              <Heading heading={"Welcome to Systempackage"} />
              <Form />
              <Button handleClick={handleNext} />
              <div className="cursor-pointer text-center mt-4 text-[#0858F7] font-[700] hover:text-[#074edb]">
                Forgot your password?
              </div>
            </div>
          )}
          {!signIn && (
            <div className="flex flex-col fade-in">
              <Heading heading={"Enter the verification code to continue"} />
              <p className="mx-6 mt-4 font-[500] text-[#7A7A85]">
                We sent to{" "}
                <a href="/" className="text-[#0858F7]">
                  hellouser@heads.design.
                </a>{" "}
                If you don't see it, check your spam.
              </p>
              <div className="mx-6">
                <CodeInput />
              </div>
              <div className="mt-8 mx-6 flex justify-between ">
                <div
                  className="cursor-pointer text-center mt-4 text-[#0858F7] font-[700] hover:text-[#074edb]"
                  onClick={handleClick}
                >
                  Back
                </div>
                {time > 0 ? (
                  <div className="cursor-pointer flex h-6 mt-4 overflow-hidden text-[#CACACE] font-[700]">
                    Resend 00 :{" "}
                    <div className="ml-1 animate">
                      {timeArray.map((d, i) => (
                        <p key={i}>{d}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p
                    onClick={handleSuccess}
                    className="cursor-pointer fade-in mt-4 text-[#0858F7] font-[700] hover:text-[#074edb]"
                  >
                    Resend Code
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LeftSide;
