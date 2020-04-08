const net = require('net');
const { IP, PORT, ENCODER } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding(ENCODER);

  conn.on('connect', () => {
    console.log("Successfully connected to a gamer server");
    conn.write("Name: bob");
  });


  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {connect};