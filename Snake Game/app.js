const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext('2d');
const scoreDisplay = document.getElementById("score");
const scoreText = document.getElementById("scoreVal");

const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height;
const UNIT = 25;
let foodX = 0;
let foodY = 0;
let xVel = 25;
let yVel = 0;
let GameOver = false;
let GameStart = false;
let speed = 500;
let score = 0;

let snake = [
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
];

startGame();

document.addEventListener('keydown', buttonPressed);

function startGame() {
    context.fillStyle = "#66C7F4";  
    context.fillRect(0, 0, WIDTH, HEIGHT);
    createFood();
    displayFood();
    drawSnake();
    // moveSnake();
    // clearBoard();
    // drawSnake();
    nextTick();
}

function moveSnake(){
    const head = {x:snake[0].x+xVel,
                    y:snake[0].y+yVel}
    snake.unshift(head)
    if (snake[0].x == foodX && snake[0].y == foodY){
        createFood();
        if(speed >= 400){
            speed -= 30;
        }else if(speed >= 300){
            speed -= 15;
        }   
        else if(speed >= 200){
            speed -= 10;
        }   
        else if(speed >= 100){
            speed -= 5;
        }   
        else if(speed >= 100 && speed <= 70){
            speed -= 2;
        }   
        score+=1;
        scoreText.innerHTML = score;
    }else{
        snake.pop();
    }
    
}

function clearBoard(){
    context.fillStyle = '#66C7F4';
    //fillRect(xStart,yStart,width,height)
    context.fillRect(0,0,WIDTH,HEIGHT);
}

function createFood(){
    foodX = Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    foodY = Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;
}

function displayFood(){ 
    context.fillStyle = "#FF1053";  
    context.fillRect(foodX, foodY, UNIT, UNIT);
}

function drawSnake(){
    context.fillStyle = '#FF1053';
    context.strokeStyle = '#212121';
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT)
        context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT)
    })
}

function nextTick(){ 
    setTimeout(() =>{
        if(GameStart){
            clearBoard();
            displayFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            if (GameOver != true)
                nextTick();
            else{
                clearBoard();
                context.font = "bold 50px serif";
                context.fillStyle = "black";
                context.textAlign = "center";
                context.fillText("Game Over!!",WIDTH/2,HEIGHT/2)
            }
        }
        
    },speed)
}

function buttonPressed(event){
    if(!GameStart){
        GameStart = true;
        nextTick();
    }
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    switch(true){
   
        case(event.keyCode==LEFT  && xVel!=UNIT):
            xVel=-UNIT;
            yVel = 0;
            break;
        
        case(event.keyCode==RIGHT && xVel!=-UNIT):
            xVel=UNIT;
            yVel=0;
            break;

        case(event.keyCode==UP && yVel!=UNIT):
            xVel=0;
            yVel=-UNIT;
            break;

        case(event.keyCode==DOWN && yVel!=-UNIT):
            xVel=0;
            yVel=UNIT;
            break;

    }
}

function checkGameOver(){
    if(snake[0].x < 0 || snake[0].x >= WIDTH ||  snake[0].y < 0 || snake[0].y >= HEIGHT){
        GameOver = true;
        
    }
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            GameOver = true;
        }
    }
}


