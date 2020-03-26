/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/



var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {




}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log(dragged)



    // make it half transparent
    event.target.style.opacity = .5;
}, false);



new Sortable(dragged, {
    animation: 150,
    ghostClass: 'blue-background-class'
});

var el = document.getElementById('items');
var sortable = Sortable.create(el);