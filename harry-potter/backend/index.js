const { fetch } = require('undici');
globalThis.fetch = fetch;

const express = require('express');
const cors = require('cors');

const gameRouter = require("./routes/game");

const app = express();

app.use(cors());
app.use(express.json());

app.use(gameRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port: ' + port);
})
