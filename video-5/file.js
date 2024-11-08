const { log } = require("console");
const fs = require("fs"); //File handling library

 //Sync...
// fs.writeFileSync("./test.txt", "Hey everyone this file i have created using terminal and node");
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);


//Async...
// fs.writeFile("./test.txt", "Hello World", (err)=>{});
// fs.readFile("./test.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.error("Error:", err);
//         return;
//     }
//     console.log(result);
// });

const result = fs.appendFileSync("./test.txt", "This is appended text"); //appended text
fs.cpSync("./test.txt", "./test2.txt"); //this copies file
console.log(result);
fs.unlinkSync("./test.txt"); //deletes file
console.log(fs.statSync("./test2.txt"));  //status of the file


