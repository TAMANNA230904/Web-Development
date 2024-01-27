function Set_username(username){
    //complex DB calls
    this.username=username;
}

function createUser(username,email,password){
   Set_username.call(this, username)
    this.email= email
    this.password= password
}

const one=new createUser("user1","user1@gmail.com","user123")
console.log(one)
