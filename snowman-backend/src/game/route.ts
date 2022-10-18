import express from "express";
import { ResponseError } from "../errors/responseError";
import GameManager, { Guess } from "./manager";

const initGameRoute = (app: express.Application) => {
  const router = express.Router();
  const manager = new GameManager();

  /**
   * Get a new random game from the repository
   */
  router.get("/random", async (req, res) => {
    try {
      const game = await manager.getRandomGame();
      if (game) {
        res.json(game);
      } else {
        res.status(404);
      }
    } catch (e) {
      if (e instanceof ResponseError) {
        res.status(e.status).send(e.message);
      }
    }
  });

  /**
   * Start a new game with the given id
   */
  router.get("/new/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (!id) {
      res.status(400);
    } else {
      try {
        const response = await manager.getGame(id);
        if (response) {
          res.json(response);
        } else {
          res.status(404);
        }
      } catch (e) {
        if (e instanceof ResponseError) {
          res.status(e.status).send(e.message);
        }
      }
    }
  });

  /**
   * Get the solution for the game with a fivn id
   */
  router.get("/solution/:id", async (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.status(400);
    } else {
      try {
        const response = await manager.getSolution(id);
        if (response) {
          res.json(response);
        } else {
          res.status(404);
        }
      } catch (e) {
        if (e instanceof ResponseError) {
          res.status(e.status).send(e.message);
        }
      }
    }
  });

  /**
   * Make a guess
   */
  router.post("/guess", (req, res) => {
    const guess: Guess = req.body;
    if (!guess || !guess.encryptedSolution || !guess.guesses) {
      res.status(404);
    } else {
      try {
        const response = manager.makeGuess(guess);
        if (response) {
          res.json(response);
        } else {
          res.status(404);
        }
      } catch (e) {
        if (e instanceof ResponseError) {
          res.status(e.status).send(e.message);
        }
      }
    }
  });

  app.use("/game", router);
};

export default initGameRoute;
