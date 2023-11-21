document.getElementById('form-data').addEventListener('submit',onsubmit);

let Uname=document.getElementById('name')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
let user_list=document.getElementById('item-list');
let user_list1=document.getElementById('item-list1');

let fetch=document.getElementById('fetch');
function onsubmit(e){
    
    e.preventDefault();

    let name=Uname.value
    let email_id=email.value
    let number=phone.value
    const data={
        name,
        email_id,
        number
    }
    axios.post("https://crudcrud.com/api/d291f3bd0a0343c087dfff335c1f94ee/patients",data)
    .then((response)=>console.log(response)).
    catch((error)=>console.log(error));
    let result=name+'  '+email_id+'  '+number;
    

    let li=document.createElement('li');
    li.innerHTML=result;
    user_list1.append(li);
}
fetch.addEventListener('click', onclick);
function onclick(e){
    axios.get("https://crudcrud.com/api/d291f3bd0a0343c087dfff335c1f94ee/patients")
   .then((response)=>{
    
    for(let i=0;i<response.data.length;i++)
    {
        let student=response.data[i]
        let res1=`${student.name} - ${student.email_id} - ${student.number}`;
    let li=document.createElement('li');
    li.innerHTML=res1;
    user_list.append(li);
        
    }
   })
}
          



