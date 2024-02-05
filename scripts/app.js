const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const generatePassword = (password = "") => {
  if (uppercaseEl.checked) {
    password += getRandomUpper();
  }
  if (lowercaseEl.checked) {
    password += getRandomLower();
  }
  if (numbersEl.checked) {
    password += getRandomNumber();
  }
  if (symbolsEl.checked) {
    password += getRandomSymbol();
  }
  if (password.length < lengthEl.value) {
    return generatePassword(password);
  }

  resultEl.innerText = truncateString(password, lengthEl.value);
};

generateEl.addEventListener("click", () => {
  generatePassword();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

function getRandomUpper() {
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperSet[Math.floor(Math.random() * upperSet.length)];
}

function getRandomLower() {
  const lowerSet = "abcdefghijklmnopqrstuvwxyz";
  return lowerSet[Math.floor(Math.random() * lowerSet.length)];
}

function getRandomNumber() {
  const numberSet = "1234567890";
  return numberSet[Math.floor(Math.random() * numberSet.length)];
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
