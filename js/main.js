window.onload = function () {

  var dunce = document.getElementById("dunce"),
      header = document.getElementsByClassName("header"),
      rufus = document.getElementById("rufus");

  Draggable.create([dunce, header, rufus]);

}
