document.querySelector("button").addEventListener("click", () => {
  const tasks = document.getElementById("tasks");
  const ul = document.querySelector("ul");
  const form = document.querySelector("form");

  form.onsubmit = function(e) {
    e.preventDefault();
  };

  let li = document.createElement("div");
  let text = document.createTextNode(tasks.value);
  li.appendChild(text);
  li.classList.add("do");

  let btnRemove = document.createElement("button");
  let textRemove = document.createTextNode("remove");
  btnRemove.appendChild(textRemove);
  btnRemove.classList.add("deleteTask");
  li.appendChild(btnRemove);

  let ckbox = document.createElement("input");
  ckbox.setAttribute("type", "checkbox");
  ckbox.classList.add("ckbox");
  li.appendChild(ckbox);

  ul.appendChild(li);
  tasks.value = "";

  btnRemove.onclick = function() {
    ul.removeChild(li);
  };

  handlerClickState();
});

const handlerClickState = () => {
  const items = document.querySelectorAll("div");
  items.forEach(li => {
    li.onchange = () => {
      if (li.className == "do") {
        li.classList.add("done");
      } else {
        li.classList.remove("done");
      }
    };
  });
};
