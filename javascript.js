const features = [
  {
    name: 'Akuma',
    image: './images/speaker_02.png',
    technology: 'Emeritus Professor, Korea Advanced Institute of Science and Technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?',
  },
  {
    name: 'Ken Masters',
    image: './images/speaker_02.png',
    technology: 'Emeritus Professor, Korea Advanced Institute of Science and Technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?',
  },
  {
    name: 'Samus Aran',
    image: './images/speaker_02.png',
    technology: 'Emeritus Professor, Korea Advanced Institute of Science and Technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?',
  },
  {
    name: 'Princess Peach',
    image: './images/speaker_02.png',
    technology: 'Emeritus Professor, Korea Advanced Institute of Science and Technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?',

  },
  {
    name: 'Luigi',
    image: './images/speaker_02.png',
    technology: 'Emeritus Professor, Korea Advanced Institute of Science and Technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?',

  },
  {
    name: 'Mario',
    image: './images/speaker_02.png',
    technology: 'Emeritus Professor, Korea Advanced Institute of Science and Technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?',
  },
];

features.forEach((feature) => {
  const card = `
    <div class="speakers">
        <img class="speaker-img" src="${feature.image}" alt="featured speaker one">
        <div class="descriptions">
            <h4>${feature.name}</h4>
            <div class="tech">${feature.technology}</div>
            <p>${feature.description}
            </p>
        </div>
    </div>`;
  document.getElementById('feature-block').innerHTML += card;
});

const hamburgericon = document.querySelector('.hamburger-button');
const navigationBar = document.querySelector('.menu-nav');

hamburgericon.addEventListener('click', () => {
  hamburgericon.classList.toggle('show');
  navigationBar.classList.toggle('show');
});

document.querySelectorAll('.menu-nav a').forEach((n) => n.addEventListener('click', () => {
  hamburgericon.classList.remove('show');
  navigationBar.classList.remove('show');
}));