var myform=document.getElementById('addForm');
var itemList=document.getElementById('items');
myform.addEventListener('submit',addItem);
itemList.addEventListener('click',deleteItem);
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    // Create a new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // Create a delete button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));

    // Insert a space between the delete button and the edit button
    li.appendChild(document.createTextNode(' '));

    // Create an edit button element
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit'; // You can use 'btn-primary' or any suitable Bootstrap class
    editBtn.appendChild(document.createTextNode('edit'));

    li.appendChild(deleteBtn);
    li.appendChild(editBtn); // Append the edit button to the list item
    itemList.appendChild(li); // Append the list item to the list
}

function deleteItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure to delete the Item ?'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter event handler method
function filterItems(e)
{
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text)!=-1)
{
    item.style.display='block'
}
else{
    item.style.display='none'
}









    
    })
}