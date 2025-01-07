document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const crashScreen = document.getElementById("crash-screen");
    const loadingText = document.querySelector("#loading-text");
    const consoleElement = document.querySelector(".console");

    // Loading dots animation
    let dots = 0;
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3
        loadingText.textContent = "Loading App Store" + ".".repeat(dots);
    }, 500); // Update every 0.5 seconds

    // Random timeout for loading (3 to 30 seconds)
    const randomTimeout = Math.floor(Math.random() * (30000 - 3000 + 1)) + 3000;

    // After random timeout, stop the loading animation and show the crash screen
    setTimeout(() => {
        clearInterval(loadingInterval); // Stop the dots animation
        loadingScreen.classList.add("hidden"); // Hide the loading screen
        crashScreen.classList.remove("hidden"); // Show the crash screen

        // Fake console messages
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

        let messageIndex = 0; // Start with the first message

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                consoleElement.innerHTML += messages[messageIndex] + "<br>"; // Add message and break line
                consoleElement.scrollTop = consoleElement.scrollHeight; // Scroll to the latest message
                messageIndex++;
                setTimeout(typeMessage, 500); // Wait before typing the next message
            } else {
                // After all messages, redirect to Apple's feedback page
                setTimeout(() => {
                    window.location.href = "https://www.apple.com/feedback/";
                }, 2000);
            }
        };

        typeMessage();
    }, randomTimeout);
});
