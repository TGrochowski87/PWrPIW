"use strict"

let lastDeleted = null;
let parentOfDeleted = null;

$(document).keydown(function (e) {
    if (e.which === 90 && e.ctrlKey) {
        e.preventDefault();

        if (lastDeleted === null)
            return;

        $(lastDeleted[0].children[2]).on("click", (event) => { deleteHandler(event); });

        $(parentOfDeleted).append(lastDeleted);
        lastDeleted = null;
        parentOfDeleted = null;
    }
})

const searchInLists = (event) => {
    let checkbox = document.getElementById("case-sensitivity");
    let listOdLists = document.getElementById("list-of-lists");
    let toSearchFor = event.target.value;

    if (checkbox.checked) {
        for (let i = 0; i < listOdLists.children.length; i++) {
            let list = listOdLists.children[i];
            for (let j = 2; j < list.children.length; j++) {
                if (list.children[j].children[0].textContent.includes(toSearchFor)) {
                    list.children[j].style.display = "block";
                }
                else {
                    list.children[j].style.display = "none";
                }
            }
        }
    }
    else {
        for (let i = 0; i < listOdLists.children.length; i++) {
            let list = listOdLists.children[i];
            for (let j = 2; j < list.children.length; j++) {
                if (list.children[j].children[0].textContent.toLowerCase().includes(toSearchFor.toLowerCase())) {
                    list.children[j].style.display = "block";
                }
                else {
                    list.children[j].style.display = "none";
                }
            }
        }
    }
}

const hideContent = (event) => {
    let items = event.target.parentElement.children;
    let checkbox = document.getElementById("case-sensitivity");
    let searchText = document.getElementById("search").value;

    for (let i = 2; i < items.length; i++) {
        if (items[i].style.display === "none") {

            if (checkbox.checked) {
                if (searchText === "" || items[i].textContent.includes(searchText)) {
                    items[i].style.display = "block";
                }
            }
            else {
                if (searchText === "" || items[i].textContent.toLowerCase().includes(searchText.toLowerCase())) {
                    items[i].style.display = "block";
                }
            }
        }
        else {
            items[i].style.display = "none";
        }
    }
}

const addList = () => {
    const newList = document.createElement("div");
    newList.classList.add("col-sm"); 
    newList.classList.add("operation-list");

    const header = document.createElement("h2");
    header.innerHTML = "<h2>List</h2>";
    header.onclick = (event) => { hideContent(event); };

    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "list");
    radio.className = "form-check-input";

    newList.append(header);
    newList.append(radio);

    document.getElementById("list-of-lists").append(newList);
}

const addToDoItem = (event) => {
    event.preventDefault();
    let inputValue = document.getElementById("input-area").value;

    if (inputValue === "")
        return;

    const newItem = document.createElement("div");
    newItem.className = "item";

    const newText = document.createElement("p");
    newText.innerHTML = `${inputValue}`;
    newText.style.color = "whitesmoke";

    const newDate = document.createElement("p");
    newDate.innerHTML = "";
    newText.onclick = (event) => { setItemStatus(event.target, newDate); };

    const deleteButton = $("<button>X</button>");
    $(deleteButton).on("click", (event) => { deleteHandler(event); });

    let listToAddTo = null;

    let list = document.getElementById("list-of-lists");
    for (let i = 0; i < list.children.length; i++)
    {
        let radio = list.children[i].children[1];
        if (radio.checked) {
            listToAddTo = radio.parentElement;
        }
    }

    newItem.append(newText);
    newItem.append(newDate);
    $(newItem).append(deleteButton);

    document.getElementById("input-area").value = "";
    listToAddTo.append(newItem);
}

const deleteHandler = (event) => {
    $("#modal").style.display = "block";

    $("#cancel").off().on("click", function () {
        $("#modal").style.display = "none";
    });

    $("#confirm").off().on("click", function () {
        $(parentOfDeleted) = event.target.parentElement.parentElement;
        $(lastDeleted) = $(event.target.parentElement);
        $(event.target.parentElement).remove();
        $("#modal").style.display = "none";
    });
}

const setItemStatus = (target, newDate) => {
    if (target.style.color === "whitesmoke") {
        target.style.color = "grey";
        target.style.textDecoration = "line-through";

        newDate.innerHTML = `${new Date().toLocaleDateString()}`;
        newDate.style.marginLeft = "15px";
    }
    else {
        target.style.color = "whitesmoke";
        target.style.textDecoration = "none";

        newDate.innerHTML = ``;
    }
}