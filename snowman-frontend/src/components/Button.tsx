import React from "react";
import "./button.css";

interface Props {
  children: React.ReactNode;
  buttonState?: "enabled" | "correct" | "wrong" | "busy" | "disabled";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function Button({ children, onClick, buttonState = "enabled" }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (buttonState === "enabled" && onClick) {
      onClick(e);
    }
  };

  return (
    <div className="button" onClick={handleClick}>
      {children}
    </div>
  );
}

export default Button;
