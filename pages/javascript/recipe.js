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
        document.getElementById("colOne").innerHTML += "<img src='" + obj.recipes[index].Image + "' alt='" + obj.recipes[index].Image + "'class='recipeImg'>";
        document.getElementById("colOne").innerHTML += "<h3>" + obj.recipes[index].title + "</h3>";
        document.getElementById("colOne").innerHTML += "<p class='pRecipe'><strong>Cook Time: </strong>" + obj.recipes[index].cookTime + " Minutes</p>";
        document.getElementById("colOne").innerHTML += "<p class='pRecipe'><strong>Allergens: </strong>" + obj.recipes[index].Allergens + "</p>";
        document.getElementById("colOne").innerHTML += "<p class='pRecipe'><strong>Servings: </strong>" + obj.recipes[index].Servings + "</p>";
        document.getElementById("colOne").innerHTML += "<p class='pRecipe'><strong>Calories: </strong>" + obj.recipes[index].Calories + "</p>";
        document.getElementById("colOne").innerHTML += "<i class='fa-solid fa-share-nodes' onclick=\"copy('" + obj.recipes[index].title + "')\"></i>";

        var ingre = obj.recipes[index].Ingredients.split(',');
        document.getElementById("colTwo").innerHTML += "<ul>";
        for (let i = 0; i < ingre.length; i++) {
          document.getElementById("colTwo").innerHTML += "<li>" + ingre[i] + "</li>";
          if (i+1 == ingre.length) {
            document.getElementById("colTwo").innerHTML += "</ul>";
          }
        }
        var recp = obj.recipes[index].Recipe.split('.');
        document.getElementById("colThree").innerHTML += "<ol type='1'>";
        for (let i = 0; i < recp.length; i++) {
          document.getElementById("colThree").innerHTML += "<li>" + recp[i] + "</li>";
          if (i+1 == recp.length) {
            document.getElementById("colThree").innerHTML += "</ol>";
          }
        }
        
    }
  };
  var link = "../pages/recipes.json";
  xhttp.open("GET", link);
  xhttp.send();
}

function copy(title) {
  navigator.clipboard.writeText(title);
  alert("Copied to clipboard!");
}