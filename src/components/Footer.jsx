import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800  text-white flex flex-col justify-center items-center  botton-0 w-full ">
      <div className="logo  font-bold text-white text-2xl  ">
        <span className="text-green-700"> &lt;</span> <span>Pass</span>
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center ">
        Created with{" "}
        <img className="w-10 mx-2" src="/icon/it develper.gif" alt="" /> by
        NikhilKhare
      </div>
    </div>
  );
}

export default Footer;
