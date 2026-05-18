let cards = [];
let index = 0;
let flipped = false;

// ADD CARD
function addCard() {

    let q = document.getElementById("question").value;
    let a = document.getElementById("answer").value;

    if(q === "" || a === "") return;

    cards.push({q, a});

    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";

    index = cards.length - 1;
    flipped = false;

    showCard();
}

// SHOW CARD
function showCard() {

    if(cards.length === 0) return;

    let card = cards[index];

    document.getElementById("card").innerText =
        flipped ? card.a : card.q;
}

// FLIP CARD
function flipCard() {
    if(cards.length === 0) return;

    flipped = !flipped;
    showCard();
}

// NEXT CARD
function nextCard() {

    if(index < cards.length - 1) {
        index++;
        flipped = false;
        showCard();
    }
}

// PREVIOUS CARD
function prevCard() {

    if(index > 0) {
        index--;
        flipped = false;
        showCard();
    }
}