import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { errorMiddleware } from "./middleware/error.middleware";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routes);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
