import React from "react";

function ContentTop() {
  return (
    <div className=" flex flex-col items-center justify-center w-full border-b border-white">
      <div className="border border-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ">
        <span className="text-white text-3xl sm:text-4xl">&#10084;</span>
      </div>
      <div className=" w-[1px] h-12 bg-white" />
    </div>
  );
}

export default ContentTop;
