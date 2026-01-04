const obj = {
    id:"bc234",
    name:"zain",
    callName : ()=>{  
    //    console.log(`this is my id ${obj.id} \` \` and this is \` my name ${obj.name} ` )
    }
}      

obj.callName();

// inject variables inside the another backticks
function hello(){
    const a = 5;
    const b = 9
 console.log(`${a} , ${`${9}`}`)
}

hello();

const Obj = {
//    name:`${console.log(this)}`
}
// console.log(Obj.name)