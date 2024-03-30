function link(dest, spec) {
  if (dest == "readings") {
    localStorage.setItem("arrIndex", spec);
    window.location.href = dest + ".html";
  }
  else {
    window.location.href = dest + ".html";
  }

}