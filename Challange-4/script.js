// Cara sendiri
let cardBody = document.querySelector(".card-body");
let delBtn = document.getElementsByTagName("button");

for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", function () {
    this.parentElement.remove();
  });
}

// cara kak andar
// const delButton = document.querySelectorAll('.del-btn')

// delButton.forEach(btn => {
//   btn.addEventListener('click', function(){
//     this.parentElement.remove()
//   })
// })
