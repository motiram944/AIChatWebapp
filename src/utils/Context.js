import { createContext, useEffect, useRef, useState } from "react";
import DummyData from "../DummyData/dummyData";
import { containsVisualizationKeywords } from "./CommenFunction";
export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [message, setMessage] = useState([
    {
      text: "Welcome to our AI-powered financial analysis application! Analyze annual reports of publicly listed companies in India with ease. Get insights into financial performance, query reports using natural language, and visualize company metrics on interactive dashboards. Powered by advanced AI technology for accurate and efficient data analysis.",
      isBot: true,
    },
  ]);
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd?.current?.scrollIntoView();
  }, [message]);

  const handleUserQuery = (query) => {
    const response = getResponseFromData(query);
    return response;
  };

  const getResponseFromData = (query) => {
    const response = DummyData.find((item) => item?.query === query);
    return response
      ? response?.response
      : containsVisualizationKeywords(query)
      ? DummyData[6]?.response
      : "Sorry, I couldn't find the information for your query.";
  };

  // button Click function
  const handleSend = async () => {
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    const res = handleUserQuery(text);

    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true, isChart: containsVisualizationKeywords(text) },
    ]);
  };

  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <ContextApp.Provider
      value={{
        showSlide,
        setShowSlide,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        setIsDarkMode,
        isDarkMode,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;
