/*const Emmiter=require("events");
let event=new Emmiter();
event.on("click",(x,y)=>{
    let interr=setTimeout(() => {
    console.log("Sum is " + x+y);
        
    }, 3300);
})
event.emit("click",22,44);*/
let p1 = new Promise((resolve,reject)=>{
    console.log("Please wait while Loading...")
    setTimeout(() => {
        function sum(a){
            return function add(b){
                return a+b;
                 }
                }
        sum(33),(21)
    },3000);
    
})
// p1.then((value)=>{
//     console.log(value);
// })
// p1.catch((Error)=>{
//     console.log(Error)
// })