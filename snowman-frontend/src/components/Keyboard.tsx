import { observer } from "mobx-react-lite";
import { useGame } from "../domain/GameProvider";
import "./keyboard.css";
import KeyboardKey from "./KeyboardKey";

const Keyboard = observer(() => {
  const game = useGame();

  const buttons = game.guesses.map((letter) => (
    <KeyboardKey key={`button_${letter.letter}`} letter={letter} />
  ));

  return <div className="keyboard">{buttons}</div>;
});

export default Keyboard;
