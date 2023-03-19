import React, { useState } from "react";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const handleSuccess = () => {
    setSuccess(true);
    setSignIn(false);
  };
  return (
    <div className="flex flex-col">
      <Header success={success} handleSuccess={handleSuccess} signIn={signIn} setSignIn={setSignIn} />
      <div className="flex justify-evenly items-center w-[100vw]">
        <LeftSide
          success={success}
          handleSuccess={handleSuccess}
          setSuccess={setSuccess}
          signIn={signIn}
          setSignIn={setSignIn}
        />
        <RightSide success={success} />
      </div>
    </div>
  );
};

export default App;
