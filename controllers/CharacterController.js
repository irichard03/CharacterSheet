const express = require("express");
const path = require('path');
const controller = express.Router();

controller.get("*", function (request,response) {
    //ToDo Serve Index.js
    //response.sendFile(path.join(__dirname + '../public/index.html'));
    response.render( __dirname + 'index.html');
});

controller.get("Character", function (request,response) {
    //ToDo Serve Index.js
    //response.sendFile(path.join(__dirname + '../public/index.html'));
    response.render( __dirname + 'Character.html');
});

module.exports = controller;