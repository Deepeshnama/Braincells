import express from "express";
import routes from "./routes/user.route.js";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});
