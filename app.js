document.querySelector("button").addEventListener("click", () => {
  const tasks = document.getElementById("tasks");
  const ul = document.querySelector("ul");

  let li = document.createElement("li");
  let text = document.createTextNode(tasks.value);

  li.appendChild(text);
  li.classList.add("do");
  ul.appendChild(li);

  tasks.value = "";

  event();
});

const event = () => {
  const items = document.querySelectorAll("li");
  items.forEach(it => {
    it.onclick = function() {
      it.className == "do"
        ? it.classList.add("done")
        : it.classList.remove("done");
    };
  });
};
