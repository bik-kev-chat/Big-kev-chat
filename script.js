function sendMessage() {
  const input = document.getElementById("messageInput");
  const chat = document.getElementById("chat");

  const message = input.value.trim();

  if (message === "") {
    return;
  }

  const newMessage = document.createElement("div");

  newMessage.className = "message sent";
  newMessage.textContent = message;

  chat.appendChild(newMessage);

  input.value = "";

  chat.scrollTop = chat.scrollHeight;
}

document
  .getElementById("messageInput")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
