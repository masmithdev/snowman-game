import React, { useEffect, useState } from "react";
import { useGame } from "../domain/GameProvider";
import Button from "./Button";
import "./keyboardKey.css";

export type ButtonState =
  | "enabled"
  | "checking"
  | "correct"
  | "wrong"
  | "disabled";
interface Props {
  letter: string;
  buttonState: ButtonState;
}

const KeyboardKey = ({ letter, buttonState }: Props) => {
  const game = useGame();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (buttonState === "enabled") {
      console.log("guessing" + letter);
      game.makeGuess(letter);
    }
  };

  let stateClass = "";
  if (buttonState === "correct") {
    stateClass = "correct";
  } else if (buttonState === "wrong") {
    stateClass = "wrong";
  } else if (buttonState === "checking") {
    stateClass = "busy";
  }

  return (
    <div className={`keyboard-key ${stateClass}`}>
      <Button onClick={handleClick}>{letter}</Button>
    </div>
  );
};

export default KeyboardKey;
