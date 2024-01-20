const arr=["java","js","python","ruby","c++"]

const values =arr.forEach((item)=>{
    return item})

//console.log(values) //forEach() does not return any value

const myNum=[1,2,3,4,5,6,7,8,9,10]
 const newNum=myNum.filter( (val)=>val>5)
console.log(newNum)


/*  Using return keyword    */
// const newNum=myNum.filter( (val)=>{
//     return val>5;
// })
// console.log(newNum)

