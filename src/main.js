
// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector("img.cover-image");
var coverTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h3.tagline");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your eent handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var cover = covers[getRandomIndex(covers)];
coverImage.src = cover;

var title = titles[getRandomIndex(titles)];
coverTitle.innerText = title;

var descriptor1 = descriptors[getRandomIndex(descriptors)];
var descriptor2 = descriptors[getRandomIndex(descriptors)];

tagline.innerText = `A tale of ${descriptor1} & ${descriptor2}`;
