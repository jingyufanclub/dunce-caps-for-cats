window.onload = function() {
  document.getElementById("year").innerHTML = new Date().getFullYear()

  Draggable.create("img");
}
