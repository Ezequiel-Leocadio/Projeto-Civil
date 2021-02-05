import 'dotenv/config';

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')));

app.use(require('./routes'));

const port = 3334;
server.listen(port);
const logger = require('./controllers/LoggerController');

logger.info(`Running server on from port:::::::${port}`);
