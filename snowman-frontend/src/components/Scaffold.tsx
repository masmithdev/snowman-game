import { useEffect } from "react";
import Keyboard from "./Keyboard";
import Solution from "./Solution";
import { useGame } from "../domain/GameProvider";
import Snowman from "./Snowman";
import "./scaffold.css";
import NewGameButton from "./NewGameButton";

function Scaffold() {
  const game = useGame();

  useEffect(() => {
    game.newGame();
  }, []);

  return (
    <div className="scaffold">
      <Snowman />
      <Solution />
      <Keyboard />
      <NewGameButton />
    </div>
  );
}

export default Scaffold;
