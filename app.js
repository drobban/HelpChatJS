const socket = new WebSocket("ws://192.168.86.21:4000/socket/websocket?vsn=2.0.0");
// const socket = new WebSocket("ws://localhost:4000/socket/websocket?vsn=2.0.0");

// Connection opened
socket.addEventListener("open", (event) => {
	  var data = ["user", "0", "room:lobby", "phx_join", {"some": "param"}];
    socket.send(JSON.stringify(data));
});

socket.addEventListener("message", (event) => {
    var message = JSON.parse(event.data).pop();
    var elem = document.getElementById("chat_history");

    if ("message" in message.response) {
        elem.append(message.response.message + "\n");
    }
});

const send_button = document.getElementById("send");
send_button.addEventListener("click", (event) => {
    console.log(event);
    var input_element = document.getElementById("msg");
    var data = input_element.value;
	  var transmission = ["user", "0", "room:lobby", "message", {"message": data}];

    if (data.length > 0) {
        socket.send(JSON.stringify(transmission));
    }
    input_element.value = "";
});

const form = document.getElementById("helpchat");
form.addEventListener("submit", (event) => {
    event.preventDefault();
})
