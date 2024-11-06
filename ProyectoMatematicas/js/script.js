function goToIndex() {
    // Redireccionar al inicio (index.html)
    window.location.href = "index.html";
}

function logout(event) {
    window.location.href = "login.html";
}


// Variables iniciales
const username = "user1";
let userProgress = JSON.parse(localStorage.getItem(`${username}_progress`)) || { level: 1 };
let currentLevel = userProgress.level;

function saveProgress() {
    localStorage.setItem(`${username}_progress`, JSON.stringify(userProgress));
}

function displayLevel() {
    document.querySelectorAll(".level-section").forEach((section, index) => {
        section.style.display = index + 1 === currentLevel ? "block" : "none";
    });
}

function verifyLevel(level, answers, correctAnswers, resultId) {
    const resultElement = document.getElementById(resultId);
    const correctCount = answers.filter((answer, index) => answer === correctAnswers[index]).length;

    if (correctCount === correctAnswers.length) {
        resultElement.textContent = "¡Felicidades! Ya puedes pasar al siguiente nivel.";
        resultElement.className = "result text-success";
        
        setTimeout(() => {
            userProgress.level = level + 1;
            currentLevel = userProgress.level;
            saveProgress();
            displayLevel();
        }, 2000);
    } else {
        resultElement.textContent = "No puedes continuar. Asegúrate de que todas las respuestas sean correctas.";
        resultElement.className = "result text-danger";
    }
}

// Función para verificar las respuestas del Nivel 1
function verifySums() {
    const answers = [
        parseInt(document.getElementById("sumAnswer1").value),
        parseInt(document.getElementById("sumAnswer2").value),
        parseInt(document.getElementById("sumAnswer3").value)
    ];
    const correctAnswers = [8, 19, 14];
    verifyLevel(1, answers, correctAnswers, "sumResult");
}

// Función para verificar las respuestas del Nivel 2
function verifySubtractions() {
    const answers = [
        parseInt(document.getElementById("subAnswer1").value),
        parseInt(document.getElementById("subAnswer2").value),
        parseInt(document.getElementById("subAnswer3").value)
    ];
    const correctAnswers = [6, 9, 13];
    verifyLevel(2, answers, correctAnswers, "subResult");
}

// Función para verificar las respuestas del Nivel 3
function verifyMultiplications() {
    const answers = [
        parseInt(document.getElementById("mulAnswer1").value),
        parseInt(document.getElementById("mulAnswer2").value),
        parseInt(document.getElementById("mulAnswer3").value)
    ];
    const correctAnswers = [12, 14, 25];
    verifyLevel(3, answers, correctAnswers, "mulResult");
}

// Función para verificar las respuestas del Nivel 4
function verifyDivision() {
    const answers = [
        parseInt(document.getElementById("divAnswer1").value),
        parseInt(document.getElementById("divAnswer2").value),
        parseInt(document.getElementById("divAnswer3").value)
    ];
    const correctAnswers = [4, 4, 5];
    verifyLevel(4, answers, correctAnswers, "divResult");
}

// Función para verificar las respuestas del Nivel 5
function verifyMix() {
    const answers = [
        parseInt(document.getElementById("mixAnswer1").value),
        parseInt(document.getElementById("mixAnswer2").value),
        parseInt(document.getElementById("mixAnswer3").value)
    ];
    const correctAnswers = [6, 11, 8];
    verifyLevel(5, answers, correctAnswers, "mixResult");
}

// Función para verificar las respuestas del Nivel 6
function verifyComplex() {
    const answers = [
        parseInt(document.getElementById("complexAnswer1").value),
        parseInt(document.getElementById("complexAnswer2").value),
        parseInt(document.getElementById("complexAnswer3").value)
    ];
    const correctAnswers = [9, 7, 9];
    verifyLevel(6, answers, correctAnswers, "complexResult");
}

// Función para retroceder un nivel
function goBackLevel() {
    if (currentLevel > 1) {
        userProgress.level--;
        currentLevel = userProgress.level;
        saveProgress();
        displayLevel();
    } else {
        alert("No puedes retroceder más. Ya estás en el primer nivel.");
    }
}

// Inicializar mostrando el nivel actual
displayLevel();
