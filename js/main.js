window.onload = function () {

  var dunce = document.getElementById("dunce"),
      title = document.getElementsByTagName("h1"),
      rufus = document.getElementById("rufus");
  TweenLite.set(dunce, {height: "50vh"});
  TweenLite.set(rufus, {height: "70vh"});

  Draggable.create([dunce, title, rufus]);

}
