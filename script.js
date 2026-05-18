let cards = [];
let index = 0;
let flipped = false;

// LOAD FROM STORAGE FIRST
function loadCards() {
    let stored = localStorage.getItem("flashcards");
    if (stored) {
        cards = JSON.parse(stored);
    } else {
        cards = [];
    }
}

// SAVE TO STORAGE
function saveCards() {
    localStorage.setItem("flashcards", JSON.stringify(cards));
}

// ADD CARD
function addCard() {

    let q = document.getElementById("question").value.trim();
    let a = document.getElementById("answer").value.trim();

    if (!q || !a) return;

    cards.push({ q, a });

    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";

    index = cards.length - 1;
    flipped = false;

    saveCards();
    showCard();
}

// SHOW CARD
function showCard() {

    let box = document.getElementById("card");

    if (cards.length === 0) {
        box.innerText = "No flashcards yet";
        return;
    }

    box.innerText = flipped ? cards[index].a : cards[index].q;
}

// FLIP
function flipCard() {
    if (cards.length === 0) return;

    flipped = !flipped;
    showCard();
}

// NEXT
function nextCard() {
    if (index < cards.length - 1) {
        index++;
        flipped = false;
        showCard();
    }
}

// PREV
function prevCard() {
    if (index > 0) {
        index--;
        flipped = false;
        showCard();
    }
}

// INIT APP
window.onload = function () {
    loadCards();
    index = 0;
    flipped = false;
    showCard();
};