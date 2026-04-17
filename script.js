const slides = [
  {
    cityLine1: 'Rostov-on-Don',
    cityLine2: 'LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    image: 'images/slide1.png',
    alt: 'Rostov-on-Don Admiral interior',
  },
  {
    cityLine1: 'Sochi',
    cityLine2: 'Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    image: 'images/slide2.png',
    alt: 'Sochi Thieves interior',
  },
  {
    cityLine1: 'Rostov-on-Don',
    cityLine2: 'Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    image: 'images/slide3.png',
    alt: 'Rostov-on-Don Patriotic interior',
  },
];

const cityLine1Element = document.getElementById('city-line-1');
const cityLine2Element = document.getElementById('city-line-2');
const areaElement = document.getElementById('area');
const timeElement = document.getElementById('time');
const costElement = document.getElementById('cost');
const imageElement = document.getElementById('slider-image');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const dots = document.querySelectorAll('.slider__dot');
const tabs = document.querySelectorAll('.slider__tab');

let currentSlide = 0;

function updateSlider(index) {
  const slide = slides[index];

  cityLine1Element.textContent = slide.cityLine1;
  cityLine2Element.textContent = slide.cityLine2;
  areaElement.textContent = slide.area;
  timeElement.textContent = slide.time;
  costElement.textContent = slide.cost;
  imageElement.src = slide.image;
  imageElement.alt = slide.alt;

  dots.forEach((dot) => dot.classList.remove('active'));
  tabs.forEach((tab) => tab.classList.remove('active'));

  dots[index].classList.add('active');
  tabs[index].classList.add('active');

  currentSlide = index;
}

function showNextSlide() {
  const nextSlide = (currentSlide + 1) % slides.length;
  updateSlider(nextSlide);
}

function showPrevSlide() {
  const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider(prevSlide);
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    updateSlider(Number(dot.dataset.slide));
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    updateSlider(Number(tab.dataset.slide));
  });
});