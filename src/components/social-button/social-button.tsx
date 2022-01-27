import React from "react";
import "./social-button.css";

interface Props {
  text: string;
  socialIcon: string;
  onClick: () => void;
}

function SocialButton({ onClick, text, socialIcon }: Props) {
  return (
    <button type="button" className="social-button" onClick={onClick}>
      <img className="logo" src={socialIcon} alt="social" />
      <p>{text}</p>
    </button>
  );
}

export default SocialButton;
