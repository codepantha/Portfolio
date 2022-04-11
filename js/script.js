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
    description:
      "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
    live: '',
    github: '',
  },
  {
    image: './img/jagabuy.PNG',
    title: 'Jagabuy Online Shopping Store',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description:
      "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
    live: '',
    github: '',
  },
  {
    image: './img/rephidim.PNG',
    title: 'Rephidim Microfinance Bank',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description:
      "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
    live: '',
    github: '',
  },
  {
    image: './img/codeniversity.PNG',
    title: 'Codeniversity e-learning',
    tech: ['html', 'css', 'Javascript'],
    description:
      'This is a mobile-first website for a hypothetical coding course. The technology employed in the development of this beautiful project is HTML, CSS, and Javascript. The project showcases my ability to develop highly responsive UI which renders well on any device using cutting-edge CSS like flexbox and grids.',
    live: 'https://codeniversity.netlify.app/index.html',
    github: 'https://github.com/codepantherr/capstone-project-1',
  },
  {
    image: './img/todolist.PNG',
    title: 'TO-DO List Application',
    tech: ['html', 'css', 'Javascript', 'webpack'],
    description:
      'This is a todo-list application built with a mobile-first approach. This project proves my ability to write clean Javascript code using employing best practices and making the UI interactive and fun to use. This application gives users the functionality to create, read, update and delete todo tasks. Tasks can also be marked as completed, and completed tasks can be cleared at a go from the list.',
    live: 'https://codepantherr.github.io/to-do-list/dist/',
    github: 'https://github.com/codepantherr/to-do-list',
  },
  {
    image: './img/rephidim.PNG',
    title: 'Rephidim Microfinance Bank',
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description:
      "uriwueriuroiweurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaoeqwiuroweiruweriuweoruiwe",
    live: '',
    github: '',
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

    /* eslint-disable no-return-assign */
    const seeLiveButton = document.getElementById('live');
    seeLiveButton.addEventListener('click', () => window.location.href = arrayOfProjects[position].live);

    const seeSourceCode = document.getElementById('github');
    seeSourceCode.addEventListener('click', () => window.location.href = arrayOfProjects[position].github);

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

document
  .querySelector('.close-modal-button')
  .addEventListener('click', () => toggleModal());

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
