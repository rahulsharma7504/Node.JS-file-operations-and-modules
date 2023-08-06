const server=require("http");
const fs=require("fs");
let make=server.createServer((req,res)=>{
    // res.end("this is created server");
    
      
      
     
    if(req.url=="/"){
        res.end("I am frome home side")
    }else if(req.url=="/Service"){
        res.end("I am from service side")
    }else if(req.url=="/api"){
        let filedata=fs.readFileSync("help.json","utf-8")
        console.log(filedata);  
        res.end(JSON.stringify(filedata));
    }
    else{
        res.writeHead(404,{"content-tye":"file/json"});
        res.end("<h2>Data is not found</h2>")
    }

});
make.listen(3000,"127.0.0.1",()=>{
    console.log("Hey' i create this server")
})