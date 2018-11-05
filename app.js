"use strict"
const express = require('express');
const fs =require('fs');
const https = require('https');
const options = {
	    key:fs.readFileSync('server.key'),
	    cert:fs.readFileSync('server.crt')
}
const app = express();
app.use('/',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/pixijs/pixi.min.js'));
});
https.createServer(options,app).listen(8081)
