function link(dest) {
  window.location.href = dest + ".html";
}

/*Enact API calls based on the user's position */
function funcCall() {
  var index = localStorage.getItem("arrIndex");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
        document.getElementById("readingInfo").innerHTML += "<h3>" + obj.readings[index].title + "</h3>";
        document.getElementById("readingInfo").innerHTML += "<p class='headP'>" + obj.readings[index].desc + "</p>";
        document.getElementById("readingInfo").innerHTML += "<p class='headP'><strong>Read Time: </strong>" + obj.readings[index].time + "</p>";
        document.getElementById("readingInfo").innerHTML += "<p class='content'>" + obj.readings[index].content + "</p>";
        document.getElementById("readingInfo").innerHTML += "<i class='fa-solid fa-share-nodes' onclick=\"copy('" + obj.readings[index].title + "')\"></i>";
    }
  };
  var link = "../pages/readings.json";
  xhttp.open("GET", link);
  xhttp.send();
}

function copy(title) {
  navigator.clipboard.writeText(title);
  alert("Copied to clipboard!");
}