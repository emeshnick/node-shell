process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  cmd = cmd.split(' ');

  if (cmd[0] === "pwd") {
    const pwd = require('./pwd.js');
    pwd();
  } else if (cmd[0] === "ls"){
    const ls = require("./ls.js");
    ls();
  } else if (cmd[0] === "cat") {
    const cat = require("./cat.js");
    cat(cmd[1]);
  } else if (cmd[0] === "curl"){
    const curl = require("./curl.js");
    curl(cmd[1]);
  }else {
    done("You typed: " + cmd);
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\npropt > ");
}

module.exports = done;
