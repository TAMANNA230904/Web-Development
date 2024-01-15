const arr=["java","js","python","ruby","c++"]

//foreach loop is a property of array
//arr.forEach( function (item){console.log(item) });

//Arrow-function
//arr.forEach( (val)=>{console.log(val)})


//using a function parameter
// function print(item){
//     console.log(item)
// }
// arr.forEach(print)

arr.forEach( (item,index,arr)=>{console.log(item,index,arr)})
