const server=require("http");
server.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write(`<h3><mark>helo programming</mark></h3>
    <input type="text"/><br>
   <input type="radio" name="gender"/> Male<br>
    <input type="radio" name="gender" id="tag"/> Female<br>
    <input type="radio" name="gender"/> Other<br>
    `);
    
    res.end();
}).listen(4000,(data)=>{
    console.log(data)
})
// document.getElementById("t/ag").style.backgroundColor="red"