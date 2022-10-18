import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import initGameRoute from "./game/route";

dotenv.config();

const port = process.env.SERVER_PORT;
if (!port) {
  throw new Error("SERVER_PORT not set");
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.disable("x-powered-by");

initGameRoute(app);

app.listen(port, () => {
  console.log("Running");
});
