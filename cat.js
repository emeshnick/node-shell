const fs = require("fs");
const done = require("./bash.js");

function cat(filename){
  fs.readFile(`./${filename}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data);
    }
  })
}

module.exports = cat;
