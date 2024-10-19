var read=require("readline-sync")

var num1=read.question("Enter two number's :")
var num2=read.question()

if (num1 < num2) {

    console.log("The Greater value is :" +num2)
    
}else{
    console.log("The Greater value is :" +num1)
}


