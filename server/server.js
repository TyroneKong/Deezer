const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8002;
const artistRoute = require("../server/routes/search");

app.use(cors());
app.use(express.json());

app.use("/", artistRoute);

app.use("/", (req, res) => {
  res.json("welcome to my api");
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
