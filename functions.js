let user="keerthana";
function greet(u){
    console.log(`hello ${u}`);
    return u;
}
let username=greet(user);
console.log(username)

let add =()=>{
    let a=10,b=30;
    let result=b+a;
    console.log(result)
    return result;

}
let sum=add();
sum=sum+sum;
console.log(sum);
console.log("hello world!!!");