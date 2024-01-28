// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)


const tea={
    name:'ginger tea',
    price:300,
    isAvailable:true,

    orderChai: function(){
        console.log("tea is not made")
    }
}
console.log(Object.getOwnPropertyDescriptor(tea,"name"));
Object.defineProperty(tea,'name',{
    writable: false,
    enumerable: false // for iteration
})

// console.log(Object.getOwnPropertyDescriptor(tea,"name"));
// tea.name="black-tea"
// console.log(tea.name)

for (let [key,value] of Object.entries(tea)) {
    console.log(`${key}:-${value}`);
}
