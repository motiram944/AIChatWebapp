import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import Charts from "./Charts";

function Chat() {
  const { message, msgEnd, isDarkMode } = useContext(ContextApp);

  return (
    <div className={`w-full h-[85%] flex items-center justify-center overflow-hidden overflow-y-auto px-2 py-1 scroll ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="w-full lg:w-4/5 flex flex-col h-full items-start justify-start">
        {message?.map((msg, i) => (
          <span
            key={i}
            className={
              msg.isBot
                ? `flex items-start justify-center gap-2 lg:gap-5 my-2 ${isDarkMode ? 'bg-black' : 'bg-white'} p-3 rounded-md `
                : "flex items-start justify-center gap-2 lg:gap-5 my-2 p-3"
            }
          >
            <img
              src={msg.isBot ? "/icon.png" : "/user.jpeg"}
              alt="user"
              className="w-10 h-10 rounded object-cover"
            />
            {msg?.isChart ? <Charts data={msg?.text} /> : <p className={`text-${isDarkMode ? 'white' : 'black'} text-[15px]`}>{msg?.text}</p>}
          </span>
        ))}
        <div ref={msgEnd} />
      </div>
    </div>
  );
}

export default Chat;
