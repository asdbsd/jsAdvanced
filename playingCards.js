function playingCards(face, suit) {
    let validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    if (!validCardFaces.includes(face)) {
        throw  Error("Error");
    }
        
    return {
        face,
        "suit": suits[suit],
        toString() {
            return this.face + this.suit;
        }

    }

}

let card1 = playingCards(1, 'S');


console.log(card1.toString());
