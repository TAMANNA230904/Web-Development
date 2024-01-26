// let myName='Tamanna   '
// myName.prototype.truelength=function(){

// }
// console.log(myName.truelength);

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

myHero.tammy();



