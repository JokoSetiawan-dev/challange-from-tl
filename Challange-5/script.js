const todoInput = document.querySelector(".todo-input");
const saveBtn = document.querySelector(".btn-simpan");
const todoBody = document.querySelector(".todo-body");

todoInput.focus();

//Event Save
saveBtn.addEventListener("click", saveTodo);

// Event Delete static (tidak berjalan karena todovalue yang ditambah tidak terdeteksi sama const delBtns)
// const delBtns = document.querySelectorAll('.todo-delete')
// delBtns.forEach(btn => {
//     btn.addEventListener('click', function(){
//         console.log('delete...')
//     })
// })

// Eevent delete (dynamic)
document.addEventListener("click", function (e) {
  //akan meng console element yang kita click
  // console.log(e.target)
  deleteTodo(e);
});

document.addEventListener("click", function (e) {
  doneTodo(e);
});

// Save Todo
function saveTodo() {
  const todoValue = todoInput.value;

  if (todoValue == "") {
    alert("Todo name can't empty");
  } else {
    let oldTodo = todoBody.innerHTML;
    const newTodo = `
               <li>
                <div class="todo-list">
                  <input id="todo2" type="checkbox" />
                  <label for="todo2">${todoValue}</label>
                </div>
                <button class="todo-delete" >x</button>
              </li>
        `;

    //oldTodo = oldTodo + newTodo
    oldTodo += newTodo;
    todoBody.innerHTML = oldTodo;
  }
}

// Done Todo
function doneTodo(e) {
  const isChecked = e.target.classList.contains("todo-check");
  if (isChecked) {
    const todoInput = e.target;
    const labelTodo = todoInput.nextElementSibling;
    labelTodo.classList.toggle("done");
  }
}

// Delete Todo
function deleteTodo(e) {
  //cek apakah ini element todo delete
  const isTodoDelete = e.target.classList.contains("todo-delete");
  if (isTodoDelete == true) {
    const btnDelete = e.target;
    const delConfirm = confirm("Are you sure to delete?");
    if (delConfirm) {
      btnDelete.parentElement.remove();
    }
  }
}
