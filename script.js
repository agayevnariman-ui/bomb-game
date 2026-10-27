const notifcation = document.querySelector('#notification')
const notifcationClose = notifcation.querySelector('#close-btn')
const logoBtn = document.querySelector('.logo')


notifcationClose.addEventListener('click', ()=>{
    notifcation.classList.remove('show')
})

logoBtn.addEventListener('click', ()=>{
    notifcation.classList.add('show')
    setTimeout (() =>{
    notifcation.classList.remove('show')
}, 5000)
})

