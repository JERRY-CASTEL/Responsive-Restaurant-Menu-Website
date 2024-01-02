const cardsArray = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
];


let cardContainer = document.getElementById('gamecontainer'); 
let flippedCards = [];
let gameOvercount = 0;
shuffleArray();
displayCard();

function shuffleArray(){
    for(let i=cardsArray.length-1;i>=0;i--){
        let randomNum = Math.floor(Math.random() * (i + 1));
        [cardsArray[i],cardsArray[randomNum]] = [cardsArray[randomNum],cardsArray[i]];
    }
}

function displayCard(){
    cardsArray.forEach((arr,index) => {
        var cardDiv = document.createElement('div');
        cardDiv.setAttribute('id', index);
        cardDiv.setAttribute('name', arr.name);
        cardDiv.classList.add("GameCardMatricBackground");
        cardDiv.classList.add("Active");
        cardDiv.innerHTML = arr.icon; 
        cardDiv.addEventListener('click',flipCard);
        cardContainer.appendChild(cardDiv);
    });
}

function flipCard(){
    if(flippedCards.length < 2 && this.classList.contains('GameCardMatricBackground')){
        this.classList.remove("GameCardMatricBackground");
        flippedCards.push(this);
        console.log(flippedCards[0].getAttribute('name'))
        if(flippedCards.length == 2 && flippedCards[0].getAttribute('name') == flippedCards[1].getAttribute('name')){
            setTimeout(() => {
                removeData();
            }, 500);   
        gameOvercount++;
        }
    }else{
        if(flippedCards != []){
            flippedCards[0].classList.add("GameCardMatricBackground");
            flippedCards[1].classList.add("GameCardMatricBackground");
            flippedCards = [];
            this.classList.remove("GameCardMatricBackground");
            flippedCards.push(this);
            
        }
    }
    if(gameOvercount >= cardsArray.length/2){
        let container = document.getElementById('gamecontainer');
        while(container.childNodes.length > 0){
            container.firstChild.remove();
        }
        container.setAttribute('id','gameWon');
        document.getElementById('gameWon').innerHTML = "You Won!";
    }
    
    
}

function removeData(){
    flippedCards[0].setAttribute('class','cardMatched');
    flippedCards[0].innerHTML = '';
    flippedCards[0].style.cursor = "context-menu"
    flippedCards[1].setAttribute('class','cardMatched');
    flippedCards[1].style.cursor = "context-menu"
    flippedCards[1].innerHTML = '';
    flippedCards = [];
}