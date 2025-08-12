import React, { useState } from "react";
import Add from "../assets/add.gif";
import { useRef, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icon/eye-crossed.png")) {
      ref.current.src = "icon/eye.gif";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icon/eye-crossed.png";
      passwordRef.current.type = "text";
    }
  };

  const copyText = (text) => {
    toast("Copied to clipboard! 🦄 ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      console.log(...passwordArray, form);
      setform({ site: "", username: "", password: "" });
      toast.success("Password  Saved successfully! 🦄 ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error: Password not saved! minimum length is 3 ");
    }
  };
  const deletePassword = (id) => {
    console.log("Deleting password with id ", id);
    let c = confirm("Do you really want to delete this password ? ");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      toast.warn("Password is Deleted! 🦄 ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    //  console.log(...passwordArray, form);
  };
  const editPassword = (id) => {
    toast.info("Password Edited ! 🦄 ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log("editing password with id ", id);

    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    //  console.log(...passwordArray, form);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      ;
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className=" bg-slate-800 p-5 md:mycontainer px-16 md:pb-24 py-11 pt-7 mx-auto  min-h-[88.5vh]">
        <h1 className="text-4xl text-white font-bold text-center">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className=" text-green-900 text-center text-lg ">
          Your own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            value={form.site}
            onChange={handleChange}
            name="site"
            placeholder="Enter website URL"
            id="site"
          />
          <div className="flex  md:flex-row w-full justify-between gap-8 ">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
              id="username"
            />

            <div className="relative">
              <input
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
                id="password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src="icon/eye.gif"
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="text-black font-bold flex justify-center items-center bg-green-500 rounded-full px-8 gap-2 py-3 w-fit border-2 broder-green-900 hover:bg-green-300"
          >
            <img src={Add} className="" alt="" />
            Save
          </button>
        </div>

        {/* table */}
        <div className="passwords">
          <h2 className="text-white font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div className="text-white">No passwords to show</div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden mb-10 ">
              <thead className="bg-green-800 text-white ">
                <tr>
                  <th className="py-2">Sites</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Passwords</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 ">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center  ">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            <span>{item.site} </span>
                          </a>
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <img className="w-7 " src="/icon/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="  py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{item.username} </span>
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <img className="w-7 " src="/icon/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{item.password} </span>
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <img className="w-7 " src="/icon/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className=" justify-center py-2 border border-white gap-4 text-center ">
                        <div className="flex items-center">
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <img className="w-11" src="/icon/edit.gif" alt="" />{" "}
                          </span>
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <img
                              className="w-8"
                              src="/icon/delete.gif"
                              alt=""
                            />{" "}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manager;
