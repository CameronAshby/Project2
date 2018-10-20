let listArray = [];
let listIdCounter = 0;

// Classes
class newList {
    constructor() {
        this.tasks = [];
        this.listName = '';
    }
    addTask() {

    }
    removeTask() {

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
        '<div id="' + listIdCounter +'">' +
            '<input id="input' + listIdCounter + '" type="text" placeholder="Enter List Name" onchange="getListName(this.value, this.id)">' +
        '</div>'
    );

    listIdCounter++;
}

function buildList() {
    $('.listContent').append(
        '<button class="listItem" onclick="addListItem()">Add Task<i class="fas fa-plus-circle"></i></button>'
    );
}

function addListItem() {
    $('.listContent').append(
        '<div id="test">Test<i onclick="" class="fas fa-trash-alt"></i></div>'
    );

    listArray.push($('#test'));
    listIdCounter++;
}

function clearList() {

}

function clearListItem() {

}

function storeList() {

}

function changeList() {

}

function trash(myId) {

}

function getListName(listVal, numId) {
    let index = numId.split('t');
    listArray[index[1]].listName = listVal;
}