document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Efecto Typewriter para el Logo ---
    const textToType = "código";
    const typewriterElement = document.querySelector(".typewriter-text");
    let index = 0;

    function typeEffect() {
        if (index < textToType.length) {
            typewriterElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 180); // Velocidad de tipeo
        }
    }
    // Iniciar el efecto del logo
    typeEffect();


    // Esperamos a que todo cargue
window.onload = function() {
    
    // Verificamos si la librería cargó correctamente
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffca28" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffca28",
                    "opacity": 0.3,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                }
            },
            "retina_detect": true
        });
        console.log("Partículas cargadas correctamente");
    } else {
        console.error("La librería particles.js no se encontró");
    }
};
});