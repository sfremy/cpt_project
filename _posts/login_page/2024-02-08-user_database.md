---
layout: base
title: Database Get
hide: true
description: An advanced example of database CRUD (Create, Read, Update, Delete).  This articles is focussed on Read.  Each operation works asynchronously between JavaScript and a Python/Flask backend Database.  This requires a set of Python RESTful API services for Get, Put, Delete, and Update.
permalink: /data/database
---

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #4CAF50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

<!-- HTML table layout for page.  The table is filled by JavaScript below. -->
<h2>SQL Database Fetch</h2>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<div>
  <button onclick='window.location.href = "{{site.baseurl}}/lmc-editUser"'>Edit User</button>
</div>

<div>
  <button onclick='window.location.href = "{{site.baseurl}}/lmc-deleteUser"'>Delete User</button>
</div>

<p><a href="{{site.baseurl}}/login-redirect">Return to home page</a></p>

<!-- 
Below JavaScript code fetches user data from an API and displays it in a table. It uses the Fetch API to make a GET request to the '/api/users/' endpoint.   Refer to config.js to see additional options. 
-->
<script type="module">
  // uri variable and options object are obtained from config.js
  import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

  // Set Users endpoint (list of users)
  const url = uri + '/api/users/';

  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
        if (response.status === 401) {
          // Unauthorized - Redirect to 401 error page
          window.location.href = "/lmc-frontend/lmc-login";
        } else if (response.status === 403) {
          // Forbidden - Redirect to 403 error page
          alert(response.status + " error. Redirecting you to the login")
          const errorMsg = 'Database response error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          window.location.href = "/lmc-frontend/lmc-login";
          return;
        }
      }
      // valid response will contain JSON data
      response.json().then(data => {
        console.log(data);
        for (const row of data) {
          // tr and td build out for each row
          const tr = document.createElement("tr");
          const name = document.createElement("td");
          const id = document.createElement("td");
          const age = document.createElement("td");
          const email = document.createElement("td");
          // data is specific to the API
          name.innerHTML = row.name;
          id.innerHTML = row.uid;
          age.innerHTML = row.age;
          email.innerHTML = row.email;
          // this builds td's into tr
          tr.appendChild(name);
          tr.appendChild(id);
          tr.appendChild(age);
          tr.appendChild(email);
          // append the row to table
          resultContainer.appendChild(tr);
        }
      });
    })
    // catch fetch errors (ie ACCESS to server blocked)
    .catch(err => {
      console.error(err);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = err + ": " + url;
      tr.appendChild(td);
      resultContainer.appendChild(tr);
    });
</script>