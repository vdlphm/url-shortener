require("dotenv").config();
require("./configs/database").connect();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const auth = require("./controllers/authcontroller");
const port = process.env.API_PORT;

app.use(express.json({ limit: "50mb" }));
app.use("/auth", auth);

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
