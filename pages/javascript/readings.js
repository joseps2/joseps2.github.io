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
        document.getElementById("readingInfo").innerHTML += "<p>" + obj.readings[index].desc + "</p>";
        document.getElementById("readingInfo").innerHTML += "<p><strong>Read Time: </strong>" + obj.readings[index].time + "</p>";
        document.getElementById("readingInfo").innerHTML += "<p class='content'>" + obj.readings[index].content + "</p>";
    }
  };
  var link = "../pages/readings.json";
  xhttp.open("GET", link);
  xhttp.send();
}