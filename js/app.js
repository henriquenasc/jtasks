const url = "http://localhost:3333/tasks/";

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const task = document.getElementById("task");
  addTask(task.value);
  task.value = "";
});

function getTasks() {
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Headers", "Content-Type");

  const config = {
    method: "get",
    headers
  };

  fetch(url, config)
    .then(resp => resp.json())
    .then(resp => renderTasks(resp))
    .catch(err => console.log(err));
}

function renderTasks(tasks) {
  const ul = document.getElementById("task-list");
  let li = "";
  tasks.map(task => {
    li += `<li class="task">${
      task.title
    }<a class="deleteTask" onclick="delTask('${task._id}')">apagar</a></li>`;
  });
  ul.innerHTML = li;
}

function delTask(_id) {
  const payload = {
    id: _id
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const config = {
    method: "delete",
    headers,
    body: JSON.stringify(payload)
  };

  const url = `http://localhost:3333/tasks/${payload.id}`;
  console.log(url);
  fetch(url, config)
    .then(res => res.json())
    .catch(err => console.log(err));
  window.location.reload();
}

function addTask(title) {
  const payload = {
    title: title
  };

  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Headers", "Content-Type");

  const config = {
    method: "post",
    headers,
    body: JSON.stringify(payload)
  };

  fetch(url, config)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
  window.location.reload();
}

getTasks();
