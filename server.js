const express = require('express');
const app = express();
const path = require('path');
const router = require("./controllers/CharacterController.js");
require("dotenv").config();
const port = process.env.PORT || 8080; 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(router);
app.listen(port,()=>console.log(`Test app listening at http://localhost:${port}`));