import React from "react";

function ContentBottom() {
  const links = ["intro", "help", "fundraising", "resources", "faq", "contact"];
  return (
    <div className="flex flex-col items-center justify-center w-full border-t border-white">
      <div className=" w-[1px] h-12 bg-white" />
      <div className="flex flex-col sm:flex-row text-[11px] sm:text-[13px]">
        {links.map((link, idx, arr) => {
          return (
            <div key={link} className={`border ${idx == 3 ? "sm:-mr-1" : ""} ${idx == arr.length - 1 ? "" : "sm:border-r-0"} text-center cursor-pointer  border-white px-5 py-2 hover:backdrop-brightness-[1.2] transition-all duration-200 `}>
              {link.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentBottom;
