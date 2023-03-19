import React from 'react'

const Heading = ({ heading}) => {
  return (
    <div>
      <h1 className="font-[700] text-[28px] mx-6 mt-[44px] leading-8">
        {heading}
      </h1>
    </div>
  );
};

export default Heading