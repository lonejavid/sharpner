var items=document.getElementsByClassName('list-group-item');

for(var i=0;i<items.length;i++)
{
    items[i].style.cssText = 'font-weight: bold; color: red;';
}
items[2].style.backgroundColor='green';
var newItem=document.createElement('li');
newItem.textContent="new-item-added";
//newItem.classList.add('new-item-added');
var list=document.querySelector('.list-group');
list.append(newItem);

//code for getElementByTagName
var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='green';
}
