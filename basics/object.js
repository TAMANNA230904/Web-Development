//singleton-->object.create

//object literals
const sym=Symbol("key")
const user={
    name: "Tamanna",
    age: 18,
    "full-name":"Tamanna Sheikh",//can be accessed only by using square bracket method
    city: "Gwalior",
    /*defining a symbol within object*/
    [sym]:"key101",
    email: "tanna@gmail.com"
}

console.log(user.email)
console.log(user["email"])
console.log(user["full-name"])

console.log(user[sym])//Accessing a symbol

//overwriting
user.email="tamanna@yahoo.com"
console.log(user.email)

//To prevent change u can freeze the object
Object.freeze(user)
user.email="tammy@yahoo.com"
console.log(user.email)


//Defining Fuction of object
user.fun=function(){
    console.log("Hello Everyone")
} 
// //Acessing a func
console.log(user.fun)//only reference of function
console.log(user.fun())// returning value of function


user.greet=function(){
    console.log(`Hello ${this.name} You live in ${this.city}`)
}

console.log(user.greet())

//Singleton object is created by using constructor
const singleUser=new Object()
singleUser.id="123abs"
singleUser.name="Sam"

console.log(singleUser)

const customer={
    email:"customer@gmail.com",
    fullname:{
        firstname:"Chris",
        lastname:"Evans"
    }
}
console.log(customer.fullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//assign combines two or more target objects with the source object
//const obj_new=Object.assign(obj1,obj2)/*Here obj2 is combined in obj1 which is modified*/
console.log(obj_new)
console.log(obj1)

const obj_new=Object.assign({},obj1,obj2)/*Here obj2 and obj1 are combined in {} empty source object*/
console.log(obj_new)
console.log(obj1)

const obj3={...obj1,...obj2}//spread operator
console.log(obj3)

console.log(Object.keys(user))//returns all keys in array
console.log(Object.values(user))
console.log(Object.entries(user))


const course={
    course_name:"Javascript",
    price:"999",
    educator:"SRK"
}
//Object Destructuring---course.course_name is too long to write again and again
/*two-ways*/
const {course_name}=course
console.log(course_name)

const {course_name:c}=course
console.log(c)

 /*JSON-*/
 /*
 {
    "name":"Tammy",
    "id":13,
    "email":"tammy01@yahoo.com"
 }

 ---------
 [
    {},
    {},
    {}
 ]
 */
