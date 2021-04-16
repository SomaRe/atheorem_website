const menuBtn = document.querySelector('.menu-btn');
const menuOpen = document.querySelector('.menu-open');
const mo = document.querySelectorAll('.mo');
const equation = document.querySelector('.equation');
let Open = false;
menuBtn.addEventListener('click', () => {
  if(!Open) {
    Open = true;
    menuBtn.classList.add('open');
    menuOpen.classList.add('opened');
    equation.style.display ="none";
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
    setTimeout(()=>equation.style.display ="block" ,800) ;
    mo.forEach(function (e){
      e.classList.remove('mo-slide')
  });
  }
});