const logEvents = require('./logEvent')
const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

// initialize the obj
const myEmitter = new MyEmitter()

// add listener
myEmitter.on('log', (msg:string) => logEvents(msg))

setTimeout(() => {
  myEmitter.emit('log', 'Log event emitted!')
}, 2000)
