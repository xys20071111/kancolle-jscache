"use strict"
const express = require('express');
const fs =require('fs');
const https = require('https');
const options = {
	    key:fs.readFileSync('server.key'),
	    cert:fs.readFileSync('server.crt')
}
const app = express();
app.use('/ajax/libs/pixi.js/4.8.1/pixi.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/pixijs/pixi.min.js'));
});
app.use('/ajax/libs/howler/2.0.10/howler.core.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/howler/howler.core.min.js'));
});
app.use('/ajax/libs/pace/1.0.2/pace.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/pace/pace.min.js'));
});
app.use('/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/twitter-bootstrap/bootstrap.min.js'));
});
app.use('/ajax/libs/jquery/1.11.3/jquery.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/jquery/jquery.min.js'));
});
app.use('/ajax/libs/jquery.pin/1.0.1/jquery.pin.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/jquery.pin/jquery.pin.min.js'));
});
app.use('/tweenjs-0.6.2.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/tweenjs/tweenjs-0.6.2.min.js'));
});
app.use('/axios/dist/axios.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/axios/axios.min.js'));
});
app.use('/',function(req,res){
		res.set('Content-Type','text/html');
		res.send('<html><head><title>It works!</title></head><body>恭喜，kancolle-jscache开始工作了，下一步请自行修改hosts</body></html>');});
https.createServer(options,app).listen(443)
