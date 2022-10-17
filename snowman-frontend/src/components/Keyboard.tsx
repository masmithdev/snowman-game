import { observer } from "mobx-react-lite";
import { useGame } from "../domain/GameProvider";
import "./keyboard.css";
import KeyboardKey, { ButtonState } from "./KeyboardKey";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Keyboard = observer(() => {
  const game = useGame();

  console.log(game.guesses);
  const buttons = letters.split("").map((l) => {
    let state: ButtonState;
    if (game.guesses.some((x) => x.letter === l && x.correct)) {
      state = "correct";
    } else if (game.guesses.some((x) => x.letter === l && !x.correct)) {
      state = "wrong";
    } else {
      state = "enabled";
    }
    return <KeyboardKey key={`button_${l}`} letter={l} buttonState={state} />;
  });

  return <div className="keyboard">{buttons}</div>;
});

export default Keyboard;
