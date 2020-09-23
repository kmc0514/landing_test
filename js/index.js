/* HEADER OPTIONS */
const headerBg = document.getElementById("header__mobile");
const headerBtn = document.getElementById("header__btn");

const headerWhite = () => {
  headerBg.classList.add("header__white");
  headerBg.classList.remove("header__transparent");
};

const headerTransparent = () => {
  headerBg.classList.add("header__transparent");
  headerBg.classList.remove("header__white");
};

const changeHeader = () => {
  // Header Background Transition
  if (window.pageYOffset > 80) {
    headerWhite();
  } else {
    headerTransparent();
  }

  // Header Button Transition
  if (window.pageYOffset > 348) {
    headerBtn.style.visibility = "visible";
  } else {
    headerBtn.style.visibility = "hidden";
  }
};

window.addEventListener("scroll", changeHeader);

/* TITLE OPTIONS */
const titleTrans = document.getElementById("title-transition");
const titleArr = [
  "프로필",
  "가족사진",
  "커플사진",
  "우정사진",
  "돌잔치",
  "가족행사",
  "모델",
];

let counter = 0;

const changeTitle = () => {
  titleTrans.innerHTML = titleArr[counter];

  counter++;
  if (counter == titleArr.length) {
    counter = 0;
  }
};

window.setInterval(changeTitle, 1500);

/* SWIPER OPTIONS */
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
