const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const menuCover = document.getElementById("mobileMenuCover");
const main = document.querySelector(".main");
const mobileItems = document.querySelectorAll(".mobileMenuItems");

//Work section
const workSection = document.getElementById("works");
const arrayOfProyects = [
  {
    image: "./img/smartfacedetector.PNG",
    title: "My Smart Face Detector App",
    tech: ["nodejs", "css", "Javascript", "html"],
    description: "uriwueriuroiweuroeqwiuroweiruweriuweoruiwe",
  },
  {
    image: "./img/jagabuy.PNG",
    title: "Jagabuy Online Shopping Store",
    tech: ["nodejs", "css", "Javascript", "html"],
    description: "uriwueriuroiweuroeqwiuroweiruweriuweoruiwe",
  },
  {
    image: "./img/rephidim.PNG",
    title: "Rephidim Microfinance Bank",
    tech: ["nodejs", "css", "Javascript", "html"],
    description: "uriwueriuroiweuroeqwiuroweiruweriuweoruiwe",
  },
  {
    image: "./img/smartfacedetector.PNG",
    title: "My Smart Face Detector App",
    tech: ["nodejs", "css", "Javascript", "html"],
    description: "uriwueriuroiweuroeqwiuroweiruweriuweoruiwe",
  },
  {
    image: "./img/jagabuy.PNG",
    title: "Jagabuy Online Shopping Store",
    tech: ["nodejs", "css", "Javascript", "html"],
    description: "uriwueriuroiweuroeqwiuroweiruweriuweoruiwe",
  },
  {
    image: "./img/rephidim.PNG",
    title: "Rephidim Microfinance Bank",
    tech: ["nodejs", "css", "Javascript", "html"],
    description: "uriwueriuroiweuroeqwiuroweiruweriuweoruiwe",
  },
  
];

for (let x in arrayOfProyects) {
  workSection.innerHTML += `<div class="card border">
  <img src="${arrayOfProyects[x].image}" alt="${arrayOfProyects[x].title}" />
  <div class="project-name">
    <h4>${arrayOfProyects[x].title}</h4>
  </div>
  <ul class="tech-group">
  ${arrayOfProyects[x].tech
    .map((tech) => `<li class="tech">${tech}</li>`)
    .join(" ")}
  </ul>
  <button class="btn" onclick="openModal(${x})" type="button">See Project</button>
</div>`;
}

function openModal(position) {
  
}

function toggleMenu() {
  menuButton.style.display = "none";
  menuCover.style.display = "block";
  main.style.filter = "blur(8px)";
}

function closeMenu() {
  menuCover.style.display = "none";
  menuButton.style.display = "flex";
  main.style.filter = "blur(0px)";
}

mobileItems.forEach((element) => {
  element.addEventListener("click", closeMenu);
});

menuButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", closeMenu);
