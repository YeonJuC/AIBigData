/* ======================
   Drawer 메뉴
====================== */
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("closeDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");

function openDrawer(){
  drawer.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDrawerFn(){
  drawer.hidden = true;
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openDrawer);
closeDrawer?.addEventListener("click", closeDrawerFn);
drawerBackdrop?.addEventListener("click", closeDrawerFn);

document.querySelectorAll(".drawer-link").forEach(a => {
  a.addEventListener("click", closeDrawerFn);
});


/* ======================
   Hero 슬라이드 (⬅ 여기 추가)
====================== */
(() => {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  if (!slides.length || !dots.length) return;

  let current = 0;
  let timer = null;

  const show = (i) => {
    slides.forEach(s => s.classList.remove('is-active'));
    dots.forEach(d => d.classList.remove('is-active'));
    slides[i].classList.add('is-active');
    dots[i].classList.add('is-active');
    current = i;
  };

  const start = () => {
    timer = setInterval(() => {
      show((current + 1) % slides.length);
    }, 5000);
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      show(i);
      start();
    });
  });

  start();
})();

