import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white  ">
      <div className="mycontainer px-40 py-8 mx-auto flex justify-between items-center h-14 ">
        <div className="logo  font-bold text-white text-2xl">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a
              className=" text-lg font-normal hover:font-bold transition-all duration-200 "
              href="/"
            >
              Home
            </a>
            <a className=" hover:font-bold" href="#">
              About
            </a>
            <a className="font-normal hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
        <button className="text-white bg-green-700 my-3 rounded-full flex justify-between items-center ring-white ring-1 md:ring-5 sm:px-8 sm:gap-0 sm:m-4  ">
          <img
            className="invert  py-1  w-11"
            src="/icon/github.gif"
            alt="logo of githubs"
          />{" "}
          <a
            href="https://github.com/NikhilKhare973/Password-Manager"
            target="_blank"
          >
            <span className="font-bold px-4">GitHub</span>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
