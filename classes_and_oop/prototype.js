let myHero=["thor","ironman"]

let heroPower= {
    thor: "hammer",
    ironman: "jarvis",

    getSThorPower: function(){
        console.log(`Thor's power is ${this.thor}`);
    }
}
Object.prototype.tammy= function(){
    console.log(`Tammy is present in all objects`)
}


// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

Array.prototype.heytammy=function(){
    console.log('Tammy says hello!!');
}
//tammy is defined on object which its child will also get  
myHero.tammy();
heroPower.tammy();  
//but on assigning fxn to a lower member object will not get that property
myHero.heytammy()
//heroPower.heytammy()


/*----INHERITANCE-----*/
const user={
    username:'tiger shroff',
    email:'tiger@gamil.com'
}
const Teacher={
    give_lecture:true
}

const TeachingSupport={
    isAvailable:true
}

const TASupport={
    make_assignment:'JS Assignment',
    fullTime:true,
    //taking reference from another object
    __proto__: TeachingSupport   
}

Teacher.__proto__=user

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)//former gets the properties of latter


let anotherUsername='TamannaSheikh      '
String.prototype.truelength=function(){
    console.log(`Truelength is: ${this.trim().length}`)
}

anotherUsername.truelength()