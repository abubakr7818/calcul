function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.innerText = "Result: Iltimos son kiriting!";
    return;
  }

  let result = 0;

  if (operation === "sum") result = num1 + num2;
  if (operation === "sub") result = num1 - num2;
  if (operation === "mul") result = num1 * num2;
  if (operation === "div") {
    result = num2 !== 0 ? num1 / num2 : "0 ga bo‘lish mumkin emas!";
  }

  resultElement.innerText = "Result: " + result;
}
