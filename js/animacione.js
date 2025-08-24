const nav = document.querySelector("#nav");

// Duplicar y preparar
const duplicate = nav.cloneNode(true);
duplicate.id = "duplicate-nav";
duplicate.setAttribute("aria-hidden", true);
nav.parentNode.insertBefore(duplicate, nav.nextSibling);

// Función para aplicar clip-path a un enlace
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

// Esperar a que cargue todo para aplicar el clip inicial
window.addEventListener("load", () => {
  const firstLink = nav.querySelector("a");
  applyClipPath(firstLink);
});

// Actualizar clip-path al hacer clic
nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (link) {
    applyClipPath(link);
  }
});

// Prevenir selección por doble clic
nav.addEventListener("dblclick", (e) => {
  e.preventDefault();
});
