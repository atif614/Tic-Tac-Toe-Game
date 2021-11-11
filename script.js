console.log("Welcome to My game")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X"?"0":"X"
}

//Function to check for a win
const checkWin = () => {
    let boxtest = document.getElementsByClassName('boxtest');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtest[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[2]].innerText === boxtest[e[1]].innerText) && (boxtest[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtest[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
          
        }
    })
    
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtest = element.querySelector('.boxtest');
        element.addEventListener('click',(e) => {
        if (boxtest.innerText === '') {
            boxtest.innerText = turn;
           turn = changeTurn();
            // audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtests = document.querySelectorAll('.boxtest');
    Array.from(boxtests).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
