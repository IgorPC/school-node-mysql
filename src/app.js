const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

routes(app);

module.exports = app;