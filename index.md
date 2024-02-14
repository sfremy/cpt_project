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
  <input type="search" placeholder="Search for colleges..." id="collegeSearch">
</header>

<main>
  <section id="reviewApplications">
    <h2>REVIEW YOUR APPLICATIONS</h2>
    <!-- 大学列表 -->
    <ul>
  <li><img src="path/to/stanford-logo.png" alt="Stanford University Logo"><span>Stanford University</span></li>
  <li><img src="path/to/harvard-logo.png" alt="Harvard University Logo"><span>Harvard University</span></li>
  <li><img src="path/to/mit-logo.png" alt="MIT Logo"><span>MIT</span></li>
  <li><img src="path/to/georgiatech-logo.png" alt="Georgia Tech Logo"><span>Georgia Tech</span></li>
  <li><img src="path/to/duke-logo.png" alt="Duke University Logo"><span>Duke University</span></li>
  <li><img src="path/to/yale-logo.png" alt="Yale University Logo"><span>Yale University</span></li>
  <!-- 添加更多大学列表项 -->
  <li><img src="path/to/princeton-logo.png" alt="Princeton University Logo"><span>Princeton University</span></li>
  <li><img src="path/to/columbia-logo.png" alt="Columbia University Logo"><span>Columbia University</span></li>
  <li><img src="path/to/uchicago-logo.png" alt="University of Chicago Logo"><span>University of Chicago</span></li>
  <li><img src="path/to/berkeley-logo.png" alt="UC Berkeley Logo"><span>UC Berkeley</span></li>
  <li><img src="path/to/ucla-logo.png" alt="UCLA Logo"><span>UCLA</span></li>
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
  </aside>

  <aside id="aiHelp">
    <button onclick="startChatbot()">Get help with our AI bot!</button>
  </aside>
</main>

<script>
// 在这里添加JavaScript
function startChatbot() {
  // 启动聊天机器人的代码
}
</script>

</body>
</html>

