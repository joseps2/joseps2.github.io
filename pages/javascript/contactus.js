function link(dest) {
    window.location.href = dest + ".html";
}

function modalDisplay() {
	document.getElementById("sendModal").style.display = "block";
}

var closeBtn = document.getElementById("cancel");

closeBtn.onclick = function() {
  document.getElementById("sendModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("sendModal")) {
    document.getElementById("sendModal").style.display = "none";
  }
}