var socket = io();
window.onload = loadApp;

function loadApp() {

  let showBtn = document.getElementById("showBtn");
  let hideBtn = document.getElementById("hideBtn");

  showBtn.addEventListener("click", show);
  hideBtn.addEventListener("click", hide);
}

function show() {
  console.log('show');
  socket.emit('visibility', 'show');
}

function hide() {
  console.log('hide');
  socket.emit('visibility', 'hide');
}