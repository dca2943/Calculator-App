let firstNumber = "",
  secondNumber = "",
  operator = "";

function handleInput(value) {
  if (!isNaN(value))
    operator ? (secondNumber += value) : (firstNumber += value);
  else if (value === "=")
    (firstNumber = eval(`${firstNumber} ${operator} ${secondNumber}`)),
      (secondNumber = operator = "");
  else if (value === "C") firstNumber = secondNumber = operator = "";
  else operator = value;
  updateScreen();
}

function updateScreen() {
  document.getElementById("results1").innerText = firstNumber;
  document.getElementById("operator").innerText = operator;
  document.getElementById("results2").innerText = secondNumber;
}

document
  .querySelectorAll(".calc button")
  .forEach((button) =>
    button.addEventListener("click", () => handleInput(button.innerText))
  );
