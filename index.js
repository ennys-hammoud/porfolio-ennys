// Initialisation d'Email.js avec ta clé publique
emailjs.init('ufBP1ObByK9xR7bsp'); // Remplace 'ufBP1ObByK9xR7bsp' par ta clé publique

// Sélectionner le formulaire de contact
const form = document.getElementById("contact-form");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        phone_number: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Désactiver temporairement le bouton Submit
    submitButton.disabled = true;

    // Envoyer les données via Email.js
    emailjs
        .send("service_4l9i3vu", "template_e3sdzqs", formData)
        .then((response) => {
            console.log("Message envoyé avec succès !", response.status, response.text);
            alert("Votre message a été envoyé avec succès.");

            // Réinitialiser les champs du formulaire
            form.reset();
        })
        .catch((error) => {
            console.error("Erreur lors de l'envoi du message :", error);
            alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
        })
        .finally(() => {
            // Réactiver le bouton Submit après 5 secondes
            setTimeout(() => {
                submitButton.disabled = false;
            }, 5000);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const navMenu = document.querySelector(".nav-menu");

    burger.addEventListener("click", function () {
        navMenu.classList.toggle("nav-active");
    });
});

const textElement = document.querySelector(".hero-content h2 span:last-child"); 
const text = "web and mobile development student";
let index = 0;
let isDeleting = false;
const speed = 100;  // Vitesse de frappe
const eraseSpeed = 50;  // Vitesse d'effacement
const delayBetweenLoops = 1500; // Pause avant de recommencer

function typeWriterEffect() {
    if (!isDeleting) {
        // Affichage progressif
        textElement.textContent = text.substring(0, index);
        index++;

        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriterEffect, delayBetweenLoops); // Attente avant d'effacer
            return;
        }
    } else {
        // Effacement progressif
        textElement.textContent = text.substring(0, index);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }
    
    setTimeout(typeWriterEffect, isDeleting ? eraseSpeed : speed);
}

// Lancer l'effet après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriterEffect, 500);
});


function thunderEffect() {
    document.body.style.transition = "background-color 0.1s"; // Transition rapide
    document.body.style.backgroundColor = "white"; // Éclair (flash blanc)

    setTimeout(() => {
        document.body.style.backgroundColor = ""; // Retour à la couleur normale
    }, 200); // Retour rapide après 100ms (effet de flash)
}












const canvas = document.getElementById("thunderCanvas");
const ctx = canvas.getContext("2d");

// Ajuster la taille du canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Fonction pour le tonnerre (flash rapide)
function thunderEffect() {
    document.body.style.transition = "background-color 0.1s";
    document.body.style.backgroundColor = "white";

    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 100);
}

// Fonction pour dessiner plusieurs éclairs
function drawMultipleLightnings() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    for (let i = 0; i < Math.floor(Math.random() * 6) + 5; i++) { // 5 à 10 éclairs
        drawLightning();
    }

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 200);
}

// Fonction pour dessiner un éclair unique
function drawLightning() {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    ctx.lineWidth = 3;

    let startX = Math.random() * canvas.width;
    let startY = 0;
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    for (let i = 0; i < 10; i++) {
        startX += (Math.random() - 0.5) * 100;
        startY += Math.random() * 80;
        ctx.lineTo(startX, startY);
    }

    ctx.stroke();
}

// Fonction pour alterner entre éclairs et tonnerre
function triggerStorm() {
    if (Math.random() > 0.5) {
        // Soit un éclair
        drawMultipleLightnings();
    } else {
        // Soit un flash de tonnerre
        thunderEffect();
    }
}

// Déclencher un événement aléatoire toutes les 3 à 6 secondes
setInterval(triggerStorm, Math.random() * (6000 - 3000) + 3000);









// Sélection du canvas pour la pluie
const rainCanvas = document.getElementById("rainCanvas");
const ctxRain = rainCanvas.getContext("2d");

// Ajuster la taille du canvas
function resizeRainCanvas() {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;
}
resizeRainCanvas();
window.addEventListener("resize", resizeRainCanvas);

// Création des gouttes de pluie
const raindrops = [];
const maxRaindrops = 100; // Nombre de gouttes

for (let i = 0; i < maxRaindrops; i++) {
    raindrops.push({
        x: Math.random() * rainCanvas.width,
        y: Math.random() * rainCanvas.height,
        speed: Math.random() * 5 + 7, // Vitesse de chute
        length: Math.random() * 15 + 10 // Longueur des gouttes
    });
}

// Animation de la pluie
let isRaining = true;
drawRain(); // Démarre l'animation de la pluie
function drawRain() {
    if (!isRaining) return;

    ctxRain.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    ctxRain.strokeStyle = "rgba(173, 216, 230, 0.6)"; // Bleu clair
    ctxRain.lineWidth = 2;

    for (let drop of raindrops) {
        ctxRain.beginPath();
        ctxRain.moveTo(drop.x, drop.y);
        ctxRain.lineTo(drop.x, drop.y + drop.length);
        ctxRain.stroke();

        drop.y += drop.speed;

        // Remettre en haut quand elles atteignent le bas
        if (drop.y > rainCanvas.height) {
            drop.y = -drop.length;
            drop.x = Math.random() * rainCanvas.width;
        }
    }

    requestAnimationFrame(drawRain);
}

// Démarrer la pluie
drawRain();

// Bouton pour activer/désactiver la pluie
document.getElementById("toggleRain").addEventListener("click", function () {
    isRaining = !isRaining;
    if (isRaining) {
        drawRain();
        this.textContent = "⛅";
    } else {
        ctxRain.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
        this.textContent = "🌧️";
    }
});