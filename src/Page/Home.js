import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import ChatContainer from "../components/ChatContainer";
import Mobile from "../components/Mobile";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";
import Help from "../components/Help";

function Home() {
  const { user, isLoading } = useAuth0();
  const { loginWithRedirect, logout } = useAuth0();


  const logoutUser = () => {
    logout();
    loginWithRedirect();
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex w-screen relative">
      <Router>
        <LeftNav name={user?.name} logout={logoutUser} />
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<ChatContainer />} />
        </Routes>
        <span className="flex lg:hidden">
          <Mobile name={user?.name} logout={logoutUser} />
        </span>
      </Router>
    </div>
  );
}

export default Home;
