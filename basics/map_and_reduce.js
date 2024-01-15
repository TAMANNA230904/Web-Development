const myNum=[1,2,3,4,5]
// const newNum=myNum.map((num)=>num+10)
// console.log(newNum)

/*--------chanining------------*/
const newNum=myNum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>30)
//console.log(newNum)


/*----------Reduce------------*/
const arr=[1,2,3]
//here acc=accumulator curr=current ,0 represents the initial value of acc after the first iteration acc=acc+curr
const newarr=arr.reduce(function (acc,curr){
    return acc+curr;
},0)
console.log(newarr)
/*---------Using arrow fxn--*/
const arrnew=arr.reduce((acc,curr)=>acc+curr ,0)
console.log(arrnew)