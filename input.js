const { W, A, S, D, P, O, CONTROLC } = require("./constants");

let connection;
let interval;
let currCommand;

const runCommand = function(command) {
  if (currCommand !== command) {
    currCommand = command;
  } else {
    return;
  }

  clearInterval(interval);

  interval = setInterval(() => {
    connection.write(command);
  }, 100);
};

const handleUserInput = function(data) {
  
  if (data === CONTROLC) {
    process.exit();
  } else if (data === W) {
    runCommand("Move: up");
  } else if (data === A) {
    runCommand("Move: left");
  } else if (data === S) {
    runCommand("Move: down");
  } else if (data === D) {
    runCommand("Move: right");
  } else if (data === P) {
    connection.write("Say: yoyo");
  } else if (data === O) {
    connection.write("Say: lol :p");
  }
};

const setUpInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { handleUserInput, setUpInput };