//Menu movil

(function() {
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('#nav');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav_show'); 
        document.body.classList.add('body--no-scroll');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav_show'); 
        document.body.classList.remove('body--no-scroll'); 
    });
})();


//Animacion de la barra de navegacion
const nav = document.querySelector("#nav");


const duplicate = nav.cloneNode(true);
duplicate.id = "duplicate-nav";
duplicate.setAttribute("aria-hidden", true);
nav.parentNode.insertBefore(duplicate, nav.nextSibling);


function applyClipPath(link) {
  const {
    offsetLeft,
    offsetWidth
  } = link;
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

let slideIndexes = {};

function currentSlide(n, sliderId) {
  showSlides(slideIndexes[sliderId] = n, sliderId);
}

function showSlides(n, sliderId) {
  let sliderWrapper = document.querySelector(`.slider_wrapper[data-slider="${sliderId}"]`);
  let slides = sliderWrapper.querySelectorAll(".slider img");
  let dots = sliderWrapper.querySelectorAll(".dot");

  if (!slideIndexes[sliderId]) slideIndexes[sliderId] = 1;

  if (n > slides.length) {
    slideIndexes[sliderId] = 1
  }
  if (n < 1) {
    slideIndexes[sliderId] = slides.length
  }

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndexes[sliderId] - 1].style.display = "block";
  dots[slideIndexes[sliderId] - 1].classList.add("active");
}


document.querySelectorAll(".slider_wrapper").forEach((wrapper, index) => {
  let id = index + 1;
  showSlides(1, id);
});




//Slider de certificaciones 

const slides = document.querySelectorAll("#slider img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

// Función para mostrar la imagen activa
function showSlide(i) {
  slides.forEach((img, idx) => {
    img.classList.remove("active");
    if (idx === i) img.classList.add("active");
  });
}

// Flecha derecha
next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Flecha izquierda
prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Mostrar la primera imagen al cargar
showSlide(index);


//Modal de certificaciones
const verMasBtn = document.getElementById("verMasBtn");
const modal = document.getElementById("modalCertificados");
const closeModal = document.getElementById("closeModal");

// Abrir modal
verMasBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.classList.add("modal-open"); 
});

// Cerrar modal con X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); 
});

// Cerrar modal clicando fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});


