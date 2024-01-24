const promiseOne=new Promise(function(resolve,reject){
    //Do an async task-DBcalls,cryptography,network related,setimeoutetc
    setTimeout(() => {
       console.log('Async task is complete') 
       resolve()
    },1000 );
})
//then is related to resolve
promiseOne.then(function(){
    console.log('Promise consumed');
})


//without making a const
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
        
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved');
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:'tammy',email:'tammy@gmail.com'})
    },1000)
})
promise3.then(function(user){
console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error =false;
        if(!error){
            resolve({username:'tammy',password:'tammy'})
        }
        //rejection
        else{
            reject('ERROR!!')
        }
    }, 1000);
})
promise4.then(function(user){
console.log(user);
return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function (error) {
   console.log(error) 
}).finally(function(){
    console.log('Finally the promise is either resolved or rejected')
})


const promise5=new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error =true;
        if(!error){
            resolve({username:'javascript',password:'1234'})
        }
        //rejection
        else{
            reject('JS went wrong')
        }
    }, 1000);
    
})
async function consume_promise5(){
   try{
    const response=await promise5
    console.log(response);
   }
   catch{
    console.log('error');
   }
}
consume_promise5()

