//ES6

class User {
    constructor(username,email,password){
        this.username= username
        this.email= email
        this.password= password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeuser(){
        return `${this.username.toUpperCase()}`
    }
}

const one=new User("user1","user@gmail.com",'123')
console.log(one.encryptPassword())
console.log(one.changeuser())

