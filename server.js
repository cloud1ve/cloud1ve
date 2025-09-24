const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello AWS! 배포 테스트 성공 🎉");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
