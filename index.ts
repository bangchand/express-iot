import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const port = 3002;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("hello");
});

app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
