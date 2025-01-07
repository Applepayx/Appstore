document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const crashScreen = document.getElementById("crash-screen");
    const loadingText = document.querySelector("#loading-text");
    const consoleElement = document.querySelector(".console");

    // Check if all elements are loaded properly
    if (!loadingScreen || !crashScreen || !loadingText || !consoleElement) {
        console.error("Required elements are missing in the DOM.");
        return;
    }

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
            "[ERROR] Manual intervention required.",
            "[INFO] Loading cache data...",
            "[INFO] Cleaning temporary files...",
            "[ERROR] Could not locate configuration file.",
            "[DEBUG] Attempting to recover files...",
            "[WARNING] High memory usage detected.",
            "[INFO] Optimizing system performance...",
            "[ERROR] Kernel panic detected.",
            "[CRITICAL] Out of memory exception.",
            "[INFO] Sending diagnostics report...",
            "[ERROR] Diagnostics upload failed.",
            "[INFO] Rebuilding system index...",
            "[DEBUG] Testing fallback servers...",
            "[ERROR] Fallback server not responding.",
            "[INFO] Collecting crash logs...",
            "[CRITICAL] System reboot required."
        ];

        let messageIndex = 0;
        let charIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                const currentMessage = messages[messageIndex];
                if (charIndex < currentMessage.length) {
                    consoleElement.innerHTML += currentMessage[charIndex];
      
