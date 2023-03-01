const socket = io();

const homework = document.querySelector("#homework");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

homework.addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("client:newnote", {
    title: title.value,
    description: description.value,
  });
});
