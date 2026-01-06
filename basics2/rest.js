// concept of rest operator 
const alpha = function(a,b,c,...argus){
const splitarr = argus.reduce((sum , v)=> sum + v ,0);
console.log(a+b+c+splitarr);
}

alpha(34,232,3,23,2,23,32)
