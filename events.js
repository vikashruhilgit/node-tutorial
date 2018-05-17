// events and eventEmitter

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myevent', function () {
  console.log('my event fired');
});

setTimeout(function () {
  eventEmitter.emit('myevent');
}, 2000);
