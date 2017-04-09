window.onload = function () {

  var dunce = document.getElementById("dunce"),
      title = document.getElementsByTagName("h1"),
      rufus = document.getElementById("rufus");

  Draggable.create([dunce, title, rufus], {zIndexBoost:true});

}
