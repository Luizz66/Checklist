var checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.className = "checkbox";

var btnDelete = document.createElement("button");
btnDelete.className = "btn-delete";
const icon = document.createElement("ion-icon");
icon.id = "delete-icon";
icon.setAttribute("name", "trash-outline");
btnDelete.prepend(icon);

btnDelete.setAttribute("onclick", "this.parentElement.remove()");

const Add = () => {
  const input = document.querySelector(".input-item").value;
  if (input === "") {
    alert("Adicione uma tarefa!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = checkBox.outerHTML + input + btnDelete.outerHTML;
    document.querySelector(".list").appendChild(li);
    document.querySelector(".input-item").value = "";
  }
};

checkBox.setAttribute(
  "onclick",
  "this.parentElement.classList.toggle('checked')"
);
