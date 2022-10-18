export type Game = {
  id: string;
  solution: string;
};

const games: Array<Game> = [
  {
    id: "0001",
    solution: "Harry Potter and the Prisoner of Azkaban",
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
      const game = games.find((x) => x.id === id);
      if (game) {
        resolve(game);
      } else {
        reject(Error(`Game with id ${id} not found`));
      }
    });
  };

  public getGameByIndex = async (index: number): Promise<Game> => {
    return new Promise((resolve, reject) => {
      const game = games[Math.floor(index)];
      if (game) {
        resolve(game);
      } else {
        reject(Error(`Game at index ${index} not found`));
      }
    });
  };
}

export default GameRepository;
