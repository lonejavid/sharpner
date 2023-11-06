var items=document.getElementsByClassName('list-group-item');

for(var i=0;i<items.length;i++)
{
    items[i].style.cssText = 'font-weight: bold; color: red;';
}
items[2].style.backgroundColor='green';