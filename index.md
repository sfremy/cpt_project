---
layout: default
title: MyScout
permalink: /myscout
---

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>College Application Portal</title>
<style>
body {
  font-family: 'Arial', sans-serif;
  background: #f0f0f0;
  margin: 0;
  padding: 20px;
}
header {
  margin-bottom: 30px;
}
input[type="search"] {
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
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
}
#reviewApplications ul li {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 2px solid #888;
  border-radius: 20px;
  transition: all 0.3s ease;
}
#reviewApplications ul li:hover {
  border-color: #0056b3;
  background-color: #e0f0ff;
  cursor: pointer;
}
#reviewApplications ul li img {
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}
#newsSection {
  float: right;
  width: 30%;
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
#aiHelp button {
  border: none;
  background: none;
  color: #0056b3;
  font-size: 1rem;
  cursor: pointer;
}
@media (max-width: 768px) {
  #newsSection {
    float: none;
    width: 100%;
    margin-top: 20px;
  }
}
</style>
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
<script>
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
</script>
