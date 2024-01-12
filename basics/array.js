const arr=[0,1,2,3,4]
const arr2=[0,"hello",33,false]
//console.log(typeof arr)
// arr.push(6)
// console.log(arr)
// arr.pop()
// arr.unshift(8)//add 8 to the starting of array shift to remove

//console.log(arr.indexOf(9))
const arr3=arr.join()
//console.log(arr3)//converts array into string elements separated by comma


//slice splice
//console.log("A",arr)
//slice does not include last range and does not change the original array
const arr4=arr.slice(1,3)
// console.log("slice",arr4)
// console.log("B",arr)

//splice the last range is also included and also changes the original array
const arr5=arr.splice(1,3)
// console.log("splice",arr5)
// console.log("C",arr)

//concat
const array1=[1,2,3,4,5]
const array2=[12,13,14,15,16]
const array3=array1.concat(array2)
console.log(array3)

//spread Operator
const array4=[...array1,...array2,...arr]
console.log(array4)

//arr.flat(depth) -->if there are multiple array within an array-->[1,2[3,4,[5]],6,7] it spreads every element
