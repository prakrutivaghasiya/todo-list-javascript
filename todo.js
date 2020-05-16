// Adding a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (click) {
    if (click.target.tagName === 'LI') {
        click.target.classList.toggle('checked');
    }
},false);

var ulList = document.getElementsByTagName('ul')[0].innerHTML;
var firstTodo = document.getElementById('first-todo');

// Adding new todos to the list
function newToDo(){

    // Creating new li for inputted value
    var li = document.createElement("li");
    var label = document.createElement("label");//label
    var inputValue = document.getElementById("myInput").value;
    label.innerText = inputValue;
    //input (text)
    var editInput = document.createElement("input");//text
    editInput.type = "text";

    li.appendChild(label);
    li.appendChild(editInput);
    // Checking for empty input field
    if (inputValue === '') {
        alert("Empty Todo! ");
    } else {
        document.getElementById("myUl").appendChild(li);
    }

    // Clearing the input field
    document.getElementById("myInput").value='';

    // Creating close btn and edit btn and appending it to the newly formed list
    var span = document.createElement("SPAN");
    var span1 = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    var txt = document.createTextNode("\u270E");
    var txt1 = document.createTextNode("\u292B");
    span.id = 'functionality';
    span1.className = "edit";
    span2.className = "close";
    span1.appendChild(txt);
    span2.appendChild(txt1);
    span.appendChild(span1);
    span.appendChild(span2);
    li.appendChild(span);

    // On clicking close btn - delete todo
    var close = document.getElementsByClassName("close");
    for(var i=0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var edititem = document.getElementsByClassName("edit");
    for (var i = 0; i < edititem.length; i++) {
        edititem[i].onclick = editTodo;
    }
}

// Adding new todo on keypress - enter key
var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        newToDo();
    }
    firstTodo.style.display = 'none';
})


// Clearing todos
function removeAll() {
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
    firstTodo.style.display = 'block';
}
// editing todos
var editTodo = function () {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    var li = this.parentElement.parentElement;

    var editInput = li.querySelector('input[type=text]');
    var label = li.querySelector("label");
    var containsClass = li.classList.contains("editMode");
    //If class of the parent is .editmode
    if (containsClass) {

        //switch to .editmode
        //label becomes the inputs value.
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    //toggle .editmode on the parent.
    li.classList.toggle("editMode");
}


var itemList = document.getElementsByTagName('ul')[0];

var search = document.getElementById('search');
search.addEventListener('keyup', searchItems);

// search items
function searchItems(){
    var text = search.value.toLowerCase();
    var items = itemList.querySelectorAll('label');
    Array.from(items).forEach(function(item){
        var itemName =  item.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.parentElement.style.display = 'flex';
        }else{
            item.parentElement.style.display = 'none';
        }
    });
}
