const container = document.querySelector('.container')
const text = document.querySelector('#text')
const circle = document.querySelector('.circle')
const shrink = document.querySelector('.shrink')



const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation(){

    text.innerHTML = 'Breath In!'
    container.className = 'container grow'
    circle.className = 'circle circle-inner'

    setTimeout(()=>{

        text.innerText = 'Hold'

        setTimeout(()=>{

            text.innerText = 'Breath Out!'
            container.className = 'container shrink'
            circle.className = 'circle shrink'

        },holdTime)
    }, breathTime)
}

setInterval(breathAnimation, totalTime)