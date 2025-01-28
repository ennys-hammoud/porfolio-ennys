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