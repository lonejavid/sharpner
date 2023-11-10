var user=document.getElementById('name');
var emailId=document.getElementById('email');
var myfoem=document.getElementById('myForm');
var num=document.getElementById('number');
//event listener to store user details in local storage
myfoem.addEventListener('submit',onsubmit);
//storing the user details in localstorage as an object
function onsubmit(e)
{
    e.preventDefault();
    var UserName=user.value
    var EmailId=emailId.value
    var number=num.value
    const obj={
        UserName,
        EmailId,
        number
    }
    localStorage.setItem('obj.Eamil',JSON.stringify(obj));
    showUserDetails(obj);
}
function showUserDetails(obj){
    var parentEle=document.getElementById('item-list');
    var childEle=document.createElement('li');
    childEle.textContent=obj.UserName+ ' '+obj.EmailId+' ' +obj.number;
    var delteBtn=document.createElement('input')
    delteBtn.value="Delete"
    delteBtn.type="button"



    delteBtn.onclick=()=>{
        localStorage.removeItem('obj.Email');
        parentEle.removeChild(childEle)
    }
    var editBtn=document.createElement('input')
    editBtn.value="edit"
    editBtn.type="button"




    editBtn.onclick=()=>{
  localStorage.removeItem(obj.Email);
  parentEle.removeChild(childEle);
  //document.getElementById('user').value=obj.UserName
 //Populate the input fields with the user details
  document.getElementById('name').value = obj.UserName;
  document.getElementById('email').value = obj.EmailId;
  document.getElementById('number').value = obj.number;

//   // Remove the user from local storage
//   localStorage.removeItem('obj.Email');

//   // Remove the current list item from the DOM
//   const parentEle = document.getElementById('item-list');
//   const childEle = parentEle.querySelector(`li:contains(${obj.UserName})`);
//   parentEle.removeChild(childEle);

}




    childEle.appendChild(delteBtn)
    childEle.appendChild(editBtn)
    parentEle.append(childEle);
}
