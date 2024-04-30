---
toc: true
layout: post
title: Delete colleges from your list here!
type: hacks
permalink: /delete_colleges
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        button {
            background-color: #f44336;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #d32f2f;
        }
        .message {
            margin-top: 20px;
            padding: 10px;
            color: white;
            background-color: #4CAF50; /* Green */
            border-radius: 5px;
            font-size: 18px;
        }
        .error-message {
            margin-top: 20px;
            padding: 10px;
            color: white;
            background-color: #FF0000; /* Red */
            border-radius: 5px;
            font-size: 18px;
        }
    </style>

</head>
<body>
    <h2>Delete colleges from your list here!</h2>
    <form id="deleteCollegesForm">
        <label for="name">Username:</label>
        <input type="text" id="name" name="name" required>
        <label for="colleges">Colleges to Delete (Comma-separated):</label>
        <input type="text" id="names" name="names" required>
        <button type="submit">Delete Colleges</button>
    </form>
    <div id="message" class="message" style="display: none;"></div>
    <div id="error" class="error-message" style="display: none;"></div>

<script type="module">

import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
const apiURL = uri + '/api/users/edit';

    document.getElementById('deleteCollegesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const names = document.getElementById('names').value.split(',').map(names => names.trim()); // Changed from 'colleges' to 'names'

    fetch(apiURL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            names: names, // Changed variable name to 'names'
        }),
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('message');
        messageElement.innerText = data.message;
        messageElement.style.display = 'block';

        // Display original college list, colleges selected to delete, and resulting college list
        const originalListElement = document.createElement('div');
        originalListElement.innerText = `Original College List: ${data.original_college_list.join(', ')}`;
        messageElement.appendChild(originalListElement);

        const deletedListElement = document.createElement('div');
        deletedListElement.innerText = `Colleges Deleted: ${data.colleges_to_delete.join(', ')}`;
        messageElement.appendChild(deletedListElement);

        const resultingListElement = document.createElement('div');
        resultingListElement.innerText = `Resulting College List: ${data.resulting_college_list.join(', ')}`;
        messageElement.appendChild(resultingListElement);

        document.getElementById('error').style.display = 'none';
    })
    .catch(error => {
        document.getElementById('error').innerText = 'An error occurred: ' + error.message;
        document.getElementById('error').style.display = 'block';
        document.getElementById('message').style.display = 'none';
    });
});

</script>
</body>
</html>
