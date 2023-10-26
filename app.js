const socket = new WebSocket("ws://localhost:4000/socket/websocket?vsn=2.0.0");

// Connection opened
socket.addEventListener("open", (event) => {
	var data = ["0", "0", "room:lobby", "phx_join", {"some": "param"}]
  socket.send(JSON.stringify(data));
	console.log("Sent message!");
});

socket.addEventListener("message", (event) => {
	console.log(event);
});
