const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("accountChange", (arg1, arg2) => {
  console.log(`Your account is changed to ${arg1}`);
});

//emit event
emitter.emit("accountChange", arg1, arg2);
