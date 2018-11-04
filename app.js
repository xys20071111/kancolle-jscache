"use strict"
const express = require('express');
const fs =require('fs');
const httpsServer = require('httpsServer');
const options = {
	    key:fs.readFileSync('server.key'),
	    cert:fs.readFileSync('server.crt')
}
const app = express();
app.use('',function(req,res){});
