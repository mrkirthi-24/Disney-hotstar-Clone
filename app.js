let movies = [
    {
      name: "falcon and the winter soldier",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider2.png"
    },
    {
      name: "loki",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider1.png"
    },
    {
      name: "wanda vision",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider3.png"
    },
    {
      name: "Raya and the last dragon",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider4.png"
    },
    {
      name: "luca",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider5.png"
    }
  ];

const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0; //To track the current slide

const createSlide = () => {
    
    if (slideIndex >= movies.length){
        slideIndex = 0;
    }

    //DOM ELEMENTS
    let slide = document.createElement('div');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    var imgElement = document.createElement('img');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //SETTING UP IMAGES
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //Setting up elements
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'm-title';
    p.className = 'm-description';

    sliders.push(slide);

    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}
for(i=0; i<3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
},3000);

// VIDEO  CARDS

const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play()

    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});

// CARD SLIDERS
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
