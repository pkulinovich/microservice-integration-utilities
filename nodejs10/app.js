const express = require('express')
const app = express()
const sls = require('serverless-http')

const errorHandler = require('./middlewares/errors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/xmltojson', require('./routes/xmltojson'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404)
});

// error handler
app.use(errorHandler);

// start server
//app.listen(process.env.PORT || 3000);

module.exports.server = sls(app)