const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuCover = document.getElementById('mobileMenuCover');
const main = document.querySelector('.main');
const mobileItems = document.querySelectorAll('.mobileMenuItems');
let modalState = 'closed';
const workSection = document.getElementById('works');

const arrayOfProjects = [
  {
    image: 'https://user-images.githubusercontent.com/46839548/164096157-c2fcc2e0-47b8-4fdd-85f4-61429ef4de46.png',
    title: 'Convertir',
    tech: ['html', 'css', 'Javascript', 'React', 'Redux', 'Tachyons'],
    description:
      'A mobile web-based currency converter application with the latest rates built with React and Redux',
    live: 'https://convertirr.netlify.app/',
    github: 'https://github.com/codepantha/convertir/',
  },
  {
    image: './img/smartfacedetector.PNG',
    title: 'My Smart Face Detector App',
    tech: ['html', 'css', 'JavaScript', 'React'],
    description:
      'A responsive app using the Clarifai API to detect faces in a picture.',
    live: 'https://mysmartfacedetectorapp.herokuapp.com/',
    github: '',
  },
  {
    image: 'https://user-images.githubusercontent.com/46839548/162593740-a9fb2e5b-4e36-4fbc-9c2a-f221e43997d1.png',
    title: 'Jokes of Chuck',
    tech: ['html', 'css', 'Javascript', 'React', 'Tailwind css'],
    description:
      'Chuck Norris jokes app created with Reactjs, Tailwindcss, and an awesome API from https://api.chucknorris.io. Believe Chuck Norris would kick Superman\'s arse? Welcome to ChuckJokes! A ChuckJoke a day keeps the roundhouse kick away',
    live: 'http://jokesofchuck.netlify.app/',
    github: 'https://github.com/codepantha/chuck-norris-facts',
  },
  {
    image: './img/rephidim.PNG',
    title: 'Rephidim Microfinance Bank',
    tech: ['Laravel', 'css', 'Javascript', 'html'],
    description:
      'A web app for a microfinance bank',
    live: 'https://rephidimmfb.com',
    github: '',
  },
  {
    image: './img/codeniversity.PNG',
    title: 'Codeniversity e-learning',
    tech: ['html', 'css', 'Javascript'],
    description:
      'This is a mobile-first website for a hypothetical coding course. The technology employed in the development of this beautiful project is HTML, CSS, and Javascript. The project showcases my ability to develop highly responsive UI which renders well on any device using cutting-edge CSS like flexbox and grids.',
    live: 'https://codeniversity.netlify.app/index.html',
    github: 'https://github.com/codepantha/capstone-project-1',
  },
  {
    image: './img/todolist.PNG',
    title: 'TO-DO List Application',
    tech: ['html', 'css', 'Javascript', 'webpack'],
    description:
      'This is a todo-list application built with a mobile-first approach. This project proves my ability to write clean Javascript code using employing best practices and making the UI interactive and fun to use. This application gives users the functionality to create, read, update and delete todo tasks. Tasks can also be marked as completed, and completed tasks can be cleared at a go from the list.',
    live: 'https://codepantha.github.io/to-do-list/dist/',
    github: 'https://github.com/codepantha/to-do-list',
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
