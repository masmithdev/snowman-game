import GameRepository from "./repository";

type NewGameResponse = {
  id: string;
  encryptedSolution: string;
  maskedSolution: string;
};

export type Guess = {
  encryptedSolution: string;
  guesses: string;
};

type GameStatus = "inProgress" | "win" | "gameOver";

type GuessResponse = {
  maskedSolution: string;
  gameStatus: GameStatus;
};

class GameManager {
  private readonly repository;

  constructor() {
    this.repository = new GameRepository(); // TODO: inject this?
  }

  public getGame = async (id: string): Promise<NewGameResponse> => {
    const game = await this.repository.getGameById(id);
    if (game) {
      const maskedSolution = this.generateMask(game.solution, "");
      const encryptedSolution = this.encrypt(game.solution);
      return {
        id: game.id,
        encryptedSolution: encryptedSolution,
        maskedSolution: maskedSolution,
      };
    } else {
      // TODO: Handle errors and undefined games
      return {
        id: "",
        encryptedSolution: "",
        maskedSolution: "",
      };
    }
  };

  public getRandomGame = async (): Promise<NewGameResponse> => {
    const gameCount = await this.repository.count();
    const game = await this.repository.getGameByIndex(
      Math.floor(Math.random() * gameCount)
    );
    if (game) {
      const maskedSolution = this.generateMask(game.solution, "");
      const encryptedSolution = this.encrypt(game.solution);
      return {
        id: game.id,
        encryptedSolution: encryptedSolution,
        maskedSolution: maskedSolution,
      };
    } else {
      // TODO: Handle errors and undefined games
      return {
        id: "",
        encryptedSolution: "",
        maskedSolution: "",
      };
    }
  };

  public getSolution = async (id: string): Promise<string> => {
    const game = await this.repository.getGameById(id);
    if (game) {
      return game.solution;
    } else {
      return "";
    }
  };

  public makeGuess = (guess: Guess): GuessResponse => {
    const solution = this.decrypt(guess.encryptedSolution).toUpperCase();
    const maskedSolution = this.generateMask(solution, guess.guesses);
    let gameStatus: GameStatus;
    if (maskedSolution.toUpperCase() === solution.toUpperCase()) {
      gameStatus = "win";
    } else if (guess.guesses.length >= 6) {
      gameStatus = "gameOver";
    } else {
      gameStatus = "inProgress";
    }

    return {
      maskedSolution: maskedSolution,
      gameStatus: gameStatus,
    };
  };

  private generateMask = (source: string, keepChars: string): string => {
    let result = "";
    const keepCharArray = keepChars.toUpperCase().split("");
    source.split("").forEach((char) => {
      if (
        char.toUpperCase() !== char.toLocaleLowerCase() &&
        !keepCharArray.some((x) => x === char.toUpperCase())
      ) {
        result += "_";
      } else {
        result += char;
      }
    });

    return result;
  };

  private encrypt = (source: string): string => {
    // TODO: actualy encrypt! Using BASE64 encoding for testing
    return Buffer.from(source, "utf-8").toString("base64");
  };

  private decrypt = (source: string): string => {
    // TODO: actualy decrypt! Using BASE64 decoding for testing
    return Buffer.from(source, "base64").toString("utf-8");
  };
}

export default GameManager;
