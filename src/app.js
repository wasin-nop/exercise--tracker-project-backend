const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require("./config");

const app = express();
const port = 4000;

const recordRouter = require("./routes/record");

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/record", recordRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const boot = async () => {
  // Connect to mongoDB
  await mongoose.connect(config.uri);
  // Start express server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

boot();
