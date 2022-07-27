console.log("Welcome to Tic Tac Toe")
let music = new Audio("click.mp3")
let audioturn = new Audio("click.mp3")
let gameover = new Audio("End.mp3")
let turn ="X";


const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}
function checkWin() {
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let gametext = element.querySelector('.gametext');
    element.addEventListener('click', ()=>{
        if(gametext.innertext === ''){
            gametext.innertext = turn;
            changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innertext = "Turn for" + turn;
        }
    })
})