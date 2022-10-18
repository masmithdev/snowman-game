import GameRepository from "./repository";

type NewGameResponse = {
  id: string;
  encryptedSolution: string;
  maskedSolution: string;
};

class GameManager {
  private readonly repository;

  constructor() {
    this.repository = new GameRepository(); // TODO: inject this?
  }

  public getRandomGame = async (): Promise<NewGameResponse> => {
    const gameCount = await this.repository.count();
    const game = await this.repository.getGameByIndex(
      Math.floor(Math.random() * gameCount)
    );
    if (game) {
      const maskedSolution = this.generateMask(game.solution);
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

  public makeGuess = (
    encryptedSolution: string,
    guess: string
  ): Array<number> => {
    const solution = this.decrypt(encryptedSolution).toUpperCase();
    const upperGuess = guess.toUpperCase();
    let result = new Array<number>();
    solution.split("").forEach((char, index) => {
      if (char === upperGuess) {
        result.push(index);
      }
    });
    console.log(solution);
    return result;
  };

  private generateMask = (source: string): string => {
    let result = "";
    let blanks = 0;

    source.split("").forEach((char) => {
      if (char.toUpperCase() !== char.toLocaleLowerCase()) {
        blanks++;
      } else {
        if (blanks > 0) {
          result += blanks + "_";
          blanks = 0;
        }
        result += char;
      }
    });

    if (blanks > 0) {
      result += blanks + "_";
    }

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
