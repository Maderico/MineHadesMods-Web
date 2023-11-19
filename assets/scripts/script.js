var modpackURL = "https://twitter.com/MinesyNW";
var tutorialURL = "https://minesy.net";
var discordURL = "https://discord.gg/n5bfEEHgaE";
var tiendaURL = "https://tienda.minesy.net/";

document.querySelector(".modpack").addEventListener("click", function () {
  window.open(modpackURL);
  Swal.fire({
    icon: "success",
    title: "¡Has abierto el Twitter!",
    text: "Mira la otra pestaña.",
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Inicio",
    reverseButtons: true,
    customClass: {
      cancelButton: "order-third",
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      window.open(tutorialURL);
    }
  });
});

document.getElementById("btnDiscord").addEventListener("click", function () {
  window.open(discordURL);
});

document.getElementById("btnTienda").addEventListener("click", function () {
  window.open(tiendaURL);
});

window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content-wrapper');
    
    setTimeout(() => {
        loaderWrapper.classList.add('fadeOut');
        content.style.display = 'block';
        document.body.style.overflow = 'auto';

        loaderWrapper.addEventListener('animationend', () => {
            loaderWrapper.style.display = 'none';
        });
    }, 1500);
});
