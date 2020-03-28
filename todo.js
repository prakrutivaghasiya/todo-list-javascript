// Creating a "close" and "edit" button and appending it to each list item
var myNodelist = document.getElementsByTagName("LI");
var j;
for (j = 0; j < myNodelist.length; j++) {
    var span = document.createElement("SPAN");
    var span1 = document.createElement("SPAN");
    var txt  = document.createTextNode("\u270E");
    var txt1 = document.createTextNode("\u292B");
    span.className = "edit";
    span1.className = "close";
    span.appendChild(txt);
    span1.appendChild(txt1);
    myNodelist[j].appendChild(span);
    myNodelist[j].appendChild(span1);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
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
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

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
    for(i=0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
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

