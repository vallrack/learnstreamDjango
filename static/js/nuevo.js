function showPage(pageId) {
  let pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function sendMessage() {
  document.getElementById("message").innerText =
    "Thank you! We received your message.";
}