const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to a gamer server");
    conn.write("Name: bob");
  });


  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

// is this shorthand notation?
module.exports = {connect};