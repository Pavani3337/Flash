let cards = JSON.parse(localStorage.getItem("flashcards")) || [];
let index = 0;
let flipped = false;

// SAVE TO STORAGE
function saveCards() {
    localStorage.setItem("flashcards", JSON.stringify(cards));
}

// ADD CARD
function addCard() {

    let q = document.getElementById("question").value;
    let a = document.getElementById("answer").value;

    if (q === "" || a === "") return;

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

    if (cards.length === 0) {
        document.getElementById("card").innerText = "No flashcards yet";
        return;
    }

    let card = cards[index];

    document.getElementById("card").innerText =
        flipped ? card.a : card.q;
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

// AUTO LOAD WHEN PAGE OPENS
window.onload = function () {
    if (cards.length > 0) {
        index = 0;
        showCard();
    }
};