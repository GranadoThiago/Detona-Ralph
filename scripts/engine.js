const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        countDownTimerId: setInterval(countDown, 1000),
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60, 
    },
    actions{

    },
};

/* Sorteando os quadrados aleatóriamente */

function randomSquare(){
    state.view.squares.forEach((square)=> {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

/* Função para mover o Enemy */

/* function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
} */


/* Função para mudar o alvo */
function addListenerHitBox() {
    state.view.squares.forEach((square)=> {
        square.addEventListener("mousedown",()=>{
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }
        })
    });
}

/* Função para contagem do Tempo */

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

        if(state.values.curretTime <= 0){
            clearInterval(state)
            alert("Game is Over! O seu resultado foi: " + state.values.result);
    }
}



/* Função Inicial */

function init() {
/*     moveEnemy(); */
    addListenerHitBox();
}

init();

