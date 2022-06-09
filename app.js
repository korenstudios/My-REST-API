const mongoose = require("mongoose");

const express = require("express");
const app = express();

const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const cardsRouter = require("./routers/cards");

const morgan = require("morgan");

mongoose
  .connect("mongodb://localhost/my_rest_api")
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection failed", error));

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cards", cardsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
