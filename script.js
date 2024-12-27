document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage('bot', botResponse);
    }, 500);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.textContent = message;

    messageElement.appendChild(contentElement);
    document.getElementById('chat-body').appendChild(messageElement);
    messageElement.scrollIntoView();
}

function getBotResponse(input) {
    // Simple example responses
    const responses = {
        'hi': 'Hello! How can I assist you today?',
        'hello': 'Hi there! What can I do for you?',
        'how are you': 'I\'m a bot, but I\'m here to help you!',
        'bye': 'Goodbye! Have a great day!'
    };

    // Return response if known, else default message
    return responses[input.toLowerCase()] || 'I\'m sorry, I didn\'t understand that.';
}
