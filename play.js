const { connect } = require('./client');
const { setUpInput } = require("./input");

console.log('Connecting ...');

setUpInput(connect());

// Update play.js to send the connection object returned from connect() into our setupInput() function.