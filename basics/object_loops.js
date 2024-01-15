//for in Loop for object iteration
const language={
    js:"javascript",
    cpp:"C++",
    py:"python",
    rb:"ruby"
}
for (const key in language) {
   console.log(key,':-',language[key])
}

const arr=["js","cpp","python","java"]
for (const key in arr) {
    console.log(`index of ${arr[key]} is ${key}`)
}

//Map is not iterable