window.onload = function () {

  var dunce = document.getElementById("dunce"),
      title = document.getElementsByTagName("h1"),
      rufus = document.getElementById("rufus");

  TweenLite.set(dunce, {height: "45vh", position: "relative"});
  TweenLite.set(title, {position: "relative"});
  TweenLite.set(rufus, {height: "70vh", position: "relative"});

  Draggable.create([dunce, title, rufus])

}
