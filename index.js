const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
    'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
};

const reverseMorseCode = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));

let mode = 'textToMorse';
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const translateBtn = document.getElementById('translateBtn');
const uzToMorseBtn = document.getElementById('uzToMorseBtn');
const morseToUzBtn = document.getElementById('morseToUzBtn');

function translate() {
    const input = inputText.value.trim();
    if (mode === 'textToMorse') {
        outputText.value = input.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
    } else {
        outputText.value = input.split(' ').map(char => reverseMorseCode[char] || '').join('');
    }
}

translateBtn.addEventListener('click', translate);

uzToMorseBtn.addEventListener('click', () => {
    mode = 'textToMorse';
    inputText.value = '';
    outputText.value = '';
});

morseToUzBtn.addEventListener('click', () => {
    mode = 'morseToText';
    inputText.value = '';
    outputText.value = '';
});


//rangi tanlash
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn1, .btn2");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});



//modal js
document.addEventListener("DOMContentLoaded", function () {
    // Agar foydalanuvchi saytga birinchi marta kirayotgan bo‘lsa, modalni ochamiz
    if (!localStorage.getItem("visited")) {
        document.getElementById("infoModal").style.display = "flex";
        localStorage.setItem("visited", "true");
    }
});

// Modalni yopish funksiyasi
function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}
