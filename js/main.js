<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
    <title>App Store</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="manifest" href="manifest.json">
    <link rel="icon" href="images/icons/icon-512x512.png" type="image/png">
    <link rel="apple-touch-icon" href="images/icons/icon-512x512.png">
</head>
<body>
    <div id="loading-screen" class="loading-screen">
        <img src="images/loading-image.png" alt="App Store Logo" class="loading-logo">
        <h2 id="loading-text">Loading App Store</h2>
    </div>
    <div id="crash-screen" class="crash-screen hidden">
        <h1>System Error</h1>
        <pre class="console"></pre>
    </div>
    <script src="js/main.js"></script>
</body>
</html>
