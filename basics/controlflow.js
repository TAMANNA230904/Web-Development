//if
const login=true
//=== for strict datatype comparison 
if(2==="2"){
//console.log("executed")
}
const temperature=45
if(temperature>50){
    console.log("temperature is greater than 50")
}
else{
    console.log("temperature is less than 50")
}

let balance=900
if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750");
}
else{
    console.log("less than 1000");
}
let month=4
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("March")
        break;
    case 11:
        console.log("October")
        break;
    default:
        console.log("December")
        break;
}

//nullish coalescing operator (??):null undefined
let val1;
//val1=null??10
//val1=undefined ?? 15
val1=undefined ?? null // 2nd one will execute
console.log(val1)

//Ternary operator--> condition ? true : false

