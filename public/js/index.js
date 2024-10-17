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

// Snow fall
const snowsContainer = document.querySelector(".snows");
var snowsElements = document.querySelectorAll(".snows div");
const snowMan = document.querySelector(".snow-man");
const snows = ['<i class="fa-solid fa-snowflake"></i>', ""];
const blurs = ["0", "5px"];
var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
const count = 200;

const createSnows = () => {
  for (var i = 0; i < count; i++) {
    const left = Math.floor(Math.random() * (windowWidth + 100));
    const top = Math.floor(Math.random() * windowHeight);
    const snowIndex = Math.floor(Math.random() * 2);
    const blurIndex = Math.floor(Math.random() * 2);
    const time = Math.floor(Math.random() * 8 + 5);

    const div = document.createElement("div");
    div.innerHTML = snows[snowIndex];
    // div.style.top = "-30px";
    div.style.left = left + "px";
    div.style.top = -top + "px";
    div.style.position = "fixed";
    div.style.filter = "blur(" + blurs[blurIndex] + ")";
    div.style.zIndex = "100";

    // Snowflake
    if (snowIndex === 0) {
      const size = Math.floor(Math.random() * 10 + 14);
      div.style.fontSize = size + "px";
      div.style.color = "#fafafa";
    } else {
      const size = Math.floor(Math.random() * 10 + 5);
      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.backgroundColor = "#fafafa";
      div.style.borderRadius = "50%";
    }

    div.style.animation = "snowFall " + time + "s ease-in infinite";

    snowsContainer.appendChild(div);
  }

  snowsElements = document.querySelectorAll(".snows div");
};

const deleteSnows = () => {
  snowsElements.forEach((snow) => {
    snow.style.animationIterationCount = "1";
    snow.addEventListener("animationend", () => {
      snow.remove();
    });
  });

  const currentLeft = window.getComputedStyle(snowMan).left;
  snowMan.style.setProperty("--snowman-left", currentLeft);
  snowMan.classList.add("hide");
};

const startSnowFall = () => {
  snowMan.classList.remove("hide");
  createSnows();
};

startSnowFall();

window.addEventListener("click", () => {
  deleteSnows();
});
