// Get all necessary elements from the HTML
const chatContainer = document.querySelector("#chat-container");
const chatHeader = document.querySelector("#chat-header");
const closeChatBtn = document.querySelector("#close-chat-btn");
const chatMessageContainer = document.querySelector("#chat-message-container");
const chatInputFile = document.querySelector("#chat-input-file");
const chatInputEmoji = document.querySelector("#chat-input-emoji");
const chatInput = document.querySelector("#chat-input");
const sendChatBtn = document.querySelector("#send-chat-btn");

// Add event listener to the close chat button
closeChatBtn.addEventListener("click", () => {
  chatContainer.style.display = "none";
});

// Add event listener to the chat input file button
chatInputFile.addEventListener("change", () => {
  const file = chatInputFile.files[0];
  console.log(`File selected: ${file.name}`);
});

// Add event listener to the chat input emoji button
chatInputEmoji.addEventListener("click", () => {
  console.log("Emoji button clicked");
});

// Add event listener to the send chat button
sendChatBtn.addEventListener("click", () => {
  const message = chatInput.value.trim();

  if (message !== "") {
    // Get the current timestamp
    const timestamp = new Date().toLocaleString();

    // Create a new message row element
    const messageRow = document.createElement("div");
    messageRow.classList.add("message-row", "sent");

    // Create the message sender element
    const messageSender = document.createElement("div");
    messageSender.classList.add("message-sender");
    messageSender.textContent = "You";
    messageRow.appendChild(messageSender);

    // Create the message body element
    const messageBody = document.createElement("div");
    messageBody.classList.add("message-body");
    messageBody.textContent = message;
    messageRow.appendChild(messageBody);

    // Create the message timestamp element
    const messageTimestamp = document.createElement("div");
    messageTimestamp.classList.add("message-timestamp");
    messageTimestamp.textContent = timestamp;
    messageRow.appendChild(messageTimestamp);

    // Create the message actions element
    const messageActions = document.createElement("div");
    messageActions.classList.add("message-actions");

    // Create the options button element
    const optionsBtn = document.createElement("button");
    optionsBtn.classList.add("options-btn");
    messageActions.appendChild(optionsBtn);

    // Create the copy message button element
    const copyMessageBtn = document.createElement("button");
    copyMessageBtn.classList.add("copy-message-btn", "hidden");
    copyMessageBtn.textContent = "Copy";
    messageActions.appendChild(copyMessageBtn);

    // Create the edit message button element
    const editMessageBtn = document.createElement("button");
    editMessageBtn.classList.add("edit-message-btn", "hidden");
    editMessageBtn.textContent = "Edit";
    messageActions.appendChild(editMessageBtn);

    // Create the delete message button element
    const deleteMessageBtn = document.createElement("button");
    deleteMessageBtn.classList.add("delete-message-btn", "hidden");
    deleteMessageBtn.textContent = "Delete";
    messageActions.appendChild(deleteMessageBtn);

    messageRow.appendChild(messageActions);

    // Append the new message row element to the chat message container
    chatMessageContainer.appendChild(messageRow);

    // Clear the chat input
    chatInput.value = "";
  }
});
