// require dotenv to load environment variables
require('dotenv').config();

// require index.js to load javascript file
const index = require('./index.js');

// require express to create a server
const express = require('express');
const app = express();

// load config file
const config = require("./config/config.json");

// specify environment
const env = process.env.NODE_ENV || 'development';

// specify port according to environment
const configration = config[env];

console.log(index());

// explicityly specify css files
app.use(express.static(__dirname));

app.get("/", (res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.sendFile(__dirname + "./index.html");
	res.send(index)
});

// listen to port
app.listen(configration.port, () => {
	console.log(`server running at port ${configration.port}`);
});
