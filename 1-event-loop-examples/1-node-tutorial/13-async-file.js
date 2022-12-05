const { readFile } = require("fs").promises;
//const util = require("util");
//const readFilePromise = util.promisify(readFile);
// const getText = (path) => {
//   return new Promise((resolve, rej) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         return rej(err);
//       }
//       return resolve(result);
//     });
//   });
// };

// const getTexts = (path) =>
//   getText(path)
//     .then((x) => console.log(x))
//     .catch((err) => console.log(err));

const readAndWriteFile = async () => {
  try {
    const text1 = await readFile("./fileDemo/first.txt", "utf8");
    const text2 = await readFile("./fileDemo/second.txt", "utf8");
    console.log(`text 1 is ${text1} and text 2 is ${text2}`);
  } catch (err) {
    console.log(err);
  }
};
readAndWriteFile();
