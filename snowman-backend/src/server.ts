import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import initGameRoute from "./game/route";

dotenv.config();

const port = process.env.SERVER_PORT;
if (!port) {
  throw new Error("SERVER_PORT not set");
}

const app = express();

let corsOptions: cors.CorsOptions;
if (process.env.NODE_ENV === "development") {
  corsOptions = {
    origin: "http://localhost:5173",
  };
} else {
  corsOptions = {
    origin: "", // TODO!
  };
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.disable("x-powered-by");

initGameRoute(app);

app.listen(port, () => {
  console.log("Running");
});
