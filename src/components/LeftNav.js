import React, { useContext } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { ContextApp } from "../utils/Context";
import CustomizedSwitches from "./Switch";
import { Link } from "react-router-dom";

function LeftNav({ name, logout }) {
  const { showSlide, isDarkMode } = useContext(ContextApp);

  return (
    // top section
    <div
      className={
        !showSlide
          ? `h-screen ${
              isDarkMode ? "bg-black" : "bg-white"
            } w-[300px] border-r border-gray-500 hidden lg:flex items-center justify-between p-2 text-${
              isDarkMode ? "white" : "black"
            } flex-col translate-x-0`
          : "hidden"
      }
    >
      <div className="flex items-start justify-end w-full">
        <Link to="/" className="nav-link w-full">
          <span className="rounded-md w-full px-0.5 py-0.5 text-xs font-medium uppercase text-gray-500">
            <img style={{ height: "30px" }} src="/logo.png" alt="logo" />
          </span>
        </Link>
      </div>
      {/* middle section  */}
      <div className="h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
        <Link to="/help" className="nav-link w-full">
          {" "}
          {/* Add Link */}
          <span
            className={`rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-slate-300"
            } transition-all duration-300 overflow-hidden truncate whitespace-nowrap`}
          >
            <span className="flex gap-2 items-center justify-center text-base">
              <FiMessageSquare />
              <span className="text-sm">Want Help</span>
            </span>
          </span>
        </Link>
      </div>
      {/* bottom section  */}
      <div
        className={`w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2 text-${
          isDarkMode ? "white" : "black"
        }`}
      >
        <span
          className={`rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer ${
            isDarkMode ? "hover:bg-gray-800" : "hover:bg-slate-300"
          } transition-all duration-300`}
        >
          <span className="flex gap-1 items-center justify-center text-sm">
            <CustomizedSwitches />
          </span>
        </span>
        <span
          className={`rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer ${
            isDarkMode ? "hover:bg-gray-800" : "hover:bg-slate-300"
          } transition-all duration-300`}
        >
          <span className="flex gap-2 items-center justify-center text-sm font-bold">
            <img
              src="/user.jpeg"
              alt="user"
              className="w-8 h-8 object-cover rounded-sm"
            />
            <p
              style={{
                display: "flex",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "190px",
              }}
              title={name}
            >
              {name}
            </p>
          </span>
          <span
            className="rounded-md  px-1.5 py-0.5 text-xs font-medium uppercase text-gray-500"
            onClick={logout}
          >
            <img
              src="/logout.png"
              alt="user"
              className="w-8 h-8 object-cover rounded-sm"
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default LeftNav;
