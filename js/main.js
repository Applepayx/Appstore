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

    // Random timeout for loading (3 to 10 seconds)
    const randomTimeout = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

    // After random timeout, stop the loading animation and show the crash screen
    setTimeout(() => {
        clearInterval(loadingInterval);
        loadingScreen.classList.add("hidden");
        crashScreen.classList.remove("hidden");

        // Typewriter effect for the console
        const messages = [
            "[ERROR] Failed to load resources.",
            "[ERROR] Update process interrupted.",
            "[CRITICAL] System crash detected.",
            "[INFO] Restarting process...",
            "[ERROR] Restart failed. Manual intervention required."
        ];
        let messageIndex = 0;
        let charIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                const currentMessage = messages[messageIndex];
                if (charIndex < currentMessage.length) {
                    consoleElement.innerHTML += currentMessage[charIndex];
                    charIndex++;
                    setTimeout(typeMessage, 50); // Type each character
                } else {
                    consoleElement.innerHTML += "<br>"; // Add a line break after the message
                    charIndex = 0;
                    messageIndex++;
                    setTimeout(typeMessage, 500); // Pause before the next message
                }
            } else {
                // Redirect to Apple's bug report page after all messages are displayed
                setTimeout(() => {
                    window.location.href = "https://www.apple.com/feedback/";
                }, 2000); // Wait 2 seconds before redirecting
            }
        };

        typeMessage();
    }, randomTimeout); // Use random timeout for loading
});
