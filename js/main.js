document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const crashScreen = document.getElementById("crash-screen");
    const loadingText = document.querySelector("#loading-text");
    const consoleElement = document.querySelector(".console");

    let dots = 0;
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        loadingText.textContent = "Loading App Store" + ".".repeat(dots);
    }, 500);

    const randomTimeout = Math.floor(Math.random() * (30000 - 3000 + 1)) + 3000;

    setTimeout(() => {
        clearInterval(loadingInterval);
        loadingScreen.classList.add("hidden");
        crashScreen.classList.remove("hidden");

        const messages = [
            "[ERROR] Failed to load resources.",
            "[WARNING] Deprecated API detected.",
            "[INFO] Attempting to reconnect...",
            "[ERROR] Reconnection failed.",
            "[CRITICAL] System crash detected.",
            "[INFO] Restarting process...",
            "[ERROR] Restart failed.",
            "[DEBUG] Retrying in safe mode...",
            "[ERROR] Safe mode initialization failed.",
            "[WARNING] Disk space critically low.",
            "[ERROR] Manual intervention required."
        ];

        let messageIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                const currentMessage = messages[messageIndex];
                const messageElement = document.createElement("div");
                messageElement.classList.add("console-message");
                consoleElement.appendChild(messageElement);

                let charIndex = 0;

                const typeChar = () => {
                    if (charIndex < currentMessage.length) {
                        messageElement.textContent += currentMessage[charIndex];
                        charIndex++;
                        setTimeout(typeChar, 50); // Typing speed
                    } else {
                        messageElement.classList.add("visible"); // Add "pop-up" effect
                        consoleElement.scrollTop = consoleElement.scrollHeight; // Scroll to the latest message
                        messageIndex++;
                        setTimeout(typeMessage, 500); // Wait before the next message
                    }
                };

                typeChar();
            } else {
                setTimeout(() => {
                    window.location.href = "https://www.apple.com/feedback/";
                }, 2000);
            }
        };

        typeMessage();
    }, randomTimeout);
});
