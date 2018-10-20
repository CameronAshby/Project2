// Variables

let listArray = [];
let listIdCounter = 0;
let activeList;

// Classes
class newList {
    constructor() {
        this.tasks = [];
        this.listName = '';
        this.taskCompleted = [];
    }
}

// class Store {
//     constructor(listIndex, listContent) {
//         this.listIndex = listIndex;
//         this.listContent = listContent;
//     }
//     static storeList(listIndex, listContent) {
//         let listString = JSON.stringify(listContent);
//         localStorage.setItem(listIndex, listString);
//     };
//     static changeList(listIndex)  {
//         let listContent = localStorage.getItem(listIndex);
//         return JSON.parse(listContent);
//     };
//     static clearList(listIndex) {
//         localStorage.removeItem(listId);
//     };
// }

// Adding Functions

function addList() {
    listArray.push(new newList());

    $('.listBar').append(
        '<div class="listEditContainer" id="' + listIdCounter +'">' +
        '<div class="icons"><button type="button" class="btn" id="deleteList_' + listIdCounter + '" onclick="deleteLists(this.id)"><i class="trash fas fa-trash-alt"></i></button><button type="button" class="btn" onclick="editList(this.id)" id="button' + listIdCounter +'"><i class="edit fas fa-edit"></i></button></div>' +
        '<input id="input' + listIdCounter + '" type="text" placeholder="Enter List Name" onchange="getListName(this.value, this.id)">' +
        '</div>'
    );

    listIdCounter++;
}

function getListName(listVal, listId) {
    let index = listId.split('t');
    listArray[index[1]].listName = listVal;
    displayLists();
}

function editList(buttonId) {
    let newId = buttonId.split('n');
    activeList = listArray[newId[1]];
    displayTasks();
}

function displayLists() {
    $('.listBar').html('');
    if(listArray.length !== 0) {
        for(let i = 0; i < listArray.length; i++) {
            $('.listBar').append(
                '<div class="listEditContainer" id="' + i +'">' +
                '<div class="icons"><button type="button" class="btn" id="deleteList_'+i+'" onclick="deleteLists(this.id)"><i class="trash fas fa-trash-alt"></i></button><button type="button" class="btn" onclick="editList(this.id)" id="button' + i +'"><i class="edit fas fa-edit"></i></button></div>' +
                '<input id="input' + i + '" type="text" onchange="getListName(this.value, this.id)" value="'+ listArray[i].listName +'">' +
                '</div>'
            );
        }
    }
}

function displayTasks() {
    $('.listContent').html('<div id="taskFunctionButtonContainer"><button type="button" class="listItem btn btn-secondary" onclick="addTasks()">Add Task <i class="fas fa-plus-circle"></i></button><button type="button" class="listItem btn btn-secondary clearCompleteButton" onclick="clearComplete()">Clear Complete</button></div>');

    if(activeList.tasks.length !== 0) {
        for(let i = 0; i < activeList.tasks.length; i++) {
            $('.listContent').append(
                '<div class="taskContainer">' +
                '<input id="task_' + i +'" type="text" onchange="getTaskName(this.value, this.id)" value="' + activeList.tasks[i] + '">' +
                '<button id="deleteTask_' + i +'" onclick="deleteTasks(this.id)"><i class="trash fas fa-trash-alt"></i></button></div>'
            );

            if (activeList.taskCompleted[i] == true) {
                $('.listContent').append(
                    '<button id="complete_'+ i +'" onclick="markUncomplete(this.id)"><i class="fas fa-check-square"></i></button>'
                );
            }
            else {
                $('.listContent').append(
                    '<button id="complete_'+ i +'" onclick="markComplete(this.id)"><i class="fas fa-square"></i></button>'
                );
            }
            $('.listContent').append(
                '</div>'
            )
        }
    }
}

function addTasks() {
    activeList.tasks.push('');
    activeList.taskCompleted.push(false);

    $('.listContent').append(
        '<input id="task_' + (activeList.tasks.length-1) + '" type="text" placeholder="Enter Task Name" onchange="getTaskName(this.value, this.id)">'
    );
}

function getTaskName(taskVal, taskId) {
    let index = taskId.split('_');
    activeList.tasks[index[1]] = taskVal;
    displayTasks();
}

// Deleting Functions

function deleteTasks(taskId) {
    let index = taskId.split('_');
    activeList.tasks.splice(index[1], 1);
    activeList.taskCompleted.splice(index[1], 1);
    displayTasks();
}

function deleteLists(listId) {
    console.log(listId);
    let index = listId.split('_');
    listArray.splice(index[1], 1);
    displayLists();
    $('.listContent').html('');
    listIdCounter--;
}

function markComplete(taskId) {
    let index = taskId.split('_');
    activeList.taskCompleted[index[1]] = true;
    displayTasks();
}

function markUncomplete(taskId) {
    let index = taskId.split('_');
    activeList.taskCompleted[index[1]] = false;
    displayTasks();
}

// Clearing Functions
function clearComplete() {
    for (let i = 0; i < activeList.taskCompleted.length; i++) {
        if(activeList.taskCompleted[i] === true) {
            activeList.taskCompleted.splice(i, 1);
            activeList.tasks.splice(i, 1);
            i--;
        }
    }

    displayTasks();
}