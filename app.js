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
