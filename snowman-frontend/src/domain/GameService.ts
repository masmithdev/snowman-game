import axios, { AxiosInstance } from "axios";

export type NewGameResponse = {
  id: string;
  encryptedSolution: string;
  maskedSolution: string;
};

export type GuessRequest = {
  encryptedSolution: string;
  guesses: string;
};

export type GameStatus = "inProgress" | "win" | "gameOver";

export type GuessResponse = {
  maskedSolution: string;
  gameStatus: GameStatus;
};

class GameService {
  private api: AxiosInstance;

  constructor() {
    console.log(import.meta.env);
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_ROOT,
      timeout: 5000,
    });
  }

  public randomGame = async (): Promise<NewGameResponse> => {
    try {
      const { data } = await this.api.get<NewGameResponse>("game/random/");
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  public makeGuess = async (guess: GuessRequest): Promise<GuessResponse> => {
    try {
      const { data } = await this.api.post<GuessResponse>("game/guess/", guess);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}

export default GameService;
