function link(dest, spec) {
  if (dest == "readings") {
    localStorage.setItem("arrIndex", spec);
    window.location.href = dest + ".html";
  }
  else {
    window.location.href = dest + ".html";
  }
}

function copy(title) {
  navigator.clipboard.writeText(title);
  alert("Copied to clipboard!");
}