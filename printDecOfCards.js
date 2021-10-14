function printDeckOfCards(cards) {
    let validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    };
    const result = [];

    for (let card of cards) {
        let myCard = createCard(card.substring(0, card.length -1), card.substring(card.length - 1)).toString();

        if (myCard == 'Error' || !myCard) {
            console.log(`Invalid card: ${card.substring(0, card.length -1) + card.substring(card.length - 1)}`);
            return;
        }
        result.push(myCard);
    }

    console.log(result.join(' '));

    function createCard (face, suit){
        if (!validCardFaces.includes(face)) {
            return "Error";
        }
        if (!suits[suit]) {
            return "Error";
        }
     
        return {
            face,
            "suit": suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);