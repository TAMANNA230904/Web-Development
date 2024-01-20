//for of
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}

const message="Hello World!!"
for (const i of message) {
    console.log(`Each character is ${i}`);
    
}


//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set("Fr","France")

console.log(map)

for (const [key,value] of map) {
   console.log(key,':-',value) 
}




