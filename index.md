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
        <h2>FIND COLLEGES</h2>
        <ul id="appList">
        </ul>
        <button onclick="addUserColleges()">Submit Selections</button><br><br><br><br>
        <a href='{{site.baseurl}}/predictor'>Click here to predict your admission decision!</a><br><br>
        <a href='{{site.baseurl}}/delete_colleges'>Click here to delete colleges</a><br><br>
        <aside id="newsSection">
          <h3>Recent college news</h3>
          <article>
            <h4>News Title</h4>
            <p>News summary...</p>
          </article>
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

function getFullList() {
  // Fetching edit endpoint
  fetch('http://127.0.0.1:8086/api/users/edit')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      data.forEach(item => {
        // Create an <li> element
        var listItem = document.createElement('li');

        // Create an <img> element with the image URL
        var image = document.createElement('image');
        image.src = item.image; // Access 'img' property from JSON

        // Create a text node with the 'name' property as content
        var textNode = document.createTextNode(item.name); // Access 'name' property from JSON

        // Append the image and text to the <li> element
        listItem.appendChild(image);
        listItem.appendChild(textNode);

        // Append the <li> element to the <ul> section
        document.getElementById('appList').appendChild(listItem);
      });
    })
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the request
}

//Generate this list when the page loads
document.addEventListener('DOMContentLoaded',getFullList)

function updateUserList() {
  // Fetching edit endpoint
  fetch('http://127.0.0.1:8086/api/users/edit', {
    method: 'POST', // Make a POST request to backend
    headers: {
      'Content-Type': 'application/json' // Set the content type header
    },
    body: JSON.stringify({name: document.getElementById("name").value}) //Get username
    })
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        // Create an <li> element
        var listItem = document.createElement('li');

        // Create an <img> element with the image URL
        var image = document.createElement('image');
        image.src = item.image; // Access 'img' property from JSON

        // Create a text node with the 'name' property as content
        var textNode = document.createTextNode(item.name); // Access 'name' property from JSON

        // Create an anchor element for redirect
        var link = document.createElement('a');
        link.href = item.url; // Access 'url' property from JSON
        link.appendChild(textNode); // Append the text node to the anchor

        // Append the image and link to the <li> element
        listItem.appendChild(image);
        listItem.appendChild(textNode);
        listItem.appendChild(link);

        // Append the <li> element to the <ul> section
        document.getElementById('api_applist').appendChild(listItem);
      });
    })
    .catch(error => {
      // Display error in a popup window
      window.alert('Error: ' + error);
    });// Handle any errors that occur during the request
}

//Make appList selectable
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to each list item
  document.querySelectorAll('#appList > li').forEach(item => {
    item.addEventListener('click', () => {
      // Toggle the 'selected' class when clicked
      item.classList.toggle('selected');
    });
  });
});

// Function to retrieve selected items
function getSelectedItems() {
  return document.querySelectorAll('#appList > li.selected');
}

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
  fetch('http://127.0.0.1:8086/api/users/edit', {
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
</script>

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