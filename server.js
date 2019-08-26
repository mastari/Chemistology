const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  const test = [{ Name: "Eli", Occupation: "Eating Birthday Cake" }];
  res.json(test);
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
