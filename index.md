---
layout: default
title: MyScout
permalink: /myscout
---

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="styling/scss/login.css">
<div id="titleContainer">
    <h1 id="title">CollegeApp Scout</h1>
</div>

<div class="background">

</div>
</head>
<body>
    <header>
        <h1 id="welcome-message">Welcome, Guest</h1>
    </header>
    <main>
        <button class="college-button">College 1</button>
        <button class="college-button">College 2</button>
        <button class="college-button">College 3</button>
        <button class="college-button">College 4</button>
        <!-- Add more college buttons as needed -->
        <!-- Chatbot icon -->
        <div id="chatbot-icon">&#128172;</div>
    </main>
    <script>
        // Function to fetch username from the API
        async function fetchUsername() {
            try {
                const url = uri + '/api/users/'
                const response = await fetch(url); // Replace with your actual API endpoint
                const data = await response.json();
                return data.username; // Assuming the API response has a property 'username'
            } catch (error) {
                console.error('Error fetching username:', error);
                return null;
            }
        }
        // Update the welcome message after fetching the username
        async function updateWelcomeMessage() {
            const username = await fetchUsername();
            if (username) {
                // Update the content of the h1 element
                document.getElementById('welcome-message').textContent = `Welcome, ${username}`;
            } else {
                // Handle the case where fetching username fails
                document.getElementById('welcome-message').textContent = `Welcome, Guest`;
            }
        }
        // Call the function when the page loads or after a successful login
        window.onload = updateWelcomeMessage;
    </script>
</body>
