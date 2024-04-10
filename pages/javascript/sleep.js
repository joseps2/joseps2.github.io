function link(dest) {
  window.location.href = dest + ".html";
}

function firstGraph() {
  const xValues = ["Su", "M", "Tu", "W", "Th", "F","Sa"];
  const yValues = [6, 7, 7.5];

  new Chart("myChart1", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "#53C5BB",
        borderColor: "#53C5BB",
        data: yValues
      }]
    },
    options: {
  
      plugins: {
          legend: {display: false},
      },
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Days of the Week'
              },
          },
          y: {
              title: {
                  display: true,
                  text: 'Hours of Sleep'
              },
          }
      }
  }
  });
}


function getTime() {
  document.getElementById("myChart1").style.display = "none";
  const xValues = ["Su", "M", "Tu", "W", "Th", "F","Sa"];
  const yValues = [6, 7, 7.5, 8, 7, 8, 8];

  new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "#53C5BB",
        borderColor: "#53C5BB",
        data: yValues
      }]
    },
    options: {
  
      plugins: {
          legend: {display: false},
      },
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Days of the Week'
              },
          },
          y: {
              title: {
                  display: true,
                  text: 'Hours of Sleep'
              },
          }
      }
  }
  });
}
