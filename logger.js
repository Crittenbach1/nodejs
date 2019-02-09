(function (exports, require, module, __filename, __dirname) {

var url = "http://mylogger.io/log";

function log(message) {
  // send http request
  console.log(message);
}

module.exports.log = log;

})
