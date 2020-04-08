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

module.exports = { handleUserInput, setUpInput };