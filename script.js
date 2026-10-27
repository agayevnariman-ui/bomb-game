const timer = document.querySelector('#timer')
const startBtn = document.querySelector('#start')
const colorBtn = document.querySelectorAll('.color-btn')
const attempts = document.querySelector('#attempts')
const score = document.querySelector('#score')
const gameInfo = document.querySelector('.background-info')
const textInfo = gameInfo.querySelector('h2')
const repeatBtn = gameInfo.querySelector('button')

let timerJs = 30
let id = null
const btnColors = ['red','green','blue']
let random
let attemptsCounter = 3
let win = localStorage.getItem("score")
score.textContent = win


startBtn.addEventListener('click', ()=>{
    startGame()
})

const startGame = () => {
    if (id) return;
    id = setInterval(() => {
        timerJs--;
        if (timerJs >= 10) {
            timer.textContent = `00:${timerJs}`;
    } else  {
        timer.textContent = `00:0${timerJs}`;
    }
    if (timerJs === 0) {
        userInfo('Ты проиграл!', true)
}
}, 1000);colorBtn.forEach(item => {
        item.disabled = false
    })
    random = btnColors[Math.floor(Math.random()* 3)]

}

colorBtn.forEach(item =>{
    item.addEventListener('click', (event)=>{
        if (event.target.classList.contains(random)){
            userInfo('Ты победил!', false)
            win++
            score.textContent = win
            localStorage.setItem("score",win)
        } else {
            attemptsCounter--
            attempts.textContent = attemptsCounter
            if (attemptsCounter ==0) {
             userInfo('Ты проиграл!', true)
            }
            random = btnColors[Math.floor(Math.random()* 3)]
        }
    })
})


function userInfo(message, losed){
    textInfo.textContent = message
    gameInfo.style.display = 'block'
    
    console.log(message)
        colorBtn.forEach(el => {
        el.disabled = true
        })
    clearInterval(id)
    if (losed){
        setTimeout(()=>{
            console.log('БОМБА ВЗОРВАЛАСЬ!')
        },2000)
    }
    document.body.style.overflowY = 'hidden'
}

repeatBtn.addEventListener('click',repeatGame)

function repeatGame(){
    timerJs=30
    gameInfo.style.display = 'none'
    document.body.style.overflowY = 'scroll'
    id = null
    attemptsCounter = 3
    attempts.textContent = attemptsCounter
}