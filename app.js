"use strict"
const express = require('express');
const fs =require('fs');
const https = require('https');
const log = require('./logger');
const url = require('url');
const options = {
	    key:fs.readFileSync('server.key'),
	    cert:fs.readFileSync('server.crt')
}
const app = express();
app.get('/ajax/libs/:name/:version/:filename',function(res,req){
	let jsFile = './js/'+res.params.name+'/'+res.params.version+'/'+res.params.filename;
	log.i(jsFile);
	try{
		req.set('application','application/javascript');
		req.send(fs.readFileSync(jsFile));
	}catch(e){console.log(e);}
});
app.use('/tweenjs-0.6.2.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/tweenjs/tweenjs-0.6.2.min.js'));
});
app.use('/axios/dist/axios.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/axios/axios.min.js'));
});
app.use('/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js',function(req,res){
	res.set('Content-Type','application/json');
	res.send(fs.readFileSync('./js/twitter-bootstrap/bootstrap.min.js'));
});
app.use('/',function(req,res){
		res.set('Content-Type','text/html');
		res.send('<html><head><title>It works!</title></head><body>恭喜，kancolle-jscache开始工作了，下一步请自行修改hosts</body></html>');});
const server = https.createServer(options,app).listen(443);
