import Link from "next/link";
import React from "react";

function ContentBottom() {
  const links = ["intro", "help", "fundraising", "resources", "faq", "contact"];
  return (
    <div className="flex flex-col items-center justify-center w-full border-t border-white">
      <div className=" w-[1px] h-12 bg-white" />
      <div className="flex flex-col sm:flex-row text-[11px] sm:text-[13px]">
        {links.map((link, idx, arr) => {
          return (
            <Link  href={`/${link}`} key={link} className={`border  ${idx == arr.length - 1 ? "" : "sm:border-r-0"} tracking-[0.2em] text-center cursor-pointer  border-white px-5 py-2 hover:backdrop-brightness-[1.2] transition-all duration-200 `}>
              {link.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContentBottom;
