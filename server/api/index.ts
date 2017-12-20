let express = require('express');

let apiRouter = express.Router();
apiRouter.use('/authors', require('./authors'));

module.exports = apiRouter;

let wat = require('./authors');