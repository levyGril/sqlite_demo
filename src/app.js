/* Load modules */
const express = require("express");
const app = express();

//const CORSModule = require("@altrdpdgm/altrd-cors")({options}); //<= set custom response headers in a configuration object on a `headers` property.
//CORSModule.setOriginList(["http://localhost:8080", "http://116.62.145.100", "http://0.0.0.0"]);

//Configure the Express application to use the CORSModule on all incoming requests.
//app.use(CORSModule.handleCORS);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://0.0.0.0');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain)

const bodyParser = require("body-parser");

/* Database configuration */
const database = require('./config/dbconfig');

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || 8082;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = '/api';
app.use(REST_API_ROOT, require('./routes/router'));