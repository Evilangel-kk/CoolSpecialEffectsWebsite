const List = document.querySelector("#aside-list");
const Items = document.querySelectorAll(".item");
var isOpen = false;
List.onclick = function() {
    if (!isOpen) {
        isOpen = true;
        Items.forEach(element => {
            element.style.right = "100px";
        });
    } else {
        isOpen = false;
        Items.forEach(element => {
            element.style.right = "0px";
        });
    }
};
Items.forEach(element => {
    element.onmouseover = function() {
        this.style.right = "100px";
    };
    element.onmouseout = function() {
        this.style.right = "0px";
        isOpen = false;
    };
});