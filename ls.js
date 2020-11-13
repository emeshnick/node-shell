const fs = require("fs");
const done = require("./bash.js");

function ls(){
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join('\n'));
    }
  })
}

module.exports = ls;
