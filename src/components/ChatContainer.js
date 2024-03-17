import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSendPlane2Fill } from "react-icons/ri";
import Chat from "./Chat";

function ChatContainer() {
  const {
    setMobile,
    Mobile,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
    isDarkMode // Assuming isDarkMode is provided by the context
  } = useContext(ContextApp);

  const containerStyle = {
    backgroundColor: isDarkMode ? "#00000050" : "rgba(255, 255, 255, 0.9)",
    color: isDarkMode ? "#ccc" : "#000",
  };

  const inputStyle = {
    backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
    color: isDarkMode ? "#ccc" : "#000",
  };


  return (
    <div
      className={`h-screen w-full lg:w-[calc(100%-300px)] flex items-start justify-between flex-col p-2`}
      style={containerStyle}
    >
      <span
        className="rounded px-3 py-[9px] lg:hidden flex items-center justify-center cursor-pointer text-white mt-0 mb-3 border border-gray-600"
        title="Open sidebar"
        onClick={() => setMobile(!Mobile)}
      >
        <HiOutlineMenuAlt2 fontSize={20} />
      </span>
      {/* chat section */}
      <Chat />
      {/* chat input section */}
      <div className="w-full  m-auto flex items-center justify-center flex-col gap-2 my-2">
        <span style={inputStyle} className={`flex gap-2 items-center justify-center rounded-lg shadow-md w-[90%] lg:w-2/5 xl:w-1/2`}>
          <input
            type="text"
            placeholder="Send a message"
            style={inputStyle}
            className={`h-full bg-transparent px-3 py-4 w-full border-none outline-none text-base`}
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <RiSendPlane2Fill
            title="send message"
            className={
              chatValue.length <= 0
                ? "text-gray-400 cursor-auto mx-3 text-xl"
                : "text-white cursor-pointer mx-3 text-3xl bg-green-500 p-1 rounded shadow-md "
            }
            onClick={handleSend}
          />
        </span>
        <p className={`lg:text-xs text-gray-400 text-center text-[10px]`}>
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts. ChatGPT August 3 Version
        </p>
      </div>
    </div>
  );
}

export default ChatContainer;
