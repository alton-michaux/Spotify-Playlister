// require dotenv to load environment variables
require('dotenv').config();

// require express to create a server
const express = require('express');
const app = express();

// load config file
const config = require("./config/config.json");

// specify environment
const env = process.env.NODE_ENV || 'development';

// specify port according to environment
const configration = config[env];
console.log(env);

// explicityly specify css and js files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
	res.status(200).sendFile(__dirname + "/index.html");
});

// listen to port
app.listen(configration.port, () => {
	console.log(`server running at port ${configration.port}`);
});
