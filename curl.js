const request = require("request");
const done = require("./bash.js");

function curl(site){
  request(site, function (error, response, body) {
    if (error) {
      throw error;
    } else {
      done(body);
    }
  });
}

module.exports = curl;

