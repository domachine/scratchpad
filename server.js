'use strict';

const util = require('util');
const http = require('http');
const express = require('express');
const rewrite = require('connect-modrewrite');

const port = process.env.PORT || 3000;
const app = module.exports = express();

// Hand off routing to the client side
app.use(rewrite(['^[^.]*$ /index.html']));
app.use(express.static(`${__dirname}/static`));

http.createServer(app).listen(port, () => {
  util.log(`Listening on ${port} ...`);
});
