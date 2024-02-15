<html lang="en">
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
  <input type="search" placeholder="Search for colleges..." id="collegeSearch">
</header>

<main>
  <section id="reviewApplications">
    <h2>REVIEW YOUR APPLICATIONS</h2>
    <!-- 大学列表 -->
    <ul>
  <li><img src="https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png" alt="Stanford University Logo"><span>Stanford University</span></li>
  <li><img src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png" alt="Harvard University Logo"><span>Harvard University</span></li>
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="MIT Logo"><span>MIT</span></li>
  <li><img src="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png" alt="Georgia Tech Logo"><span>Georgia Tech</span></li>
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/909px-Duke_Blue_Devils_logo.svg.png" alt="Duke University Logo"><span>Duke University</span></li>
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/2560px-Yale_University_logo.svg.png" alt="Yale University Logo"><span>Yale University</span></li>
  <!-- 添加更多大学列表项 -->
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png" alt="Princeton University Logo"><span>Princeton University</span></li>
  <li><img src="https://admissions.ucr.edu/sites/default/files/styles/form_preview/public/2020-07/ucr-education-logo-columbia-university.png?itok=-0FD6Ma2" alt="Columbia University Logo"><span>Columbia University</span></li>
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/University_of_Chicago_Coat_of_arms.png" alt="University of Chicago Logo"><span>University of Chicago</span></li>
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" alt="UC Berkeley Logo"><span>UC Berkeley</span></li>
  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/UCLA_Bruins_primary_logo.svg/1200px-UCLA_Bruins_primary_logo.svg.png" alt="UCLA Logo"><span>UCLA</span></li>
  <!-- 确保所有图片路径都是正确的 -->
</ul>
  </section>
  <aside id="newsSection">
    <h3>Recent college news</h3>
    <!-- 新闻摘要 -->
    <article>
      <h4>News Title</h4>
      <p>News summary...</p>
    </article>
    <!-- 其他新闻摘要 -->
</main>

</body>

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

<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="i0qi9UFe_VVLBFzSJ5_35"
domain="www.chatbase.co"
defer>
</script>   

</html>
