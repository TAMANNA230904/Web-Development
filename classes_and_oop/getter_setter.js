class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    //Getters and Setters both work simultaneously
    get password(){
        return `${this._password.toUpperCase()}`
    }

    set password(value){
        this._password=value.toUpperCase();
    }
}

const user1=new User('lucky23','abc')
console.log(user1.password)
