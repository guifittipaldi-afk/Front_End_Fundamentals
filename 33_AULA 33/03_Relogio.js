function updateDigitalClock() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

  document.getElementById("clockDigital").textContent = timeString;
}

function updateAnalogClock() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var hourHand = document.querySelector("#clockAnalogico .hour-hand");
  var minuteHand = document.querySelector("#clockAnalogico .minute-hand");
  var secondHand = document.querySelector("#clockAnalogico .second-hand");

  var hourRotation = (hours * 30) + (minutes * 0.5);
  var minuteRotation = (minutes * 6) + (seconds * 0.1);
  var secondRotation = seconds * 6;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

document.getElementById("displayType").addEventListener("change", function() {
  var selectedOption = this.value;

  if (selectedOption === "digital") {
    document.getElementById("clockDigital").style.display = "block";
    document.getElementById("clockAnalogico").style.display = "none";
  } else if (selectedOption === "analogico") {
    document.getElementById("clockDigital").style.display = "none";
    document.getElementById("clockAnalogico").style.display = "block";
  }
});

setInterval(updateDigitalClock, 1000);
setInterval(updateAnalogClock, 1000);
