let create=require("fs");
// create.writeFile("node.txt","hello i create this new file",(error)=>{
    // console.log("my file has been created");
    // console.log(error);
// }); 
// create.readFile("node.txt","utf8",(error,data)=>{
    // console.log(data);
// })
// create.appendFile("node.txt","Hey i am appended content",(error)=>{
    // console.log("my data is fulfield");
// });
// create.rename("node.txt","css.java",(error)=>{
    // console.log("Catch the error");
// })
create.unlink("css.java",(error)=>{
    console.log("file is remove");
});
