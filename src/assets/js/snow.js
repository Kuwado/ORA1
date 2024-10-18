// Snow fall
const snowsContainer = document.querySelector(".snows");
var snowsElements = document.querySelectorAll(".snows div");
const snowMan = document.querySelector(".snow-man");
const snows = ['<i class="fa-solid fa-snowflake"></i>', ""];
const blurs = ["0", "5px"];
var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
const count = 300;

const createSnows = () => {
  for (var i = 0; i < count; i++) {
    const left = Math.floor(Math.random() * (windowWidth + 100));
    const top = Math.floor(Math.random() * 100);
    const snowIndex = Math.floor(Math.random() * 2);
    const blurIndex = Math.floor(Math.random() * 2);
    const time = Math.floor(Math.random() * 10 + 8);

    const div = document.createElement("div");
    div.innerHTML = snows[snowIndex];
    // div.style.top = "-30px";
    div.style.left = left + "px";
    div.style.top = -top + "vh";
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
  snowsContainer.innerHTML = "";
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
