window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const main = document.querySelector("main");
    
  loader.classList.add("hide");

  setTimeout(() => {
  loader.style.display = "none";
  main.style.display = "block";
  setTimeout(() => main.classList.add("show"), 50);
}, 500);
});
