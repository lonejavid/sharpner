var user=document.getElementById('name');
var emailId=document.getElementById('email');
var myfoem=document.getElementById('myForm');
//event listener to store user details in local storage
myfoem.addEventListener('submit',onsubmit);
function onsubmit(e)
{
    e.preventDefault();
    var userName=user.value
   var email=emailId.value
   localStorage.setItem('user-name',userName);
   localStorage.setItem('Email-id',email);
}
