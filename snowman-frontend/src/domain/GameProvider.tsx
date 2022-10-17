import React, { createContext, useContext } from "react";
import GameStore from "./GameStore";

const store = new GameStore();

const GameConext = createContext<GameStore>(store);

interface Props {
  children: React.ReactNode;
}

const GameProvider = ({ children }: Props) => {
  return <GameConext.Provider value={store}>{children}</GameConext.Provider>;
};

export default GameProvider;

export const useGame = () => {
  const context = useContext(GameConext);
  return context;
};
