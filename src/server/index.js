var path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.API_KEY;
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/key", (req, res) => {
  res.send(apiKey);
});
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
