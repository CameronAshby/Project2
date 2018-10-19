let listArray = [];
let listIdCounter = 0;

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

function addList() {
    let listName;

    $('.listBar').append(
        '<div id="' + listIdCounter +'" class="newListContainer" style="display: flex;">' +
            '<input id="input' + listIdCounter + '" type="text" placeholder="List Name" onkeydown="getVal(this.value)">' +
            '<div><i onclick="buildList()" class="editList fas fa-edit"></i><i onclick="trash(this.id)" class="trashBin fas fa-trash-alt"></i></div>' +
        '</div>'
    );

    class newList {
        constructor(listId, listName) {
            this.tasks = [];
            this.listId = listId;
            this.listName = listName
        }
    };

    // let listName = prompt('Enter the name of your list');

    $('#' + listIdCounter).append(listName);

    listArray.push($('#' + listIdCounter));
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

function getVal(listValue) {
    return listValue;
}