const cardArray = [
    {
        name : 'fries',
        img : 'images/fries.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'fries',
        img : 'images/fries.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementById('grid')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

const checkMatch = () => {
    let cards = document.querySelectorAll('img')
    let result = document.getElementById('score')
    if (cardsChosenIds[0] == cardsChosenIds[1]){
        alert("you chose same card twice")
    }
    else if (cardsChosen[0] == cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute('src', './images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', './images/white.png')
        cardsWon.push(cardArray)
    }
    else if (cardsChosen[0] != cardsChosen[1]){

        const id1 = cardsChosenIds[0];
        const id2 = cardsChosenIds[1];
    
        setTimeout(() => {
            if (cards[id1] && cards[id2]) { 
                cards[id1].setAttribute('src', './images/blank.png');
                cards[id2].setAttribute('src', './images/blank.png');
            } 
        }, 500);
    }
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2){
        result.innerHTML = "You completed"
    }
}

const cardsClicked = (card) => {
    card.addEventListener("click", () => {
        const id = card.getAttribute('unique-identifier')
        card.setAttribute('src', cardArray[id].img)
        cardsChosen.push(cardArray[id].name)
        cardsChosenIds.push(id)
        console.log(cardsChosen)
        if (cardsChosen.length == 2){
            setTimeout(checkMatch(), 500)
        }
    })
}

const createCards = () => {
    for (let i=0; i<cardArray.length; i++) {
        const currentCard = document.createElement('img')
        currentCard.setAttribute('src', './images/blank.png')
        currentCard.setAttribute('unique-identifier', i)
        grid.appendChild(currentCard)
        // console.log(currentCard)
        currentCard.addEventListener("click", cardsClicked(currentCard))
        // cardsClicked(currentCard)
    }
}
createCards()


