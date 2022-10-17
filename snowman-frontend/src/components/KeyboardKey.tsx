import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./keyboardKey.css";

type ButtonState = "enabled" | "checking" | "correct" | "wrong" | "disabled";
export type CheckLetterResponse = "correct" | "wrong";
interface Props {
  letter: string;
  checkLetter: (letter: string) => Promise<CheckLetterResponse>;
}

function KeyboardKey({ letter, checkLetter }: Props) {
  const [state, setState] = useState<ButtonState>("enabled");

  useEffect(() => {
    const checkLetterAsync = async () => {
      const response = await checkLetter(letter);
      if (response === "correct") {
        setState("correct");
      } else {
        setState("wrong");
      }
    };

    if (state === "checking") {
      checkLetterAsync();
    }
  }, [state]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (state === "enabled") {
      setState("checking");
    }
  };

  let stateClass = "";
  if (state === "correct") {
    stateClass = "correct";
  } else if (state === "wrong") {
    stateClass = "wrong";
  } else if (state === "checking") {
    stateClass = "busy";
  }

  return (
    <div className={`keyboard-key ${stateClass}`}>
      <Button onClick={handleClick}>{letter}</Button>
    </div>
  );
}

export default KeyboardKey;
