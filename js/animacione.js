//Animacion de la barra de navegacion
const nav = document.querySelector("#nav");


const duplicate = nav.cloneNode(true);
duplicate.id = "duplicate-nav";
duplicate.setAttribute("aria-hidden", true);
nav.parentNode.insertBefore(duplicate, nav.nextSibling);


function applyClipPath(link) {
  const { offsetLeft, offsetWidth } = link;
  const clipLeft = offsetLeft;
  const clipRight = offsetLeft + offsetWidth;

  duplicate.style.clipPath = `inset(0 ${Number(
    100 - (clipRight / duplicate.offsetWidth) * 100
  ).toFixed()}% 0 ${Number(
    (clipLeft / duplicate.offsetWidth) * 100
  ).toFixed()}% round 1rem)`;
}


window.addEventListener("load", () => {
  const firstLink = nav.querySelector("a");
  applyClipPath(firstLink);
});


nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (link) {
    applyClipPath(link);
  }
});


nav.addEventListener("dblclick", (e) => {
  e.preventDefault();
});


//Animacion del slider de proyectos

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slider img");
  let dots = document.querySelectorAll(".dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  // Ocultar todas
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));
  
  // Mostrar la actual
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}
