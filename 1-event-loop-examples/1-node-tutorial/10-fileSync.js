const { readFileSync, writeFileSync, appendFileSync } = require("fs");
//reading file
var first = readFileSync("./fileDemo/first.txt", "utf8");
console.log(first);
var second = readFileSync("./fileDemo/second.txt", "utf8");
console.log(second);
//writing file a flag 'a' option will tell to append rather than writeover
writeFileSync("./fileDemo/result.txt", `The result file ${first} : ${second}`, {
  flag: "a",
});
