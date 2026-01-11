const express = require('express'); 
const openAiroute = express.Router(); 
const openAicontroller = require('../controller/openAi.controller.js'); 

openAiroute.get('/dj', openAicontroller); 

module.exports = openAiroute; 