import { makeAutoObservable } from "mobx";
import GameService, { GuessResponse, NewGameResponse } from "./GameService";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class Letter {
  public letter: string = "";
  public status: "open" | "guessing" | "correct" | "wrong" = "open";

  constructor() {
    makeAutoObservable(this, {
      // overrides
    });
  }
}

class GameStore {
  public gameId: string = "";
  public maskedSolution: string = "";
  public guesses: Array<Letter>;
  public gameState: "init" | "busy" | "ready" | "error" | "won" | "gameOver";

  private encryptedSolution: string = "";
  private service: GameService;

  constructor() {
    makeAutoObservable(this, {
      // overrides;
    });
    this.gameState = "init";
    this.service = new GameService();
    this.guesses = letters.split("").map((x) => {
      return {
        letter: x,
        status: "open",
      };
    });
    console.log(this.guesses);
  }

  public *makeGuess(letter: string) {
    if (this.gameState === "ready") {
      const upperLetter = letter.toUpperCase();
      try {
        const letter = this.guesses.find((x) => x.letter === upperLetter);
        if (letter && letter!.status === "open") {
          letter.status = "guessing";
          const guesses = this.guesses
            .filter((x) => x.status !== "open")
            .map((x) => x.letter)
            .join("");
          const guessResponse: GuessResponse = yield this.service.makeGuess({
            guesses: guesses,
            encryptedSolution: this.encryptedSolution,
          });
          console.log(guessResponse);
          this.maskedSolution = guessResponse.maskedSolution;
          if (this.maskedSolution.toUpperCase().indexOf(upperLetter) >= 0) {
            letter.status = "correct";
          } else {
            letter.status = "wrong";
          }

          if (guessResponse.gameStatus === "gameOver") {
            this.gameState = "gameOver";
          } else if (guessResponse.gameStatus === "win") {
            this.gameState = "won";
          }
        }
        //guessResponse.gameStatus;
      } catch (e) {
        // TODO: shurg?
      }
    }
  }

  public *newGame() {
    if (this.gameState !== "busy") {
      this.guesses.forEach((x) => (x.status = "open"));
      this.gameState = "busy";
      try {
        const gameResponse: NewGameResponse = yield this.service.randomGame();
        this.maskedSolution = gameResponse.maskedSolution;
        this.encryptedSolution = gameResponse.encryptedSolution;
        this.gameId = gameResponse.id;
        this.gameState = "ready";
      } catch (e) {
        this.gameState = "error";
      }
    }
  }

  get guessCount() {
    return this.guesses.filter((x) => x.status === "wrong").length;
  }
}

export default GameStore;
