import { ResponseError } from "../errors/responseError";

export type Game = {
  id: string;
  solution: string;
};

const games: Array<Game> = [
  {
    id: "0001",
    solution: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    id: "0002",
    solution: "Never Ending Story",
  },
];

class GameRepository {
  public count = async (): Promise<number> => {
    return new Promise((resolve) => {
      resolve(games.length);
    });
  };

  public getGameById = async (id: string): Promise<Game> => {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject(new ResponseError(400, "Invalid id"));
      } else {
        const game = games.find((x) => x.id === id);
        if (game) {
          resolve(game);
        } else {
          reject(new ResponseError(404, `Game with id ${id} not found`));
        }
      }
    });
  };

  public getGameByIndex = async (index: number): Promise<Game> => {
    return new Promise((resolve, reject) => {
      if (index < 0 || index >= games.length) {
        reject(new ResponseError(404, `Game at index ${index} not found`));
      } else {
        const game = games[Math.floor(index)];
        if (game) {
          resolve(game);
        } else {
          reject(new ResponseError(404, `Game at index ${index} not found`));
        }
      }
    });
  };
}

export default GameRepository;
