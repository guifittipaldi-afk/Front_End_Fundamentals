document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var gender = document.getElementById("gender").value;
  var birthdate = new Date(document.getElementById("birthdate").value);
  var now = new Date();

  var age = now.getFullYear() - birthdate.getFullYear();
  var isAdult = age >= 18;

  var resultDiv = document.getElementById("result");
  resultDiv.textContent = "";

  var message = document.createElement("p");
  message.classList.add("result-message");
  if (isAdult) {
    message.textContent = "Você é maior de idade. (" + gender + ")";
    message.style.color = "green";
  } else {
    message.textContent = "Você é menor de idade. (" + gender + ")";
    message.style.color = "red";
  }

  resultDiv.appendChild(message);
  resultDiv.classList.remove("hidden");
});
