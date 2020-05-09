import "@babel/polyfill";

import express, { Request, Response } from "express";

import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use("/", routes);

//Error handler
app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message, req: req.url });
});

app.listen(3333, () => {
  console.log(Date(), "Opa meu Bacano, porta 3333");
});

export default app;
