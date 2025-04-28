// Variables globales pour les statistiques
let coursesRevised = 0;
let qcmRevised = 0;

function toggleStatus(id, type) {
    const checkbox = document.getElementById(id);

    if (type === "course") {
        coursesRevised += checkbox.checked ? 1 : -1;
    } else if (type === "qcm") {
        qcmRevised += checkbox.checked ? 1 : -1;
    }

    updateSummary();
}

function updateSummary() {
    const summaryElement = document.getElementById("summary");
    summaryElement.textContent = `Statistiques : ${coursesRevised} cours révisés, ${qcmRevised} QCM révisés`;
}

// Code interactif pour accueil dynamique
window.onload = () => {
    alert("Bienvenue, Dr. Sadou Billel ! Préparez-vous à réussir votre concours !");
};