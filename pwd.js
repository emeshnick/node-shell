const done = require("./bash.js");

function pwd() {
  done(process.cwd().toString());
}

module.exports = pwd;
