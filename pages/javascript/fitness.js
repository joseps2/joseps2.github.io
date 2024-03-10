function link(dest) {
  window.location.href = dest + ".html";
}

function convert(unit){
  var miBtn = document.getElementById("mi");
  var kmBtn = document.getElementById("km");
  if (unit == "mi") {
    miBtn.style.backgroundColor = "#A675C1";
    miBtn.style.color = "white";
    miBtn.style.fontWeight = "bold";
    kmBtn.style.backgroundColor = "white";
    kmBtn.style.color = "black";
    kmBtn.style.fontWeight = "normal"; 
    var conversion = 2.28 / 1.609;
    document.getElementById("dist").innerHTML = Math.round(conversion * 100) / 100 + " miles";
  }
  else {
    kmBtn.style.backgroundColor = "#A675C1";
    kmBtn.style.color = "white";
    kmBtn.style.fontWeight = "bold";
    miBtn.style.backgroundColor = "white";
    miBtn.style.color = "black";
    miBtn.style.fontWeight = "normal";
    var conversion = 1.42 * 1.609;
    document.getElementById("dist").innerHTML = Math.round(conversion * 100) / 100 + " kilometers";
  }
}