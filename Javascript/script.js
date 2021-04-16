const menuBtn = document.querySelector('.menu-btn');
const menuOpen = document.querySelector('.menu-open');
const mo = document.querySelectorAll('.mo');
const equation = document.querySelector('.equation');
const row1 = document.querySelector('.row1');
let Open = false;
menuBtn.addEventListener('click', () => {
  if(!Open) {
    Open = true;
    menuBtn.classList.add('open');
    menuOpen.classList.add('opened');
    equation.style.display ="none";
    row1.style.animationName = "";
    let delay = 0;
    mo.forEach(function (e){
        e.classList.add('mo-slide');
        e.style.transitionDelay = delay+"ms";
        delay = delay+150;
    });
  } else {
    Open = false;
    menuBtn.classList.remove('open');
    menuOpen.classList.remove('opened');
    row1.style.animationName = "row1";
    equation.style.display ="block" ;
    mo.forEach(function (e){
      e.classList.remove('mo-slide')
  });
  }
});