---
layout: default
title: CollegeApp Scout
permalink: /home-page
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #3498db;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
        }
        .college-button {
            background-color: #2ecc71;
            color: #fff;
            padding: 15px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 200px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
        }
        #chatbot-icon {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: #3498db;
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
        }
    </style>
    <title>College Application Tracker</title>
</head>
<body>
    <header>
        <h1 id="welcome-message">Welcome, Guest</h1>
    </header>
    <main>
        <title>Your Colleges</title>
        <!--POST USER'S COLLEGE LIST HERE-->
        <title>Search Colleges</title>
        <!--BUTTON TO UPDATE COLLEGES-->
        <!--POST FULL COLLEGE LIST HERE-->
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
</html>
