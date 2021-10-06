const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuCover = document.getElementById('mobileMenuCover');
const main = document.querySelector('.main');
const mobileItems = document.querySelectorAll('.mobileMenuItems');
let modalState = 'closed';
const workSection = document.getElementById('works');

const arrayOfProjects = [
  {
    image: './img/smartfacedetector.PNG',
    title: 'My Smart Face Detector App',
    tech: ['ruby', 'css', 'Javascript', 'html'],
    description: "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
  },
  {
    image: './img/jagabuy.PNG',
    title: 'Jagabuy Online Shopping Store',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description: "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
  },
  {
    image: './img/rephidim.PNG',
    title: 'Rephidim Microfinance Bank',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description: "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
  },
  {
    image: './img/smartfacedetector.PNG',
    title: 'My Smart Face Detector App',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description: "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
  },
  {
    image: './img/jagabuy.PNG',
    title: 'Jagabuy Online Shopping Store',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description: "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
  },
  {
    image: './img/rephidim.PNG',
    title: 'Rephidim Microfinance Bank',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description: "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
  },
];

function createProjectCards() {
  for (let x = 0; x < arrayOfProjects.length; x += 1) {
    workSection.innerHTML += `<div class="card border">
    <img src="${arrayOfProjects[x].image}" alt="${arrayOfProjects[x].title}" />
    <div class="project-name">
      <h4>${arrayOfProjects[x].title}</h4>
    </div>
    <ul class="tech-group">
    ${arrayOfProjects[x].tech
    .map((tech) => `<li class="tech">${tech}</li>`)
    .join(' ')}
    </ul>
    <button class="btn grow" onclick="toggleModal(${x})" type="button">See Project</button>
  </div>`;
  }
}

createProjectCards();

const modalTech = document.getElementById('modal-tech');

function toggleModal(position = null) {
  if (modalState === 'closed') {
    document.getElementById('modal-title').innerHTML = arrayOfProjects[position].title;
    document.getElementById('modal-img').src = arrayOfProjects[position].image;

    for (let i = 0; i < arrayOfProjects[position].tech.length; i += 1) {
      modalTech.innerHTML += `<li class="tech">${arrayOfProjects[position].tech[i]}</li>`;
    }

    document.getElementById('modal-desc').innerHTML = arrayOfProjects[position].description;
    document.querySelector('.projectDetailsModal').style.display = 'block';
    modalState = 'open';
  } else {
    document.querySelector('.projectDetailsModal').style.display = 'none';
    modalTech.innerHTML = '';
    modalState = 'closed';
  }
}

document.querySelector('.close-modal-button').addEventListener('click', () => toggleModal());

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  main.style.filter = 'blur(8px)';
}

function closeMenu() {
  menuCover.style.display = 'none';
  menuButton.style.display = 'flex';
  main.style.filter = 'blur(0px)';
}

mobileItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);
