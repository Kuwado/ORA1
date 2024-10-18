const handleSidebarOpen = () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  sidebar.classList.add("active");
  overlay.style.display = "block";
};

const handleSidebarClose = () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  sidebar.classList.remove("active");
  overlay.style.display = "none";
};

const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  handleSidebarClose();
});

// Active sidebar-item
const sbitems = document.querySelectorAll(".sidebar-item");
const articles = document.querySelectorAll(".article");

const handleSidebarClick = (element) => {
  element.classList.add("active");
  handleSidebarClose();
};

const checkSidebarItemPosition = () => {
  articles.forEach((item, index) => {
    const rect = item.getBoundingClientRect();

    if (rect.top <= 1 && rect.bottom > 1) {
      sbitems[index].classList.add("active");
    } else {
      sbitems[index].classList.remove("active");
    }
  });
};

handleSidebarClick(sbitems[0]);
window.addEventListener("scroll", checkSidebarItemPosition);
