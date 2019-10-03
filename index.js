//----------------------------------------------------------
$("#AddItem").submit( function (event) {
    event.preventDefault();
    //We now the value is in the target [0] of the event
    let item = event.target[0].value;
    if(item !== "") {
        _addItemToTheList( item);
    } else {
        alert("Cannot add empty value");
    }
});

//----------------------------------------------------------
$("#ListOfItems").on('click', "li", function (event) {
    if(event.target.id === "Check") {

        if(event.currentTarget.firstChild.classList.length === 0) {
            event.currentTarget.firstChild.classList.add("cross");
        } else {
            event.currentTarget.firstChild.classList.remove("cross");
        }
    } else if (event.target.id === "Delete") {
        event.currentTarget.remove();
    }
});

//----------------------------------------------------------
function _addItemToTheList(itemToAdd) {
    $("#ListOfItems").append("<li>" +
        "<p>"+ itemToAdd +"</p>" +
        "<div class='Buttons'>" +
        "<button id='Check'>Check</button>" +
        "<button id='Delete'>Delete</button>" +
        "</div>" +
        "</li>");
}
