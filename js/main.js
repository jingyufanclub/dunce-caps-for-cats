window.onload = function () {

  var dunce = document.getElementById("dunce"),
      rufus = document.getElementById("rufus"),
      title = document.getElementsByTagName("h1");
      
  Draggable.create([dunce, rufus, title])

}
