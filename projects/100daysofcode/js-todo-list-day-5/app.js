const addBttn = document.querySelector(".todo__button");
const todoUl = document.querySelector(".todo__list");
const todoItemContainer = document.querySelector(".todo__item-container");
const todoItem = document.querySelector(".todo__item");
const input = document.getElementById("input");
const tabBar = document.querySelector(".todo__filter-list");

const date = new Date();
document.getElementById("date").innerText = date.getUTCDate()+'/'+date.getUTCMonth()+'/'+date.getUTCFullYear();

addBttn.addEventListener("click", addTodoList);
input.addEventListener("keyup", handleEnterEvent);
todoUl.addEventListener("click", deleteOrCheckTodoItem);
tabBar.addEventListener("click", changeTabbar);
// delBtn.addEventListener("click", deleteTodo);

// function editTodoItem(e){
//     console.log(e.target);
// }

function addTodoList(){
    let inputVal = input.value;
    //create li item
    if(inputVal !== ""){

        //create div container
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo__item-container");

        //create dynamic list
        let li = document.createElement("li");
        li.classList.add("todo__item");
        li.innerText = inputVal;
        todoDiv.appendChild(li);

        let editEl = document.createElement("div");
        editEl.classList.add("todo__edit");
        editEl.innerText = "E";
        todoDiv.appendChild(editEl);

        //create dynamic button on each child  
        let delBtn = document.createElement("button");
        delBtn.classList.add("todo__delete-btn");
        delBtn.innerText = "Delete";
        todoDiv.appendChild(delBtn);

        todoUl.appendChild(todoDiv);

        clearInput();
    }
}

function handleEnterEvent(e){
    if(e.keyCode === 13 || e.keyCode === "Enter"){
        addTodoList();
    }
}

function clearInput(){
    input.value = "";
}

function deleteOrCheckTodoItem(e){
    let todoItem = e.target;
    console.log();

    if(todoItem.classList[0] === "todo__item"){
        toggleTodoCompleted(todoItem);
    }

    if(todoItem.classList[0] === "todo__delete-btn"){
        deleteTodoItem(todoItem);
    }
}

function deleteTodoItem(todoItem){
    todoItem.parentNode.remove();
}

function toggleTodoCompleted(todoItem){
    todoItem.classList.toggle("todo__item--checked");
}

function changeTabbar(e){
    selectedTab = e.target;
    changeTabbarActiveState(selectedTab);

    let todos = todoUl.childNodes;
    filterTodoData(todos, selectedTab);
}

function changeTabbarActiveState(selectedTab){
    let allTab = document.getElementById("all");
    let comTab = document.getElementById("completed");
    let incTab = document.getElementById("incompleted");

    switch(selectedTab.id){
        case "all":
                allTab.classList.add("todo__filter-tab--active");
                comTab.classList.remove("todo__filter-tab--active");
                incTab.classList.remove("todo__filter-tab--active");
            break;
        case "completed":
                allTab.classList.remove("todo__filter-tab--active");
                comTab.classList.add("todo__filter-tab--active");
                incTab.classList.remove("todo__filter-tab--active");
            break;
        case "incompleted":
                allTab.classList.remove("todo__filter-tab--active");
                comTab.classList.remove("todo__filter-tab--active");
                incTab.classList.add("todo__filter-tab--active");
            break;
        default:
            break;
    }
}

function filterTodoData(todos, selectedTab){
    todos.forEach(todo => {
        switch(selectedTab.id){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                    selectedTab.classList.add("todo__filter-tab--active");

                    if(todo.childNodes[0].classList.contains("todo__item--checked")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                break;
            case "incompleted":
                if(!todo.childNodes[0].classList.contains("todo__item--checked")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            default:
                break;
        }
    
    });
}