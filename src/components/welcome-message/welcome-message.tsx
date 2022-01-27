import React, { useContext } from "react";
import { Loader } from "..";
import { appContext } from "../../state";
import "./welcome-message.css";

function WelcomeMessage() {
  const { logout, name, signInWith, isLoading } = useContext(appContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="welcome-container elevation">
      <h3 className="welcome">Welcome {name}</h3>
      <p className="social-text">You login with: {signInWith}</p>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default WelcomeMessage;
