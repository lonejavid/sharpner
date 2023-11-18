console.log("person1:shows ticket")
console.log("person:2shows ticket")

const Premovie=async ()=>{
const promiseWifeToTicket=new Promise((resolve,reject)=>{
setTimeout(()=>resolve('ticket',3000))
})
const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`))
const getcandy= new Promise((resolve,reject)=>resolve(`candy`))
const getcoke= new Promise((resolve,reject)=>resolve(`coke`));
let ticket=await promiseWifeToTicket;


let [popcorn,candy,coke]= await Promise.all([getPopcorn,getcandy,getcoke]);
console.log(`${popcorn},${candy},${coke}`)



return ticket
}


Premovie().then((m)=>console.log(`person3: shows ${m}`));
console.log("person4:shows ticket")
console.log("person5:shows ticket")
