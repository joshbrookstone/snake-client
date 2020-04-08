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
  
  if (data === "\u0003") {
    process.exit();
  } else if (data === "\u0077") {
    runCommand("Move: up");
  } else if (data === "\u0061") {
    runCommand("Move: left");
  } else if (data === "\u0073") {
    runCommand("Move: down");
  } else if (data === "\u0064") {
    runCommand("Move: right");
  } else if (data === "\u0070") {
    connection.write("Say: yoyo");
  } else if (data === "\u006F") {
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