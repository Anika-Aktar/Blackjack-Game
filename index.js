let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")//another format to fetch element to modify.you can select whole class,body etc with their respective selector.
let cardsEl = document.getElementById("cards-el")

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// let player = {
//     name: "Anika",
//     chips: 145
// }


// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) return 11
    else if (randomNumber > 10) return 10
    else return randomNumber
}

function startGame() {
    cards=[]
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohho! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newGame() {
    if (isAlive === true && hasBlackJack===false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()

    }
}
