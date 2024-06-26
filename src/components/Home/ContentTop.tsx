import { HeartIcon } from "@heroicons/react/16/solid";
import React from "react";

function ContentTop() {
  return (
    <div className=" flex flex-col items-center justify-center w-full border-b border-white">
      <div className="border border-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ">
        <HeartIcon className="h-10 sm:h-14 text-white" />
      </div>
      <div className=" w-[1px] h-12 bg-white" />
    </div>
  );
}

export default ContentTop;
