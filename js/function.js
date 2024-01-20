function myname(){
    console.log("TAMANNA");
}
//myname()

function add(num1,num2){
   let num3=num1+num2;
   return num3;
}

const result=add(3,5)
console.log("Result of addition of 3 and 5 =",result)
 function userlogin(username){
    if(username===undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in.`
 }

 console.log(userlogin())


//unknown no. of arguements passed through ...rest operator
function large(...num1){
    return num1
}
console.log(large(100,20,200,350))

const user={
    name:"Tamanna",
    price:"1000"
}
function handleObject(obj){
    console.log(`Usename is ${obj.name} and price in cart =${obj.price}`)
}

handleObject(user)


const arr=[1,2,3,4]
function returnsecondval(array){
    return array[1];
}

console.log(returnsecondval(arr))






