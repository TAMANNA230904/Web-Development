class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`${this.username} is logged in`)
    }
    static createID(){
        return `123`
    }
}
class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email

    }
}
const tamanna=new User('tamanna')
 //as declared static produces error
console.log(tamanna.createID())


const iphone=new Teacher('swatis iphone','iphone.com')
iphone.logMe()
console.log(iphone.createID()) //as declared static produces error
