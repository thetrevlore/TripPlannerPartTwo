const express = require('express');
const app = express();
const logger = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const db = require("../models").db;

// app.use(express.static(__dirname + '..' + '/public')); // What's the difference between this way and using path like next line???
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res, next) => {
//     res.send('Helloooo');
// });

//     -------WTF---------
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});
//     -------WTF---------

app.use(function(err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500);
    res.send("Something went wrong: " + err.message);
});

var port = 3000;
app.listen(port, function() {
    console.log("The server is listening closely on port", port);
    db
    .sync()
    .then(function() {
        console.log("Synchronated the database");
    })
    .catch(function(err) {
        console.error("Trouble right here in River City", err, err.stack);
    });
});