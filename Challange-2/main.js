// const htmlBtn = document.querySelector("#html-btn");

// htmlBtn.addEventListener("click", function () {
//   alert(this.innerText);
// });

// const cssBtn = document.querySelector("#css-btn");

// cssBtn.addEventListener("click", function () {
//   alert(this.innerText);
// });

// const jsBtn = document.querySelector("#js-btn");

// jsBtn.addEventListener("click", function () {
//   alert(this.innerText);
// });

const buttons = document.getElementsByTagName("button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function(){
//         alert(this.innerText)
//     })
// }

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    alert(this.innerText);
  });
}
