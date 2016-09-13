var Hapi = require('hapi');
var requireDir = require('require-dir');
var config = require('./config');

const server = new Hapi.Server();

server.connection({
  host: config.host,
  port: config.port
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

let routes = requireDir('./controllers');
for(let route in routes) {
  if (routes[route].length > 0) {
    server.route(routes[route]);
  }
}

module.exports = server;
