import GameProvider from "./domain/GameProvider";
import Scaffold from "./components/Scaffold";

function Game() {
  return (
    <GameProvider>
      <Scaffold />
    </GameProvider>
  );
}

export default Game;
