import React from "react";
import Button from "./Button";
import "./keyboard.css";
import KeyboardKey, { CheckLetterResponse } from "./KeyboardKey";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Keyboard() {
  const handleButtonClick = (letter: string): Promise<CheckLetterResponse> => {
    return new Promise((res, rej) => {
      // for now
      setTimeout(() => {
        console.log(letter);
        res("correct");
      }, 1000);
    });
  };

  const buttons = letters.split("").map((x) => {
    return (
      <KeyboardKey
        key={`button_${x}`}
        letter={x}
        checkLetter={() => handleButtonClick(x)}
      />
    );
  });

  return <div className="keyboard">{buttons}</div>;
}

export default Keyboard;
