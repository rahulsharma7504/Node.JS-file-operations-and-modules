const server= require("http");
const fs=require("fs");
// let cry="hello world"

 let make=server.createServer((req,res)=>{
    // res.end(`${cry} hello ${reaq.url}`);
    if(req.url=="/"){
        res.end("now you are in home page side");
    }else if(req.url=="/contact"){
        res.end("This is contact page");
    }
    else if(req.url=="/home"){
        res.end("now you are in Home page side");
    }
    else if(req.url=="/about"){
        res.end("now you are in About page side");
    }
    else if(req.url=="/api"){
       let filedata= fs.readFileSync("help.json","utf-8");
            // let cjson=JSON.parse(filedata);
            console.log('hii');
            console.log(filedata);
            res.end(JSON.stringify(filedata));
    }else{
        res.writeHead(404,{"content-type":"text/json"});
        res.end("<h2>403 Forbidden not Found</h2>");
    }
});
make.listen(8000,"127.0.0.1",()=>{
    console.log("Finally i created this local server");
})
//JSON file system
// let obj={
//     nam:"Rahul sharma",
//     age:22,
//     city:"Delhi",
//     countery:"india"
// }
// let cjson=JSON.stringify(obj);
// console.log(cjson)
// let rjson=JSON.parse(cjson);
// console.log(rjson)
// let lore=fs.readFile("help.json","utf-8",(erer,data)=>{
// let h=JSON.parse(data);
// console.log(h)
// });
