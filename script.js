let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolsChars = "!@#$%^&*_-";

function generatePassword() {
  let genPass = "";
  let allChars = "";
  allChars += lowercase.checked ? LowerChars : "";
  allChars += uppercase.checked ? UpperChars : "";
  allChars += numbers.checked ? numberChars : "";
  allChars += symbols.checked ? symbolsChars : "";

  if (allChars == "" || allChars.length == 0) {
    return genPass;
  } else {
    let i = 1;
    while (i <= inputSlider.value) {
      genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
      i++;
    }
    return genPass;
  }
}

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

copyIcon.addEventListener("click", () => {
  if (passBox != "") {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";
    setTimeout(() => {
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
