var coverImage = document.querySelector("img.cover-image");
var coverTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h3.tagline");
var randomCoverBtn = document.querySelector(".random-cover-button");
var makeOwnCoverBtn = document.querySelector(".make-new-button");
var makeMyBookBtn = document.querySelector(".create-new-book-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedBtn = document.querySelector(".view-saved-button");
var homeBtn = document.querySelector(".home-button");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var homeView = document.querySelector(".home-view");
var coverFormInput = document.getElementById("cover");
var titleFormInput = document.getElementById("title");
var desc1Input = document.getElementById("descriptor1");
var desc2Input = document.getElementById("descriptor2");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


randomCoverBtn.addEventListener("click", newRandomCover);
makeOwnCoverBtn.addEventListener("click", showFormView);
saveCoverBtn.addEventListener("click", saveCover);
viewSavedBtn.addEventListener("click", viewSavedCovers);
homeBtn.addEventListener("click", takeMeHome);
makeMyBookBtn.addEventListener("click", makeMyBook)

// document.addEventListener('load', makeRandomCover);
coverTitle.innerText = titles[getRandomIndex(titles)];
coverImage.src = covers[getRandomIndex(covers)];
tagline.innerText = `A tale of ${descriptors[getRandomIndex(descriptors)]} & ${descriptors[getRandomIndex(descriptors)]}`;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newRandomCover() {
  var cover = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var descriptor1 = descriptors[getRandomIndex(descriptors)];
  var descriptor2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(cover, title, descriptor1, descriptor2);
  displayCover();
}

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline.innerText = `A tale of ${currentCover.tagline1} & ${currentCover.tagline2}`;
}

function showFormView() {
  homeView.classList.add("hidden");
  savedView.classList.add("hidden");
  formView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
}

function saveCover() {

}

function viewSavedCovers() {
  homeView.classList.add("hidden");
  savedView.classList.remove("hidden");
  formView.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
}

function takeMeHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  homeBtn.classList.add("hidden");
  randomCoverBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
}

function addToDatabase() {
  if(!covers.includes(currentCover.cover)) {covers.push(currentCover.cover)};
  if(!titles.includes(currentCover.title)) {titles.push(currentCover.titles)};
  if(!descriptors.includes(currentCover.tagline1, currentCover.tagline2)) {descriptors.push(currentCover.tagline1, currentCover.tagline2)};
}

function makeMyBook() {
  event.preventDefault();
  currentCover = new Cover(coverFormInput.value, titleFormInput.value, desc1Input.value, desc2Input.value)
  addToDatabase();
  takeMeHome();
  displayCover();
}
