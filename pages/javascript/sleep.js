function link(dest) {
  window.location.href = dest + ".html";
}

function getTime() {
  let days = ["Su", "M", "Tu", "W","Th", "F","Sa"];
  let date = new Date();
  var dow = date.getDay();
  let time = document.getElementById("bedTime").value;
  let [hours, mins] = time.split(":");
  if (hours > 12) {
    document.getElementById(days[dow] + "BedTime").innerHTML = hours%12 + ":" + mins + " PM";
  }
  else {
      document.getElementById(days[dow] + "BedTime").innerHTML = hours + ":" + mins + " PM";
  }

  
  let Wtime = document.getElementById("wakeTime").value;
  let [Whours, Wmins] = Wtime.split(":");
  if (Whours > 12) {
      document.getElementById(days[dow] + "WakeTime").innerHTML = Whours%12 + ":" + Whoursmins + " PM";
    
  }
  else {
    document.getElementById(days[dow] + "WakeTime").innerHTML = Whours + ":" + Wmins + " AM";
  }

  let calculate = (hours%12 - Whours) / 36e5;
  let sleeping = String(calculate);
  document.getElementById(days[dow] + "CalculateTime").innerHTML = "<strong>" + sleeping.split(".")[0] + " hours </strong>";
}