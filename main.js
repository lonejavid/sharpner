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

// var itemList=document.querySelector('#items');
// itemList.parentElement.style.backgroundColor='red';


//childNodes
 var itemList=document.querySelector('#items');
// console.log(itemList.children);

//itemList.children[1].style.backgroundColor='yellow'

//firstElementchild
//console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="changed to Apple ";

// //lastElementChild
// itemList.lastElementChild.textContent='lastElement Child accessed';
//next siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling)

//creating new elements
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
var newDivText=document.createTextNode("Element created");
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
