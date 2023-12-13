document.addEventListener("DOMContentLoaded", function () {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
    let flippedCards = [];
    let matchedCards = [];

    const memoryGame = document.getElementById('memory-game');

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    // Create card elements
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-index', index);
        cardElement.textContent = '?';
        cardElement.addEventListener('click', flipCard);
        memoryGame.appendChild(cardElement);
    });

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('matched')) {
            const index = this.getAttribute('data-index');
            this.textContent = cards[index];
            flippedCards.push({ element: this, value: cards[index] });

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.value === card2.value) {
            card1.element.classList.add('matched');
            card2.element.classList.add('matched');
            matchedCards.push(card1, card2);

            if (matchedCards.length === cards.length) {
                alert('Congratulations! You won!');
                resetGame();
            }
        } else {
            card1.element.textContent = '?';
            card2.element.textContent = '?';
        }

        flippedCards = [];
    }

    function resetGame() {
        flippedCards = [];
        matchedCards = [];

        // Reset card styles
        document.querySelectorAll('.card').forEach(card => {
            card.textContent = '?';
            card.classList.remove('matched');
        });

        // Shuffle cards again
        cards.sort(() => Math.random() - 0.5);
    }
});