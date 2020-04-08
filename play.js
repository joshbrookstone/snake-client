const { connect } = require('./client');

const handleUserInput = function(data) {
  console.log(data);
  // switch (data) {
  //   case ("\u0003"): 
  //     process.exit()
  //     break;
 
  if (data === "\u0003") {
    process.exit();
  }
};



const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


console.log('Connecting ...');
setUpInput();
connect();


// Create a function handleUserInput and register it as the "data" callback handler for stdin.

// We should register this event handler within the setupInput function, prior to returning the stdin object.

// handleUserInput should check for the ctrl + c input and terminate the game. This is something that we've done in previous exercises, so feel free to draw from that prior experience.

// Run the code to ensure that there are no errors and that we can terminate th