const express = require("express");
const morgan = require("morgan");
const os = require("os");

async function main() {
  const app = express();

  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    return res.json({ message: `Hello from ${os.hostname()} 🚀` });
  });

  app.listen(3000, () => console.log("Server is up 🐙"));
}

main();
