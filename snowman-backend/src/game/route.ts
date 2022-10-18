import express from "express";
import GameManager from "./manager";

const initGameRoute = (app: express.Application) => {
  const router = express.Router();
  const manager = new GameManager();

  router.get("/random", async (req, res) => {
    console.log("1");
    const game = await manager.getRandomGame();
    if (game) {
      res.json(game);
    } else {
      res.status(404);
    }
  });

  router.get("/guess", (req, res) => {
    console.log(req.body);
    const body: { encryptedSolution: string; guess: string } = req.body;

    const positions = manager.makeGuess(body.encryptedSolution, body.guess);
    if (positions) {
      res.json(positions);
    } else {
      res.status(404);
    }
  });

  app.use("/game", router);
};

export default initGameRoute;
