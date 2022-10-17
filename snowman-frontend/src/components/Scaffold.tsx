import { useEffect } from "react";
import Keyboard from "./Keyboard";
import Solution from "./Solution";
import { useGame } from "../domain/GameProvider";
import Snowman from "./Snowman";
import "./scaffold.css";

function Scaffold() {
  const game = useGame();

  useEffect(() => {
    game.newGame("Harry Potter and the Philosopher's Stone");
  }, []);

  return (
    <div className="scaffold">
      <Snowman />
      <Solution />
      <Keyboard />
    </div>
  );
}

export default Scaffold;
