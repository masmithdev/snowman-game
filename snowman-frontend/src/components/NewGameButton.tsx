import { observer } from "mobx-react-lite";
import { useGame } from "../domain/GameProvider";
import Button from "./Button";
import "./newGameButton.css";

const NewGameButton = observer(() => {
  const game = useGame();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    game.newGame();
  };

  let stateClass = "";
  if (game.gameState === "busy" || game.gameState === "init") {
    stateClass = "busy";
  }

  return (
    <div className={`new-game-button ${stateClass}`}>
      <Button onClick={handleClick}>New Game</Button>
    </div>
  );
});

export default NewGameButton;
