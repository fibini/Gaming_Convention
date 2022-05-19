const features = [
  { 
    name : 'Akuma', 
    image : './images/HD-wallpaper-akuma.jpg',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
  {   
    name : 'Ken Masters', 
    image : './images/ken.jpg',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
  {   
    name : 'Samus Aran', 
    image : './images/Samus_Aran.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
  {   
    name : 'Princess Peach', 
    image : './images/png-transparentpeach.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`

  },
  {   
    name : 'Luigi', 
    image : './images/Luigi.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`

  },
  {   
    name : 'Mario', 
    image : './images/Mario.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
];

features.forEach((feature) => {
    const card = `
    <div id="speakers">
        <img class="speaker-img" src="${feature.image}" alt="featured speaker one">
        <div class="descriptions">
            <h4>${feature.name}</h4>
            <div class="tech">${feature.technology}</div>
            <p>${feature.description}
            </p>
        </div>
    </div>`;
    document.getElementById(`feature`).innerHTML += card 
})

const hamburgericon = document.querySelector('.hamburger-button');
const navigationBar = document.querySelector('.nav-bars');

hamburgericon.addEventListener('click', () =>{
    hamburgericon.classList.toggle('show');
    navigationBar.classList.toggle('show')
});

document.querySelectorAll('.nav-bars a').forEach((n) => n.addEventListener('click', () => {
    hamburgericon.classList.remove('show');
    navigationBar.classList.remove('show');
  }));