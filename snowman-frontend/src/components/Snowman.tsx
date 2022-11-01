import { observer } from "mobx-react-lite";
import { useGame } from "../domain/GameProvider";
import Arms from "./bodyparts/Arms";
import BodyBottom from "./bodyparts/BodyBottom";
import BodyMiddle from "./bodyparts/BodyMiddle";
import Clothes from "./bodyparts/Clothes";
import Face from "./bodyparts/Face";
import Head from "./bodyparts/Head";
import "./snowman.css";

const Snowman = observer(() => {
  const game = useGame();

  return (
    <div className="snowman-wrapper">
      <div className="snowman">
        {game.guessCount > 0 && <BodyBottom />}
        {game.guessCount > 1 && <BodyMiddle />}
        {game.guessCount > 2 && <Head />}
        {game.guessCount > 3 && <Arms />}
        {game.guessCount > 4 && <Clothes />}
        {game.guessCount > 5 && <Face />}
      </div>
      {game.gameState === "won" && <div className="message win">YOU WIN!</div>}
      {game.gameState === "gameOver" && (
        <div className="message lose">GAME OVER!</div>
      )}
      {game.gameState === "busy" && <div className="message">LOADING...</div>}
    </div>
  );
});

export default Snowman;
