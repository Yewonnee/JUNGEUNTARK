let categories = {
    epm2022: [
    "img/76.jpeg",
    "img/26.jpeg"
  ],
  exhibition: [
    "img/14.jpeg",
    "img/18.jpeg",
    "img/22.jpeg",
    "img/23.jpeg",
    "img/79.jpeg",
    "img/80.jpeg"
  ],
  teabowl: [
    "img/72.jpeg",
    "img/32.jpeg",
    "img/33.jpeg",
    "img/38.jpeg"
  ],
    hold: [
    "img/66.jpeg",
    "img/67.jpeg",
    "img/68.jpeg",
    "img/69.jpeg",
    "img/70.jpeg",
    "img/71.jpeg"
  ],
  cotton: [
    "img/59.jpeg",
    "img/62.jpeg",
    "img/63.jpeg",
    "img/65.jpeg"
  ],
  tree: [
    "img/27.jpeg",
    "img/28.jpeg",
    "img/43.jpeg",
    "img/49.jpeg",
    "img/46.jpeg"
  ],
  glow: [
    "img/31.jpeg",
    "img/40.jpeg",
    "img/39.jpeg",
    "img/52.jpeg"
  ]
};

let images = [];
let current = 0;

function resetView() {
  document.getElementById("thumbs").style.display = "none";
  document.getElementById("viewer").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("cv").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("epmFeature").style.display = "none";
}

function setActive(el) {
  document.querySelectorAll('.menu li').forEach(li => {
    li.classList.remove('active');
  });
  el.classList.add('active');
}

/* HOME */
function showHome(el) {
  resetView();
  setActive(el);
  document.getElementById("home").style.display = "flex";
}

/* 카테고리 */
function showCategory(name, el) {
  resetView();
  setActive(el);

  let thumbs = document.getElementById("thumbs");

  // ⭐ EPM2022일 때 특별 처리
  if (name === "epm2022") {
    document.getElementById("epmFeature").style.display = "flex";
  }

  images = categories[name];

  thumbs.style.display = "flex";
  thumbs.innerHTML = "";

  images.forEach((img, index) => {
    let elImg = document.createElement("img");
    elImg.src = img;
    elImg.onclick = () => openViewer(index);
    thumbs.appendChild(elImg);
  });
}

/* 텍스트 */
function showText(id, el) {
  resetView();
  setActive(el);
  document.getElementById(id).style.display = "block";
}

/* 상세 */
function openViewer(index) {
  current = index;
  document.getElementById("viewer").style.display = "flex";
  document.getElementById("mainImage").src = images[current];
}

function changeSlide(dir) {
  current += dir;
  if (current < 0) current = images.length - 1;
  if (current >= images.length) current = 0;
  document.getElementById("mainImage").src = images[current];
}

/* 초기 실행 */
window.onload = function() {
  const firstMenu = document.querySelector('.menu li');
  showHome(firstMenu);
};