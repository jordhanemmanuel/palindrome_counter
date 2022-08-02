"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 80; //for Heroku (may not use, but using here for reference)
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(port, function (err) {
    if (err)
        console.log("Erro encontrado: " + err);
    console.log("App executando em: http://localhost:".concat(port));
});
