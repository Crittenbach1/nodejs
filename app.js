// const path = require('path');
//
// var pathObj = path.parse(__filename);
//
// console.log(pathObj);

// **********************************

// const os = require('os');
//
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
// //console.log('Total memory: ' + totalMemory);
//
// //Template string
// //ES6 / ES2015 : ECMAScript 6
//
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// **********************************

// const fs = require('fs');
//
// const files = fs.readdirSync('./');
// console.log(files);
//
// fs.readdir('$', './', function(err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// });

// **********************************

const EventEmitter = require('events'); // CLASS
const emitter = new EventEmitter(); // OBJECT

//Register a listener
emitter.on('messageLogged', (arg) => {
   console.log('Listener called', arg);
})

// Raise an Event
emitter.emit('messageLogged', { id: 1, url: 'http://' });


// Raise: logging (data: message)

emitter.on('logging', (arg) => {
   console.log('Listener called', arg);
})

emitter.emit('logging', {data: 'message'});
