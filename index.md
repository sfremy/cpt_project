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
        <title>Your Colleges</title>
        <div id="table-container"></div>
        <title>Search Colleges</title>
        <!--BUTTON TO UPDATE COLLEGES-->
        <title>All Colleges</title>
        <div id="full-table"></div>
        <p>Please spell college names correctly and separate with spaces to prevent formatting errors.</p>
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
        async function getUserColleges() {
            const url = uri + '/api/users/get_user_colleges';
            fetch(url)
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.classList.add('user-colleges-table');
                // Create table header
                const headerRow = table.insertRow();
                for (const key in data[0]) {
                    const headerCell = document.createElement('th');
                    headerCell.textContent = key;
                    headerRow.appendChild(headerCell);
                }
                // Create table body
                data.forEach(college => {
                    const row = table.insertRow();
                    for (const key in college) {
                        const cell = row.insertCell();
                        cell.textContent = college[key];
                    }
                });
                // Append the table to a container element in your HTML
                const container = document.getElementById('table-container');
                container.innerHTML = ''; // Clear previous content
                container.appendChild(table);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        async function getCollegeTable() {
            const url = uri + '/api/users/get_table';
            fetch(url)
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.classList.add('colleges-table');
                // Create table header
                const headerRow = table.insertRow();
                for (const key in data[0]) {
                    const headerCell = document.createElement('th');
                    headerCell.textContent = key;
                    headerRow.appendChild(headerCell);
                }
                // Create table body
                data.forEach(college => {
                    const row = table.insertRow();
                    for (const key in college) {
                        const cell = row.insertCell();
                        cell.textContent = college[key];
                    }
                });
                // Append the table to a container element in your HTML
                const container = document.getElementById('full-table');
                container.innerHTML = ''; // Clear previous content
                container.appendChild(table);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        //Onclick function to pass string taken from text window to ulist_update as variable ulist, with uid.
        window.onload = updateWelcomeMessage;
    </script>
</body>
<script>
window.embeddedChatbotConfig = {
chatbotId: "i0qi9UFe_VVLBFzSJ5_35",
domain: "www.chatbase.co"
}
</script>
<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="i0qi9UFe_VVLBFzSJ5_35"
domain="www.chatbase.co"
defer>
</script>