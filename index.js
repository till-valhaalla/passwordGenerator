const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function generatePassword() {
  const length = Number(document.getElementById("length").value);
  let chars = letters;

  if (document.getElementById("number").checked) chars += numbers;
  if (document.getElementById("symbol").checked) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

function generate() {
  password1.value = generatePassword();
  password2.value = generatePassword();
}

function copyText(input) {
  input.select();
  document.execCommand("copy");
  alert("Copied!");
}
