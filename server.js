import http from 'http';
import config from './config/index.js';
import api from './api/api.js';
import database from './config/database.js';

const port = config.server.port;
const server = http.createServer(api);

server.on('listening', () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('Ha ocurro un erroe en el server', err);
});

//Ejectuar servidor en x puerto
server.listen(port);
//Haga la conexión a DB
database();
