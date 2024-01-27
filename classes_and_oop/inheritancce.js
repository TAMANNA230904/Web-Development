class User {
    constructor(username){
        this.username= username
    }
   logMe(){
        console.log(`USERNAME is ${this.username}`)
   }
}

class Teacher extends User{
   constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
   }

   addCourse(){
    console.log(`A new course was added by ${this.username}`)
   }
}

const one=new Teacher("t1","t1","t1")
one.addCourse()

const two=new User('user1')
two.logMe()

console.log(one instanceof Teacher)
console.log(one instanceof User)