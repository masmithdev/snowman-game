import { observer } from "mobx-react-lite";
import React from "react";
import { useGame } from "../domain/GameProvider";
import { Letter } from "../domain/GameStore";
import Button from "./Button";
import "./keyboardKey.css";

interface Props {
  letter: Letter;
}

const KeyboardKey = observer(({ letter }: Props) => {
  const game = useGame();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (letter.status === "open") {
      game.makeGuess(letter.letter);
    }
  };

  let stateClass = "";
  if (letter.status === "correct") {
    stateClass = "correct";
  } else if (letter.status === "wrong") {
    stateClass = "wrong";
  } else if (
    letter.status === "guessing" ||
    game.gameState === "init" ||
    game.gameState === "busy"
  ) {
    stateClass = "busy";
  }

  return (
    <div className={`keyboard-key ${stateClass}`}>
      <Button onClick={handleClick}>{letter.letter}</Button>
    </div>
  );
});

export default KeyboardKey;
