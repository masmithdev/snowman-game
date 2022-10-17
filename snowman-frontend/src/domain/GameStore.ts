import { makeAutoObservable } from "mobx";

type Guess = {
  letter: string;
  correct: boolean;
};

class GameStore {
  public answer: string = "";
  public phrase: string = "";
  public guesses: Array<Guess> = [];

  constructor() {
    makeAutoObservable(this, {
      // overrides;
    });
  }

  public makeGuess(letter: string) {
    const upperLetter = letter.toUpperCase();
    if (!this.guesses.find((x) => x.letter === upperLetter)) {
      const correct = this.phrase.indexOf(upperLetter) >= 0;
      console.log(correct);
      this.guesses.push({
        letter: upperLetter,
        correct: correct,
      });
      if (correct) {
        this.answer = this.phrase
          .split("")
          .map((l, i) => {
            if (letter === l) {
              return letter;
            } else {
              return this.answer[i];
            }
          })
          .join("");
      }
    }
  }

  public newGame(phrase: string) {
    this.phrase = phrase.toUpperCase();
    this.answer = this.initAnswer(phrase);
    this.guesses = [];
  }

  private initAnswer(phrase: string): string {
    return phrase
      .split("")
      .map((char) => {
        if (char.toUpperCase() !== char.toLowerCase()) {
          // hacky way to detect letters.
          return "_";
        } else {
          return char;
        }
      })
      .join("");
  }

  get guessCount() {
    return this.guesses.length;
  }
}

export default GameStore;
