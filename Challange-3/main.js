const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  const nameInput = document.getElementById("nama").value;
  const nameResult = document.getElementById("result");

  nameResult.innerHTML = "Nama Saya Adalah " + nameInput;

  const listName = document.getElementById("list");
  const listNameResult = document.createElement("li");
  listName.appendChild(listNameResult);
  const listNameData = document.createTextNode(nameInput);
  listNameResult.appendChild(listNameData);
});
