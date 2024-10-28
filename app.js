// 11 Misol
// const cityInput = document.getElementById("cityInput");
// const cityList = document.getElementById("cityList").children;

// cityInput.addEventListener("input", () => {
//   const inputVal = cityInput.value.toLowerCase();
//   Array.from(cityList).forEach((li) => {
//     !li.textContent.toLowerCase().includes(inputVal)
//       ? (li.style.display = "none")
//       : (li.style.display = "block");
//   });
// });

//  12 Misol
// const counter = document.querySelector("p");
// const backward = document.querySelector("#backward");
// const forward = document.querySelector("#forward");
// const image = document.querySelector("#sliderImage");

// let currentImage = 1;
// counter.textContent = `Image - ${currentImage}/10`;

// backward.addEventListener("click", () => {
//   currentImage--;
//   counter.textContent = `Image - ${currentImage}/10`;
//   image.src = `http://picsum.photos/id/${currentImage}/1200`;

//   if (currentImage == 0) {
//     currentImage = 10;
//     counter.textContent = `Image - ${currentImage}/10`;
//   }
// });
// forward.addEventListener("click", () => {
//   currentImage++;
//   counter.textContent = `Image - ${currentImage}/10`;
//   image.src = `http://picsum.photos/id/${currentImage}/1200`;

//   if (currentImage >= 11) {
//     currentImage = 1;
//     counter.textContent = `Image - ${currentImage}/10`;
//   }
// });

//  13 Misol
// const button = document.getElementById("boldButton");
// const paragraph = document.getElementById("paragraph");

// let text = paragraph.textContent;

// button.addEventListener("click", () => {
//   const selectedText = window.getSelection().toString();
//   text = text.replace(selectedText, `<b>${selectedText}</b>`);
//   paragraph.innerHTML = text;
// });

//  15 Misol
// const numbersInput = document.getElementById("numbersInput");
// const showEvens = document.getElementById("showEvens");
// const evensOutput = document.getElementById("evensOutput");

// showEvens.addEventListener("click", () => {
//   const numbers = numbersInput.value.split(",").map(Number);
//   const evenNumbers = numbers.filter((num) => num % 2 === 0);
//   evensOutput.textContent =
//     evenNumbers.length > 0
//       ? "Juft Sonlar: " + evenNumbers.join(", ")
//       : "Toq Sonlar";
// });

//  16 Misol
// const num1El = document.getElementById("num1");
// const num2El = document.getElementById("num2");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// const text = document.getElementById("result");
// const deleteEl = document.getElementById("deleteEl");

// const calculate = (type) => {
//   let num1 = Number(num1El.value);
//   let num2 = Number(num2El.value);
//   switch (type) {
//     case "add":
//       text.textContent = num1 + num2;
//       break;
//     case "subtract":
//       text.textContent = num1 - num2;
//       break;
//     case "multiply":
//       text.textContent = num1 * num2;
//       break;
//     case "divide":
//       text.textContent = num1 / num2;
//       break;
//   }
// };
// add.addEventListener("click", () => {
//   calculate("add");
// });
// subtract.addEventListener("click", () => {
//   calculate("subtract");
// });
// multiply.addEventListener("click", () => {
//   calculate("multiply");
// });
// divide.addEventListener("click", () => {
//   calculate("divide");
// });
// deleteEl.addEventListener("click", () => {
//   num1El.value = "";
//   num2El.value = "";
//   text.textContent = "";
// });

//  17 Misol
// const text = document.getElementById("text");
// const btn = document.getElementById("fontSizeSlider");

// btn.addEventListener("input", () => {
//   text.style.fontSize = btn.value + "px";
// });

// 18 Misol
// const btn = document.querySelector("#toggleInstructions");
// const text = document.querySelector("#instructions");

// btn.addEventListener("click", () => {
//   if (text.style.display == "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// });

// 19 Misol
// const buttons = document.querySelectorAll(".tabButton");
// const info1 = document.getElementById("tab1");
// const info2 = document.getElementById("tab2");
// const info3 = document.getElementById("tab3");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     info1.style.display = "none";
//     info2.style.display = "none";
//     info3.style.display = "none";
//     document.getElementById(button.dataset.target).style.display = "block";
//   });
// });

// 20 Misol
// const coloredText = document.getElementById("coloredText");
// const changeTextColor = document.getElementById("changeTextColor");
// const changeBgColor = document.getElementById("changeBgColor");

// changeTextColor.addEventListener("click", () => {
//   coloredText.style.color = "white";
// });
// changeBgColor.addEventListener("click", () => {
//   coloredText.style.backgroundColor = "green";
// });

// 21 Misol
// const numberInput = document.getElementById("numberInput");
// const checkNumber = document.getElementById("checkNumber");
// const numberOutput = document.getElementById("numberOutput");

// checkNumber.addEventListener("click", () => {
//   if (numberInput.value > 0) {
//     numberOutput.textContent = "Siz kiritgan raqam MUSBAT";
//   } else if (numberInput.value < 0) {
//     numberOutput.textContent = "Siz kiritgan raqam MANFIY";
//   } else {
//     numberOutput.textContent = "NOL kiritdingiz";
//   }
//   numberInput.value = "";
// });
