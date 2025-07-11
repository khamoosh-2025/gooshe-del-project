const articles = [
  {
    title: "کلام پخته",
    content: "اینجا متنی از دل آمده، بی‌سانسور و بی‌نقاب..."
  }
];

const container = document.getElementById("articles");
articles.forEach(article => {
  const el = document.createElement("article");
  el.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
  container.appendChild(el);
});
