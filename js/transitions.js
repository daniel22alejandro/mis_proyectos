// script.js

// Importar la biblioteca GSAP (asegúrate de incluirla en tu proyecto)
import { gsap } from "gsap";

// Animación de entrada para los proyectos
gsap.from(".proyecto", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
});