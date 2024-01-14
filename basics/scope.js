{}//scope of the program or function like if-else
let n=500/*global scope*/

/*Block scope*/
if(true){
    let a=10
    const b=20
    var c=30
}

//console.log(a)//-->will not print cause its declared inside if
//console.log(b)//-->will not print cause its declared inside if
//console.log(c)//-->printed so better to avoid var

function one(){
    const username="Tamanna"
    function two(){
        const website="youtube"
        console.log(username)
    } 
    
    //two()
}
//one()

if(true){
    const username="tamanna"
    if(username=="tamanna"){
        const website="youtube"
        //console.log(username+" "+website);
    }
   
}

addone(3) //this is possible
function addone(num){
    return num+1;
}

addtwo(5) //this is not possible as function is declared as a constant and you cannot
//access constant before declaration
const addtwo=function(num){
    return num+2;
}


