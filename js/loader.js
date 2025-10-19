window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const main = document.querySelector("main");

  // Activar animación de desaparición
  loader.classList.add("hide");

  // Luego de la transición, ocultar el loader y mostrar el contenido
  setTimeout(() => {
  loader.style.display = "none";
  main.style.display = "block";
  setTimeout(() => main.classList.add("show"), 50);
}, 500);
});
