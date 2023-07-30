const container = document.querySelector(".container");
const tableElement = document.createElement("table");

for (let i = 5; i >= 1; i--) {
  const rowElement = document.createElement("tr");

  for (let j = 1; j <= 5; j++) {
    const columnElement = document.createElement("td");
    const content = document.createTextNode(i);
    columnElement.appendChild(content);
    rowElement.appendChild(columnElement);
  }

  tableElement.appendChild(rowElement);
}

tableElement.setAttribute("border", "1");
tableElement.setAttribute("cellpadding", "10");
container.appendChild(tableElement);
