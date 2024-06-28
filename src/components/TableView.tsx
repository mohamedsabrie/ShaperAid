import React from "react";

type Data = {
  id: string;
  row: string[];
}[];

function TableView({ data }: { data: Data }) {
  return (
    <table className="border-collapse border-spacing-0 text-white ">
      <tbody>
        {data.map((item, index) => {
            const isLink  = item.row[1].startsWith("https");
            const renderTd = (text:string) =>{
              return   isLink ? <a className={`${text.startsWith("https") ? "border-b border-dashed" : ""} `} target="_blank" href={item.row[1]}>{text}</a> : text
            }
          return (
            <tr key={item.id} className={`${index % 2 ? "" : "bg-[#ffffff13]"} `}>
              <td className="border-y border-white p-3 desc ">{renderTd(item.row[0]) } </td>
              <td className="border-y border-white p-3 desc ">{renderTd(item.row[1])} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableView;
