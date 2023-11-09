var user=document.getElementById('name');
var emailId=document.getElementById('email');
var myfoem=document.getElementById('myForm');
//event listener to store user details in local storage
myfoem.addEventListener('submit',onsubmit);
//storing the user details in localstorage as an object
function onsubmit(e)
{
    e.preventDefault();
    var userName=user.value
   var email=emailId.value
   //creating the object
  var myobj={
    user_name :userName,
    email_id : email
  };
  //converting the user data into readable form
   let obj_serialized=JSON.stringify(myobj);
   //console.log(obj_serialized);
 localStorage.setItem('obj',obj_serialized);
 //again converting data into an object
 let obj_deserialzed=JSON.parse(localStorage.getItem("obj"));
}
