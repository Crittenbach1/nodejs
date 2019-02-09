  const EventEmitter = require('events'); // CLASS

    var url = "http://mylogger.io/log";

    class Logger extends EventEmitter {
        log(message) {
          // send http request
          console.log(message);

          // Raise an Event
          this.emit('messageLogged', { id: 1, url: 'http://' });
        }
    }


    module.exports = Logger;
