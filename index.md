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
            box-sizing: border-box; /* Include padding and border in width */
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
        <h3>Your Username<h3>
        <input type="text" placeholder="Enter your username" id="name">
        <h2>REVIEW YOUR APPLICATIONS</h2>
        <ul id="api_applist">
        </ul>
        <h2>FIND COLLEGES</h2>
        <!-- 大学列表 -->
        <ul id="appList">
        </ul>
        <aside id="newsSection">
          <h3>Recent college news</h3>
          <!-- 新闻摘要 -->
          <article>
            <h4>News Title</h4>
            <p>News summary...</p>
          </article>
        </aside>

<script>
const apiURL = 'http://127.0.0.1:8086/api/users/edit';
console.log(apiURL)

// Simulate fetching news data from an API
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
  // Make a GET request to the backend API endpoint
  fetch(apiURL)
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


/**
function updateUserList() {
  fetch(apiURL, {
    method: 'POST', // Specify the POST method
    headers: {
      'Content-Type': 'application/json' // Set the content type header if sending JSON data
    },
    body: JSON.stringify(name: document.getElementById("name").value)
  }).then(response => response.json())
  .then(data => {
    const ul = document.getElementById('applist'); 
    data.forEach(item => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = item.img; // Assuming 'img' is the key for the image URL in the JSON data
      img.alt = item.name; // Assuming 'name' is the key for the name in the JSON data
      const a = document.createElement('a');
      a.href = item.link; // Assuming 'link' is the key for the URL in the JSON data
      a.textContent = item.name;
      li.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    });
  })
  .catch(error => console.error('Error:', error));
}
updateUserList();
setInterval(updateUserList, 5000);

//------------------- ADD NEW SELECTIONS TO BACKEND COLLEGE_LIST -------------------
document.addEventListener('DOMContentLoaded', function() {
  // Function to handle selecting/unselecting an item
  function toggleSelection(event) {
      event.target.classList.toggle('selected');
  }

  // Function to handle button click
  function handleButtonClick() {
      // Get all selected items
      var selectedItems = document.querySelectorAll('#appList.selected');
      
      // Extract names from selected items
      var selectedNames = [];
      selectedItems.forEach(item => {
          selectedNames.push(item.querySelector('a').textContent);
      });

      // Make a PUT request to the backend API endpoint
      fetch(apiURL, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          //Body contains selections & username
          body: JSON.stringify({name: document.getElementById("name").value, names: selectedNames })
      })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        updateUserList(); //updateUserList 
    })
      //Handle error
      .catch(error => {
        console.error('Error:', error);
        // Display error message in a popup window
        window.alert('An error occurred while processing your request. Please try again later.');
  });
}

  // Add event listeners to make items selectable
  var items = document.querySelectorAll('#appList li');
  items.forEach(item => {
      item.addEventListener('click', toggleSelection);
  });

  // Add event listener to button for handling click
  document.getElementById('submit-button').addEventListener('click', handleButtonClick);
});

*/
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