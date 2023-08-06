const fs=require("fs");
const { writeFile } = require("fs/promises");
const { json } = require("stream/consumers");
var obj={
    Name:"Rahul Sharma",
    city:"vrindravan",
    state:"uttar-pradesh",
    country:"India",
    religion:"hindu",
    Dharam:"Sanatan",
}
let cjson=JSON.stringify(obj);
// console.log(cjson);
// let create=writeFile("eritw.json",cjson,(error)=>{
//     console.log("data fached")
// });
// console.log(create);
// let read=fs.readFile("eritw.json","utf-8",(error,data)=>{
//     console.log(data);
// })
let rjson=JSON.parse(cjson);
console.log(rjson)
console.log(cjson);