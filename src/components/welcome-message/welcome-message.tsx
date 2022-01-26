import React from "react";
import "./welcome-message.css";

function WelcomeMessage() {
  return (
    <div className="welcome-container elevation">
      <h3 className="welcome">Welcome Angel</h3>
      <p className="social-text">You login with: Google</p>
      <button className="logout-btn">Logout</button>
    </div>
  );
}

export default WelcomeMessage;
