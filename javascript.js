const features = [
  { 
    name : 'Jeon Gil-nam', 
    image : './images/speaker_02.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
  {   
    name : 'Jeon Gil-nam', 
    image : './images/speaker_02.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
  {   
    name : 'Jeon Gil-nam', 
    image : './images/speaker_02.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
  {   
    name : 'Jeon Gil-nam', 
    image : './images/speaker_02.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`

  },
  {   
    name : 'Jeon Gil-nam', 
    image : './images/speaker_02.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`

  },
  {   
    name : 'Jeon Gil-nam', 
    image : './images/speaker_02.png',
    technology : `Emeritus Professor, Korea Advanced Institute of Science and Technology`,
    description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. At, officiis amet ab possimus impedit unde quo perspiciatis in mollitia accusamus?`
  },
];

features.forEach((feature) => {
    const card = `
    <div id="speakers">
        <img src="${feature.image}" alt="featured speaker one">
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