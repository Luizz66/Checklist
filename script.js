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
  if (tema_icon.name === "moon") {
    light();
  }
  if (tema_icon.name === "sunny-outline") {
    dark();
  }
};
document.querySelector(".btn-add-item").addEventListener("click", Add);

checkBox.setAttribute(
  "onclick",
  "this.parentElement.classList.toggle('checked')"
);

// css
var tema_icon = document.getElementById("tema-icon");
var section = document.querySelector("section");
var box_icons = document.querySelector(".box-icons");
var github_icon = document.getElementById("github-icon");
var tltle = document.querySelector(".title");
var input_item = document.querySelector(".input-item");
var btn_add_item = document.querySelector(".btn-add-item");

function light() {
  tema_icon.setAttribute("name", "moon");
  section.setAttribute("class", "section-light");
  box_icons.style.backgroundColor = "var(--white2)";
  tema_icon.style.color = "var(--gray)";
  github_icon.style.color = "var(--gray)";
  tltle.style.color = "var(--gray)";
  input_item.style.backgroundColor = "var(--gray)";
  input_item.style.color = "var(--white)";
  btn_add_item.setAttribute("class", "btn-add-item-light");
  document.querySelectorAll("li").forEach((item) => {
    item.classList.add("list-items-light");
  });
  document.querySelectorAll(".checkbox").forEach((item) => {
    item.classList.add("checkbox-light");
  });
  document.querySelectorAll("#delete-icon").forEach((item) => {
    item.style.color = "var(--black2)";
    item.addEventListener("mouseover", () => {
      item.style.color = "var(--red)";
    });
    item.addEventListener("mouseout", () => {
      item.style.color = "var(--black2)";
    });
  });
}

function dark() {
  tema_icon.setAttribute("name", "sunny-outline");
  section.setAttribute("class", "section");
  box_icons.style.backgroundColor = "var(--black2)";
  tema_icon.style.color = "var(--white)";
  github_icon.style.color = "var(--white)";
  tltle.style.color = "var(--white)";
  input_item.style.backgroundColor = "var(--white)";
  input_item.style.color = "var(--gray)";
  btn_add_item.setAttribute("class", "btn-add-item");
  document.querySelectorAll("li").forEach((item) => {
    item.style.color = "var(--white)";
    item.classList.remove("list-items-light");
  });
  document.querySelectorAll(".checkbox").forEach((item) => {
    item.setAttribute("class", "checkbox");
  });
  document.querySelectorAll("#delete-icon").forEach((item) => {
    item.style.color = "var(--white)";
    item.addEventListener("mouseover", () => {
      item.style.color = "var(--red)";
    });
    item.addEventListener("mouseout", () => {
      item.style.color = "var(--white)";
    });
  });
}

tema_icon.addEventListener("click", () => {
  if (tema_icon.name === "sunny-outline") {
    light();
  } else if (tema_icon.name === "moon") {
    dark();
  }
});
