let listArray = [];
let listIdCounter = 0;
let activeList;

// Classes
class newList {
    constructor() {
        this.tasks = [];
        this.listName = '';
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

// Functions

function addList() {

    listArray.push(new newList());

    $('.listBar').append(
        '<div class="listEditContainer" id="' + listIdCounter +'">' +
            '<input id="input' + listIdCounter + '" type="text" placeholder="Enter List Name" onchange="getListName(this.value, this.id)">' +
            '<div class="icons"><button>Delete List<i class="trash fas fa-trash-alt"></i></button><button onclick="editList(this.id)" id="button' + listIdCounter +'">Edit Tasks<i class="edit fas fa-edit"></i></button></div>' +
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
                '<input id="input' + i + '" type="text" onchange="getListName(this.value, this.id)" value="'+ listArray[i].listName +'">' +
                '<div class="icons"><button>Delete List<i class="trash fas fa-trash-alt"></i></button><button onclick="editList(this.id)" id="button' + i +'">Edit Tasks<i class="edit fas fa-edit"></i></button></div>' +
                '</div>'
            );
        }
    }
}

function displayTasks() {
    $('.listContent').html('<button class="listItem" onclick="addListItem()">Add Task<i class="fas fa-plus-circle"></i></button>');

    if(activeList.tasks.length !== 0) {
        for(let i = 0; i < activeList.tasks.length; i++) {
            $('.listContent').append(
                '<div class="taskContainer">' +
                    '<input id="task' + i +'" type="text" onchange="getTaskName(this.value, this.id)" value="' + activeList.tasks[i] + '">' +
                    '<div class="icons"><button>Delete Task<i class="trash fas fa-trash-alt"></i></button><button>Complete?<i class="fas fa-square"></i></button></div>' +
                '</div>'
            );
        }
    }
}

function addListItem() {
    activeList.tasks.push('');

    $('.listContent').append(
        '<input id="task' + (activeList.tasks.length-1) + '" type="text" placeholder="Enter Task Name" onchange="getTaskName(this.value, this.id)">'
    );
}

function getTaskName(taskVal, taskId) {
    let index = taskId.split('k');
    activeList.tasks[index[1]] = taskVal;
    displayTasks();
}