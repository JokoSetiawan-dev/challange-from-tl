let cardBody = document.querySelector(".card-body");
let delBtn = document.getElementsByTagName("button");

// delBtn.addEventListener("click", function () {
//   cardBody.remove();
// });

for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", function () {
    this.parentElement.remove();
  });
}
