const typeMessage = () => {
    if (messageIndex < messages.length) {
        const currentMessage = messages[messageIndex];
        if (charIndex < currentMessage.length) {
            consoleElement.innerHTML += currentMessage[charIndex];
            charIndex++;
            setTimeout(typeMessage, 50); // Type each character
        } else {
            consoleElement.innerHTML += "<br>"; // Add a line break after the message
            consoleElement.scrollTop = consoleElement.scrollHeight; // Scroll to the latest message
            charIndex = 0;
            messageIndex++;
            setTimeout(typeMessage, 500); // Pause before the next message
        }
    } else {
        // Redirect after all messages are displayed
        setTimeout(() => {
            window.location.href = "https://www.apple.com/feedback/";
        }, 2000); // Wait 2 seconds before redirecting
    }
};
