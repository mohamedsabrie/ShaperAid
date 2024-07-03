import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className=" relative z-20 mt-5 sm:mt-10  flex flex-col justify-center items-center text-white text-[10px] font-[300px]">
      <div className="tracking-[0.2em]">
        {" "}
        <Link className="underline " href="/">© SHAPERAID.</Link> ALL RIGHTS RESERVED.
      </div>
      <Link className="underline tracking-[0.2em]" href="/imprint">IMPRINT & PRIVACY</Link>
    </div>
  );
}

export default Footer;
