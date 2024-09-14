"use client";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className=" relative z-20 mt-5 sm:mt-10  flex flex-col justify-center items-center text-white text-[10px] font-[300px]">
      <div className="tracking-[0.2em] leading-5">
        {" "}
        <span className="link" onClick={() => window.location.reload()}>
          © SHAPERAID.
        </span>{" "}
        ALL RIGHTS RESERVED.
      </div>
      <Link className="link tracking-[0.2em] " href="/imprint">
        IMPRINT & PRIVACY
      </Link>
    </div>
  );
}

export default Footer;
