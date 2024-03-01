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
        input[type="search"] {
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
    <header>
        <input type="search" placeholder="Search for colleges..." id="collegeSearch">
    </header>
    <main>
        <section id="reviewApplications">
            <h2>FIND COLLEGES</h2>
    <!-- 大学列表 -->
<!-- NOTE: Remove this version of appList after implementing the API-retrieved variant below.-->
<ul id="appList">
  <li data-url="https://admission.stanford.edu/apply/"><img src="https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png" alt="Stanford University Logo"><span>Stanford University</span></li>
  <li data-url="https://college.harvard.edu/admissions/apply"><img src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png" alt="Harvard University Logo"><span>Harvard University</span></li>
  <li data-url="https://apply.mitadmissions.org/portal/apply"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="MIT Logo"><span>MIT</span></li>
  <li data-url="https://admission.gatech.edu/apply/"><img src="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png" alt="Georgia Tech Logo"><span>Georgia Tech</span></li>
  <li data-url="https://admissions.duke.edu/apply/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/909px-Duke_Blue_Devils_logo.svg.png" alt="Duke University Logo"><span>Duke University</span></li>
  <li data-url="https://www.yale.edu/admissions"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/2560px-Yale_University_logo.svg.png" alt="Yale University Logo"><span>Yale University</span></li>
  <li data-url="https://admission.princeton.edu/apply"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png" alt="Princeton University Logo"><span>Princeton University</span></li>
  <li data-url="https://undergrad.admissions.columbia.edu/apply"><img src="https://admissions.ucr.edu/sites/default/files/styles/form_preview/public/2020-07/ucr-education-logo-columbia-university.png?itok=-0FD6Ma2" alt="Columbia University Logo"><span>Columbia University</span></li>
  <li data-url="https://collegeadmissions.uchicago.edu/apply"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/University_of_Chicago_Coat_of_arms.png" alt="University of Chicago Logo"><span>University of Chicago</span></li>
  <li data-url="https://admissions.berkeley.edu/apply-to-berkeley/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" alt="UC Berkeley Logo"><span>UC Berkeley</span></li>
  <li data-url="https://admission.ucla.edu/apply"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/UCLA_Bruins_primary_logo.svg/1200px-UCLA_Bruins_primary_logo.svg.png" alt="UCLA Logo"><span>UCLA</span></li>
</ul>


<!-- ------------------- CHANGED FULL LIST ENTRY ------------------- -->
<ul id="api_applist">
</ul>
<h2>REVIEW YOUR APPLICATIONS</h2>
  </section>
  <aside id="newsSection">
    <h3>Recent college news</h3>
    <!-- 新闻摘要 -->
    <article>
      <h4>News Title</h4>
      <p>News summary...</p>
    </article>

<script>
var list = document.getElementById("appList");
  // Add click event listeners to all list items
  var listItems = list.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener("click", function() {
          var url = this.getAttribute("data-url");
          window.location.href = url;
      });
  }
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
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('collegeSearch');
  const colleges = document.querySelectorAll('#reviewApplications ul li');
  searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    colleges.forEach(college => {
      const collegeName = college.textContent.toLowerCase();
      if (collegeName.includes(searchText)) {
        college.style.display = '';
      } else {
        college.style.display = 'none';
      }
    });
  });
});

import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
const apiURL = uri + 'api/users/edit'
//------------------- GENERATE FULL LIST OF ANY KIND -------------------
function generateList(jsonData,list-container) {
        const listContainer = document.getElementById(list-container);

        // Iterate over each item in the JSON data
        jsonData.forEach(item => {
            // Create list item
            const listItem = document.createElement('li');

            // Create anchor element for the URL
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.name;
            listItem.appendChild(link);

            // Create image element
            const image = document.createElement('image');
            image.src = item.image;
            listItem.appendChild(image);

            // Append list item to the container
            listContainer.appendChild(listItem);
        });
    }

//------------------- GENERATE FULL COLLEGE LIST -------------------
fetch(apiURL + '/edit')
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {
    ul_id = 'api_applist'
    generateList(data,ul_id);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });

//------------------- GENERATE USER'S COLLEGE LIST -------------------
function genUserList(){
  fetch(apiURL + '/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers as needed
    },
    body: JSON.stringify(postData), // Convert the data to JSON format
  })
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response, if needed
    return response.json();
  })
  .then(data => {
    ul_id = 'user_applist'
      generateList(data,ul_id);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });
}

//------------------- UPDATE USER'S COLLEGE LIST -------------------
function updateUser(item){
  // Make a PUT request to the backend endpoint
  fetch(apiURL + '/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item: item }), // Adjust as per your requirement
  })
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response, if needed
    return response.json();
  })
  .then(data => {
    // Process the response data, if needed
    console.log('Response from server:', data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });
}

//------------------- EVENT LISTNER FOR USER LIST -------------------
const ul = document.getElementById('api_applist');

// Attach an event listener to the <ul> element
ul.addEventListener('click', function(event) {
    // Check if the clicked element is an <li> element
    if (event.target.tagName === 'LI') {
        // Get the text content of the clicked <li> element (item.name)
        const itemName = event.target.textContent;

        // Use the itemName variable as needed
        updateUser(itemName);
        genUserList();
    }
});
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