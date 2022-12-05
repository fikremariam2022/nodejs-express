const os = require("os");
//current user
console.log(os.userInfo());
//method returns the system Uptime in seconds
console.log(os.uptime());

//current operating system
currentOs = {
  name: os.type(),
  release: os.release(),
  freeMem: os.freemem(),
  totalMem: os.totalmem(),
};
console.log(currentOs);
