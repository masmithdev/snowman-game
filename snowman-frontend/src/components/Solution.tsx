import { observer } from "mobx-react-lite";
import { useGame } from "../domain/GameProvider";
import "./solution.css";

const Solution = observer(() => {
  const game = useGame();

  return <div className="solution">{game.maskedSolution}</div>;
});

export default Solution;
