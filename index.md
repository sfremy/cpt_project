---
layout: default
title: MyScout
permalink: /myscout
---
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Application Portal</title>
    <style>
      /* ChatGPT assistance was used for some CSS syntax and elements */
        body {
            font-family: 'Arial', sans-serif;
            background: #F0F0F0;
            margin: 0;
            padding: 20px;
            display: flex; /* Use flexbox to organize content */
            flex-wrap: wrap; /* Allow content to wrap to the next line */
        }
        header {
            margin-bottom: 30px;
            width: 100%;
            box-sizing: border-box;
        }
        input[type="text"] {
            padding: 10px;
            font-size: 1rem;
            border: 2px solid #000;
            border-radius: 20px;
            width: 100%;
            max-width: 400px;
        }
        #mainContent {
            flex-grow: 1; /* Allow main content to grow to fill remaining space */
            margin-right: 20px;
        }
        #reviewApplications {
            text-align: center;
        }
        #reviewApplications h2 {
            color: #333;
            margin-bottom: 20px;
        }
        #reviewApplications ul {
            list-style: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap; /* Allow colleges to wrap to the next line */
            justify-content: center; /* Center the content horizontally */
        }
        #reviewApplications ul li {
            margin: 10px;
            padding: 10px;
            border: 2px solid #888;
            border-radius: 20px;
            transition: all 0.3s ease;
            flex: 1 0 200px; /* Allow each college to grow to 200px width, shrink to fit */
        }
        #reviewApplications ul li:hover {
            border-color: #0056B3;
            background-color: #E0F0FF;
            cursor: pointer;
        }
        #reviewApplications ul li img {
            height: 30px;
            margin-right: 10px;
            vertical-align: middle;
        }
        #newsSection {
            flex-basis: 30%; /* Set a fixed width for the news section */
            background: #fff;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        #newsSection h3 {
            margin-top: 0;
        }
        #newsSection article {
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        #aiHelp {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #fff;
            border: 2px solid #888;
            border-radius: 50px;
            padding: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        #aiHelp button {
            border: none;
            background: none;
            color: #0056B3;
            font-size: 1rem;
            cursor: pointer;
        }
        @media (max-width: 768px) {
            #newsSection {
                flex-basis: 100%; /* Full width on smaller screens */
                margin-top: 20px;
            }
        }
        .selected {
          background-color: blue; /* Define the highlight color */
        }
        .highlight {
          background-color: red; /* Define the highlight color */
        }
    </style>
</head>
<body>
    <main>
      <section id="reviewApplications">
        <h3>Your Username</h3>
        <input type="text" placeholder="Enter your username" id="name">
        <h2>REVIEW YOUR APPLICATIONS</h2>
        <ul id="api_applist">
        </ul>
        <button id="delete">Delete Selections</button>
        <br>
        <h2>FIND COLLEGES</h2>
        <ul id="appList">
        </ul>
        <button id="submit">Submit Selections</button>
        <br>
        <h2>MATCH COLLEGES</h2>
        <input type="text" placeholder="Desired tuition" id="tuition">
        <input type="text" placeholder="Weight" id="tuition_weight">
        <input type="text" placeholder="Number of students" id="num">
        <input type="text" placeholder="Weight" id="num_weight">
        <input type="text" placeholder="Student-faculty ratio (X:1)" id="ratio">
        <input type="text" placeholder="Weight" id="ratio_weight">
        <input type="text" placeholder="Safety score (incidents/100)" id="safety">
        <input type="text" placeholder="Weight" id="safety_weight">
        <input type="text" placeholder="Graduation rate" id="grad">
        <input type="text" placeholder="Weight" id="grad_weight">
        <button id="params">Submit Parameters</button>
        <p>Note: percent matches are relative to an hypothetical 'ideal college' which perfectly matches specificiations.</p>
        <ul id="matched_list">
        </ul>
        <br>
        <br>
        <br>
        <aside id="newsSection">
          <h3>Recent college news</h3>
          <article>
            <h4>News Title</h4>
            <p>News summary...</p>
          </article>
        </aside>
        <aside>
          <h1>Admission Predictor</h1>
          <p>This assesses whether you are likely to get into the UC given your SAT, GPA, and number of extracurriculars.</p>
          <p id="predictionResult"></p>
          <div class="container">
            <div class="input-box">
              <label for="sat">SAT Score:</label><br>
              <input type="number" id="sat" name="sat" placeholder="SAT score">
            </div>
            <div class="input-box">
              <label for="gpa">GPA:</label><br>
              <input type="number" step="0.01" id="gpa" name="gpa" placeholder="GPA">
            </div>
            <div class="input-box">
              <label for="extracurriculars">Extracurriculars:</label><br>
              <input type="number" id="Extracurricular_Activities" name="Extracurricular_Activities" placeholder="Extracurriculars">
            </div>
            <br>
            <button class="btn" id="checkCompatibility">Check</button>
          </div>
        </aside>
<script type="module">
  // COLLABORATIVE CODE - Simulate fetching news data from an API
  function fetchNews() {
    // Example static news data
    const newsData = [
      { title: "College Applications Reach Record Numbers", summary: "The number of college applications has hit a new record this year, with universities seeing a significant increase in submissions." },
      { title: "Scholarship Opportunities Expand", summary: "Several new scholarship programs have been announced, aiming to support students from diverse backgrounds in achieving their higher education goals." },
      { title: "Innovative STEM Programs Launched", summary: "Leading universities are introducing cutting-edge STEM programs to keep pace with the rapidly evolving demands of the tech industry." }
    ];
    return newsData;
  }
  // Written by group member
  function updateNewsSection() {
    const newsData = fetchNews();
    const newsSection = document.getElementById('newsSection');
    // Clear existing news content
    newsSection.innerHTML = '<h3>Recent college news</h3>';
    // Dynamically create and append news articles
    newsData.forEach(news => {
      const article = document.createElement('article');
      const title = document.createElement('h4');
      const summary = document.createElement('p');
      title.textContent = news.title;
      summary.textContent = news.summary;
      article.appendChild(title);
      article.appendChild(summary);
      newsSection.appendChild(article);
    });
  }
  // Call the function to update the news section when the page loads
  document.addEventListener('DOMContentLoaded', updateNewsSection);
  // Written by group member
  function getFullList() {
    // Fetching edit endpoint
    fetch('http://127.0.0.1:8086/api/users2/edit')
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        data.forEach(item => {
          // Create an <li> element
          var listItem = document.createElement('li');
          // Create an <img> element with the image URL
          var image = document.createElement('img');
          image.src = item.image; // Access 'img' property from JSON
          // Create a text node with the 'name' property as content
          var textNode = document.createTextNode(item.name); // Access 'name' property from JSON
          // Append the image and text to the <li> element
          listItem.appendChild(image);
          listItem.appendChild(textNode);
          // Append the <li> element to the <ul> section
          document.getElementById('appList').appendChild(listItem);
          listItem.addEventListener('click', function() {
            // Toggle the 'selected' class when clicked
            listItem.classList.toggle('selected');
          });
        });
      })
      .catch(error => console.error('Error:', error)); // Handle any errors that occur during the request
  }
  //Generate this list when the page loads
  document.addEventListener('DOMContentLoaded',getFullList);
  // Written by group member
  function updateUserList() {
    // Clear the extant list
    document.getElementById('api_applist').innerHTML = '';
    // Fetching edit endpoint
    fetch('http://127.0.0.1:8086/api/users2/edit', {
        method: 'POST', // Make a POST request to backend
        headers: {
            'Content-Type': 'application/json' // Set the content type header
        },
        body: JSON.stringify({ name: document.getElementById("name").value }) // Get username
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            // Create an <li> element
            var listItem = document.createElement('li');
            // Create an <img> element with the image URL
            var image = document.createElement('img');
            image.src = item.image; // Access 'img' property from JSON
            // Create a text node with the 'name' property as content
            var textNode = document.createTextNode(item.name); // Access 'name' property from JSON
            // Create an anchor element for redirect
            var link = document.createElement('a');
            link.href = item.url; // Access 'url' property from JSON
            link.appendChild(textNode); // Append the text node to the anchor
            // Append the image and link to the <li> element
            listItem.appendChild(image);
            listItem.appendChild(link); // Append the link (which contains textNode) to the <li>
            // Append the <li> element to the <ul> section
            document.getElementById('api_applist').appendChild(listItem);
            listItem.addEventListener('click', function() {
              // Toggle the 'selected' class when clicked
              listItem.classList.toggle('highlight');
            });
        });
    })
    .catch(error => {
        // Display error in a popup window
        window.alert('Error: ' + error);
    }); // Handle any errors that occur during the request
  }
  // Function to retrieve selected items
  function getSelectedItems() {
    return document.querySelectorAll('#appList > li.selected');
  }
  // Written collaboratively
  function addUserColleges() {
    // Get all selected items
    var selectedItems = getSelectedItems();
    // Extract names from selected items
    var selectedNames = [];
    selectedItems.forEach(item => {
        // Find the text node within the list item
        var textNode = item.childNodes[1]; // Assuming the text node is the second child
        selectedNames.push(textNode.textContent);
    });
    // Make a PUT request to the backend API endpoint
    fetch('http://127.0.0.1:8086/api/users2/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        //Body contains selections & username
        body: JSON.stringify({
          id: document.getElementById("name").value,
          college_list: selectedNames
          })
      })
      .then(response => response.json())
      .then(data => {
        updateUserList(); //updateUserList
      })
      .catch(error => {
        // Display error in a popup window
        window.alert('Error: ' + error);
      });// Handle any errors that occur during the request
  }
  function getDeletions() {
    return document.querySelectorAll('#api_applist > li.highlight');
  }
  function deleteUserColleges() {
    var deletions = getDeletions();
    var deletedNames = [];
    deletions.forEach(item => {
        // Find the text node within the anchor element
        var link = item.querySelector('a');
        if (link) {
            var textNode = link.firstChild;
            if (textNode) {
                deletedNames.push(textNode.textContent);
            }
        }
    });
    fetch('http://127.0.0.1:8086/api/users2/edit', {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
      // Body contains selections & username
      body: JSON.stringify({
        id: document.getElementById("name").value,
        college_list: deletedNames
      })
    })
    .then(response => response.json())
    .then(data => {
      updateUserList(); // updateUserList
    })
    .catch(error => {
      // Display error in a popup window
      window.alert('Error: ' + error);
    });
  }
  function reportRankings() {
    // Gather inputs
    const inputs = [
      { key: '_tuition', value: parseFloat(document.getElementById('tuition').value), weight: parseFloat(document.getElementById('tuition_weight').value) },
      { key: '_studentCount', value: parseFloat(document.getElementById('num').value), weight: parseFloat(document.getElementById('num_weight').value) },
      { key: '_studentFaculty', value: parseFloat(document.getElementById('ratio').value), weight: parseFloat(document.getElementById('ratio_weight').value) },
      { key: '_safetyScore', value: parseFloat(document.getElementById('safety').value), weight: parseFloat(document.getElementById('safety_weight').value) },
      { key: '_graduationrate', value: parseFloat(document.getElementById('grad').value), weight: parseFloat(document.getElementById('grad_weight').value) }
    ];
    // Construct JSON object
    let jsonData = {};
    inputs.forEach(input => {
      if (!isNaN(input.value)) { // Check if the value is a valid number
        jsonData[input.key] = [input.value, input.weight];
      }
    });
    // Make sure there is data to send
    if (Object.keys(jsonData).length > 0) {
      // Send data via fetch
      fetch('http://127.0.0.1:8086/api/users2/prediction', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      })
      .then(response => response.json())
      .then(data => {
        const entries = Object.entries(data);
        // Sort the array by the values
        entries.sort((a, b) => a[1] - b[1]);
        // Get the <ul> element where the list items will be appended
        const ulElement = document.getElementById('matched_list');
        // Clear any existing list items
        ulElement.innerHTML = '';
        // Iterate over the sorted array and create <li> elements
        entries.forEach(entry => {
          const [name, value] = entry;
          // Create an <li> element
          const listItem = document.createElement('li');
          // Create a text node with the 'name' property as content
          const textNode = document.createTextNode(`${name}: ${(100/value).toFixed(2)}% Match`);
          // Append the text to the <li> element
          listItem.appendChild(textNode);
          // Append the <li> element to the <ul> section
          ulElement.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      alert('Please fill in at least one input field.');
    }
  }
  document.getElementById("submit").onclick = addUserColleges;
  document.getElementById("delete").onclick = deleteUserColleges;
  document.getElementById("params").onclick = reportRankings;
</script>
<script>
  function makePrediction() {
      var gpa = document.getElementById("gpa").value;
      var sat = document.getElementById("sat").value;
      var extracurriculars = document.getElementById("Extracurricular_Activities").value;
      if (sat > 1600) {
          alert("SAT score cannot exceed 1600");
          return;
      }
      if (gpa > 5) {
          alert("GPA cannot exceed 5");
          return;
      }
      var data = {
          gpa: gpa,
          SAT: sat,
          Extracurricular_Activities: extracurriculars
      };
      fetch('http://127.0.0.1:8086/api/users2/prediction', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(result => {
          var predictionResultElement = document.getElementById("predictionResult");
          if (result === "Accepted") {
              predictionResultElement.style.color = "green";
              createConfetti();
          } else if (result === "Waitlisted") {
              predictionResultElement.style.color = "yellow";
          } else if (result === "Rejected") {
              predictionResultElement.style.color = "red";
          }
          predictionResultElement.textContent = result;
          alert("Prediction successful: " + result); 
      })
      .catch(error => {
          console.error('Error:', error);
          alert("Prediction request failed: " + error.message); 
      });
  }
  function createConfetti() {
      for (var i = 0; i < 100; i++) {
          var confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.left = Math.random() * window.innerWidth + 'px';
          confetti.style.animationDelay = Math.random() * 4 + 's';
          confetti.style.backgroundColor = getRandomColor();
          document.body.appendChild(confetti);
      }
  }
  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  document.getElementById("checkCompatibility").addEventListener("click", makePrediction);
</script>
<!-- Collaborative code for AI chatbot integration -->
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