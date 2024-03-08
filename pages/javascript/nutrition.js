function link(dest, spec) {
  if (dest == "recipe") {
    localStorage.setItem("arrIndex", spec);
    window.location.href = dest + ".html";
  }
  else {
    window.location.href = dest + ".html";
  }

}

// Get the modal
var modal = document.getElementById("filterModal");

// Get the button that opens the modal
var btn = document.getElementById("filterBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("cancel");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}