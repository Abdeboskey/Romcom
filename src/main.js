var coverImage = document.querySelector("img.cover-image");
var coverTitle = document.querySelector("h2.cover-title");
var tagline1 = document.querySelector("span.tagline-1");
var tagline2 = document.querySelector("span.tagline-2");
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
var savedCoversSection = document.querySelector(".saved-covers-section");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.onload = newRandomCover();
randomCoverBtn.addEventListener("click", newRandomCover);
makeOwnCoverBtn.addEventListener("click", showFormView);
saveCoverBtn.addEventListener("click", saveCover);
viewSavedBtn.addEventListener("click", viewSavedCovers);
homeBtn.addEventListener("click", takeMeHome);
makeMyBookBtn.addEventListener("click", makeMyBook);
savedCoversSection.addEventListener("dblclick", deleteCover);

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
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    var miniCoverHTML =
    `<section class="mini-cover" id=${savedCovers[i].id}>
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> & <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`;
    savedCoversSection.innerHTML += miniCoverHTML;
  }
}

function takeMeHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  homeBtn.classList.add("hidden");
  randomCoverBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
}

function viewSavedCovers() {
  homeView.classList.add("hidden");
  savedView.classList.remove("hidden");
  formView.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  displaySavedCovers();
}

function showFormView() {
  homeView.classList.add("hidden");
  savedView.classList.add("hidden");
  formView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
}

function addToDatabase() {
  covers.includes(currentCover.cover) || covers.push(currentCover.cover);
  titles.includes(currentCover.title) || titles.push(currentCover.titles);
  descriptors.includes(currentCover.tagline1) || descriptors.push(currentCover.tagline1);
  descriptors.includes(currentCover.tagline2) || descriptors.push(currentCover.tagline2);
}

function makeMyBook() {
  event.preventDefault();
  currentCover = new Cover(coverFormInput.value, titleFormInput.value, desc1Input.value, desc2Input.value)
  addToDatabase();
  takeMeHome();
  displayCover();
}

function saveCover() {
  savedCovers.includes(currentCover) || savedCovers.push(currentCover);
}

function deleteCover(event) {
  var deleteId = event.target.parentElement.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == deleteId) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
}
