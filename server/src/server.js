const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const autoStartTask= setImmediate(start);
const server = {
  start,
  skipAutoStart: $=> clearImmediate(autoStartTask),
  baseUrl: undefined,
};

module.exports = server;



async function start() {
  console.log('Loading the config...');
  const config = loadConfig();

  console.log(`Connecting to the database at ${config.DB_URI}...`);
  await connectToDb(config);

  console.log('Starting the server...');
  await startServer(config);

  server.baseUrl = `http://${config.SERVER_HOST}:${config.SERVER_PORT}`;
  console.log(`Server up and running at ${server.baseUrl}`);
}

function loadConfig() {
  require('dotenv-flow').config({ path: 'config' });
  return process.env;
}

function connectToDb({ DB_URI }) {
  return mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

function startServer({ SERVER_HOST, SERVER_PORT }) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/health', (req, res) => res.json('Up and running!'));

  return new Promise((res, rej) => {
    app.listen(SERVER_PORT, SERVER_HOST, res);
    app.once('error', rej);
  });
}
