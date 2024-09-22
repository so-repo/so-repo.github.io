//Header에 페이지 아래로 스크롤시 다크 스타일링을 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight){
    header.classList.add('header--dark');
  }else {
    header.classList.remove('header--dark');
  }
});

//Hmoe 섹션을 아래로 스크롤시 투명하게 처리함 (offsetHeright 높이가져옴.)
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  console.log(1 - window.scrollY /homeHeight);
  home.style.opacity = 1 - window.scrollY /homeHeight;
});