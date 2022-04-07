const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

const recordRouter = require("./src/routes/record");

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/record", recordRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
