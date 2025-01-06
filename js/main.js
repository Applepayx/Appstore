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
        clearInterval(loadingInterval);
        loadingScreen.classList.add("hidden");
        crashScreen.classList.remove("hidden");

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

        let messageIndex = 0;
        let charIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                const
