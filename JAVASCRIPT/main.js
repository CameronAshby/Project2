let listArray = [];

class Store {
    constructor(listIndex, listContent) {
        this.listIndex = listIndex;
        this.listContent = listContent;
    }
    static storeList(listIndex, listContent) {
        let listString = JSON.stringify(listContent);
        localStorage.setItem(listIndex, listString);
    };
    static changeList(listIndex)  {
        let listContent = localStorage.getItem(listIndex);
        return JSON.parse(listContent);
    };
    static clearList(listIndex) {
        localStorage.removeItem(listId);
    };
}

function addList() {
    $('.listBar').append(
        '<div>Test</div>'
    )
}

function addListItem() {

}

function clearList() {

}

function clearListItem() {

}

function storeList() {

}

function changeList() {

}