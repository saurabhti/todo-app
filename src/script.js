let todoInput = document.getElementById("todo-input");
let listContainer = document.getElementById("list-container")

function addNewTodo(){
    if(todoInput.value === ''){
        alert('You have to write something first!!!');
    }

    else{
        let listItem = document.createElement("label");
        listItem.innerText = todoInput.value;
        listContainer.appendChild(listItem);
        let crossIcon = document.createElement("span")
        crossIcon.innerHTML = "&#xd7;";
        listItem.appendChild(crossIcon);
    }
    todoInput.value = "";
    saveTodoList();
}

listContainer.addEventListener("click", function(e){
    
    if(e.target.tagName === "LABEL"){
        e.target.classList.toggle("task-done");
        saveTodoList();
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTodoList();
    }
});

function saveTodoList(){
    localStorage.setItem("todo", listContainer.innerHTML);
}

function displayTodo(){
    listContainer.innerHTML = localStorage.getItem("todo");
}

displayTodo()

//  create a object that manages binary tree and allows me to search within it and tells if it has the element or not // inserting action, has action, remove action
// extend to allow printing in ascending order
// extend to allow printing in descending order
// insert 15, insert 12, insert 24, insert 13, insert 11, inesrt 19, insert 22
// check has 19 -> true, check has 7 -> false,
// remove 22 -> insert 7
// check 22 -> false, check 7 true
// print ascending -> 7 11 12 13 15 19 
// descending -> 19 15 13 12 11 7
// linked list () | single, circular, doubly, 
// 1 -> 2 -> 3
// 1 -> 2 -> 3 -> back to 1
// 1 <-> 2 <-> 3 <-> 1
// 1 <-> 2 <-> 3 
//  __________>
// references