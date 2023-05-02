const form = document.getElementById("form-container");
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");

let validOrder = false;

function orderValidation(firstNumber, secondNumber) {
  const validation =
    parseFloat(firstNumber) < parseFloat(secondNumber) ? true : false;
  return validation;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const successMessage = `O número ${firstNumber.value} é menor que ${secondNumber.value}`;
  const failureMessage = `O número ${firstNumber.value} não é menor que ${secondNumber.value}`;

  validOrder = orderValidation(firstNumber.value, secondNumber.value);

  const resultMessage = document.querySelector(".result-message");

  if (validOrder) {
    resultMessage.innerHTML = successMessage;
    resultMessage.getElementsByClassName.display = "block";
    document.querySelector(".result-message").style.backgroundColor = "green";

    firstNumber.value = "";
    secondNumber.value = "";
  } else {
    resultMessage.innerHTML = failureMessage;
    document.querySelector(".result-message").style.backgroundColor = "red";

    firstNumber.value = "";
    secondNumber.value = "";
  }
});

secondNumber.addEventListener("keyup", function (e) {
  console.log(firstNumber.value, e.target.value);
  validOrder = orderValidation(firstNumber.value, e.target.value);

  if (!validOrder) {
    secondNumber.classList.add("error");
    document.querySelector(".result-message").style.display = "block";
    secondNumber.classList.remove("success");
  } else {
    secondNumber.classList.add("success");
    document.querySelector(".result-message").style.display = "block";
    secondNumber.classList.remove("error");
  }
});
