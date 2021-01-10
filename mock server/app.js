const http = require('http')
const fs = require('fs')
const port = 3000



const server = http.createServer(function(req,res){
	res.writeHead(200, { 
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin' : '*',
    	'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' })
	const obj = [
			{
				'SSID':'san',
				'RSSI': `${Math.floor((Math.random()*100))}`
			},
			{
				'SSID':'deep',
				'RSSI':`${Math.floor((Math.random()*100))}`
			},
			{
				'SSID':'anon',
				'RSSI':`${Math.floor((Math.random()*100))}`
			},
			{
				'SSID':'dough',
				'RSSI':`${Math.floor((Math.random()*100))}`
			},
			{
				'SSID':'jim',
				'RSSI':`${Math.floor((Math.random()*100))}`
			}
		];

		if (req.method === 'POST'){
			let body = '';
			req.on('data', chunk => {
				body += chunk.toString(); // convert Buffer to string
			});
			req.on('end', () => {
				res.end(body);
			});
		}
		else{
			res.end(JSON.stringify(obj));
		}

	
});

server.listen(port, function(error){
	if (error){
		console.log('Something is wrong ',error)
	} else {
		console.log('Server is up '+port)
	}
})