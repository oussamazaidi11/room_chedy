function sendMessage() {
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();
    
    if (messageText === "") return;
    
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.textContent = messageText;
    messageElement.classList.add("chat-message");
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    messageInput.value = "";
    
    // Send the message to the server
    sendToServer(messageText);
    
    // Simulate latency
    setTimeout(() => {
        // Simulate a response from the server
        const responseElement = document.createElement("div");
        responseElement.textContent = "Server response: Message received!";
        responseElement.classList.add("chat-response");
        
        chatBox.appendChild(responseElement);
        // Simulate a JSON response from the server
        const jsonResponse = {
            "message": "Message received!",
            // Add more properties as needed
            "timestamp": new Date().toISOString()
        };
        
        responseElement.textContent = JSON.stringify(jsonResponse, null, 2);
        
        chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000);
        
    // Simulate a typing indicator
    const typingIndicator = document.createElement("div");
    typingIndicator.textContent = "User is typing...";
    typingIndicator.classList.add("typing-indicator");
    
    chatBox.appendChild(typingIndicator);
    setTimeout(() => {
        chatBox.removeChild(typingIndicator);
    }, 3000);
    
    // Update the user's status
    updateStatus("typing");
    
    // Simulate a notification for new messages
    const notification = document.createElement("div");

}
