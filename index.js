const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Olá estou alterando a branch do gabriel!");
});


app.listen(3005, () => {
  console.log("Servidor on");
});