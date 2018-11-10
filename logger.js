const log = {};
log.i =function(info){
	console.log('[' + new Date().toLocaleString() +']' + '[info] '+info);
}
log.e = function(error){
	console.log('[' + new Date().toLocaleString() + ']' + '[error]' + error);
}
module.exports= log;
