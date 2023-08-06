import fs from "fs";
import chalk from "chalk";

import validator  from "validator";
let b={
    name:"Rahul",
    Branch:"Telematics",
    Roll: 22,
}
console.log(chalk.bgYellowBright.italic.underline(b.Roll));
if(b.Roll<40){
    console.log(chalk.blue.underline("value is small"));
}

fs.unlinkSync("hello.html");
