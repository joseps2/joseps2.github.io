function link(dest) {
  window.location.href = dest + ".html";
}

function exerciseType() {
  var btn = document.getElementById("btn");
  if (btn.innerText == "Solo Exercise") {
    btn.innerText = "Exercise with a friend!"
    btn.style.backgroundColor = "#A675C1";
    btn.style.color = "white";
    document.getElementById("exer").innerHTML = "<div class='col'><h3>Exercises</h3></div>" +
    "<div class='col'><div class='flexin'><i class='fa-solid fa-chevron-left'></i><p class='zoom'>High Energy Zumba</p>" +
    "</div><p class='zoomBlah'><strong>Time: </strong> 30 minutes</p></div><div class='col'>" + 
    "<div class='flexin'><i class='fa-solid fa-chevron-left'></i><p class='zoom'>Extra Long Zumba</p>" +
    "</div><p class='zoomBlah'><strong>Time: </strong> 60 minutes</p></div><div class='col'><div class='flexin'>" +
    "<i class='fa-solid fa-chevron-left'></i><p class='zoom'>Advanced Zumba</p></div>" +
    "<p class='zoomBlah'><strong>Time: </strong> 45 minutes</p></div>";

  }
  else {
    btn.innerText = "Solo Exercise"
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    document.getElementById("exer").innerHTML = "<div class='col'><i class='fa-regular fa-user' id='p1'></i></div>" +
    "<div class='col'><i class='fa-regular fa-user' id='p2'></i></div>";


  }
}

function copy(title) {
  navigator.clipboard.writeText(title);
  alert("Copied to clipboard!");
}