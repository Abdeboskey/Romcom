// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector("img.cover-image");
var coverTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h3.tagline");
var randomCoverBtn = document.querySelector(".random-cover-button");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click', makeRandomCover);
// window.addEventListener('onload', makeRandomCover);

// Create your event handlers and other functions here 👇

coverTitle.innerText = titles[getRandomIndex(titles)];
coverImage.src = covers[getRandomIndex(covers)];
tagline.innerText = `A tale of ${descriptors[getRandomIndex(descriptors)]} & ${descriptors[getRandomIndex(descriptors)]}`;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  displayCover();
}

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline.innerText = `A tale of ${currentCover.tagline1} & ${currentCover.tagline2}`;
}
