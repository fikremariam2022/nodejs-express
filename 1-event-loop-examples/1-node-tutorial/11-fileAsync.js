const { readFile, writeFile } = require("fs");
readFile("./fileDemo/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile("./fileDemo/result.txt", "what'sup", { flag: "a" }, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("done");
});
