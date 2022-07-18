// require dotenv to load environment variables
import 'dotenv/config'

// require express to create a server
import * as express from 'express';

const app = express.default();

// load config file
import * as config from "./config/config.json" assert {type: 'json'};

// import path modules to convert __dirname to a path
import path from 'path';
import {fileURLToPath} from 'url';

// assign the path to the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// specify environment
const env = process.env.NODE_ENV || 'development';

// specify port according to environment
const configration = config.default[env];

console.log("server started...");

// explicityly specify css files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.sendFile(__dirname + "./index.html");
});

// listen to port
app.listen(configration.port, () => {
	console.log(`server running at port ${configration.port}`);
});
