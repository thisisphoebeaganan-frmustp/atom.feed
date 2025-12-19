// Simple prototype logic
document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("feed");
  if (feed) {
    const posts = feed.querySelectorAll(".post");
    posts.forEach(post => {
      if (post.classList.contains("brainrot")) {
        post.innerHTML += "<p>⚛️ Atomized!</p>";
      }
    });
  }
});

fetch("http://localhost:5000/feed")
  .then(res => res.json())
  .then(data => {
    console.log("Feed:", data);
  });
