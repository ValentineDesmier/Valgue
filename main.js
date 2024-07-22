// Ajoutez ici des animations et des interactions JavaScript pour rendre le site plus dynamique
document.addEventListener("DOMContentLoaded", function() {
    // Exemple : Ajoutez une animation de texte sur la section d'accueil
    const overlayText = document.querySelector(".overlay h2");
    overlayText.style.opacity = 0;
    overlayText.style.transition = "opacity 2s";

    setTimeout(() => {
        overlayText.style.opacity = 1;
    }, 1000);
});
