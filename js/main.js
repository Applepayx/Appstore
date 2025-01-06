
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const crashScreen = document.getElementById("crash-screen");

    // Simulate loading for 5 seconds before showing the crash screen
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        crashScreen.classList.remove("hidden");
    }, 5000);
});
