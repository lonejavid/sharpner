/*var items=document.getElementsByClassName('list-group-item');

for(var i=0;i<items.length;i++)
{
    items[i].style.cssText = 'font-weight: bold; color: red;';
}
items[2].style.backgroundColor='green';
var newItem=document.createElement('li');
newItem.textContent="new-item-added";
//newItem.classList.add('new-item-added');
/*var list=document.querySelector('.list-group');
list.append(newItem);

//code for getElementByTagName
var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='green';
}
*/


//user of querySelecotr and querySelectorAll 
//var items=document.querySelectorAll('.list-group-item');
//items[1].style.background='green';
// making the 3rd element invisible 
//items[2].style.display='none';

//creating nodes and modifying DOM
//traversing the DOM
/* var itemList=document.querySelector('#items');
itemList.parentNode.parentNode.style.backgroundColor='green';
*/
//parentElement 

var itemList=document.querySelector('#items');
itemList.parentElement.style.backgroundColor='red';