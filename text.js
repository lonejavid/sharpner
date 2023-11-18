console.log("person1 :show ticket")
console.log("person2 :show ticket")


const promiseWifeToTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ticket'),3000 )
});

const getPopcorn=promiseWifeToTicket.then((t)=>{
    console.log("wife :i have the tickets... ")
    console.log("husband:we should go in... ")
    console.log("wife :No i am hungry")
    return new Promise((resolve,rejec)=>resolve(`${t} popcorn`));
});
const getButter=getPopcorn.then((t)=>{
    console.log("husband: i got the popcorn")
    console.log("husband :we should go in ")
    console.log("wife :no i  need butter on my popcorn");
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
})
const getColdDrink=getButter.then((t)=>{
    console.log(" husband : i got the butter..")
    console.log("husband we should go in ");
    console.log("wife :no i need the coldDrink")
    return new Promise((resolve,reject)=>resolve(`${t} coldDrink`));
})
getColdDrink.then((t)=>console.log(t));
console.log("person4:shows Ticket");
console.log("person5 :shows ticket");