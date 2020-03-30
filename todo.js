
// Adding a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (click) {
    if (click.target.tagName === 'LI') {
        click.target.classList.toggle('checked');
    }
},false);


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
    var txt = document.createTextNode("\u270E");
    var txt1 = document.createTextNode("\u292B");
    span.className = "edit";
    span1.className = "close";
    span.appendChild(txt);
    span1.appendChild(txt1);
    li.appendChild(span);
    li.appendChild(span1);

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
})

// Clearing todos
function removeAll() {
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
// editing todos
var editTodo = function () {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    var li = this.parentNode;

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


