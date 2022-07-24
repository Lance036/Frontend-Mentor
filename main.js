const butt = document.querySelector('.buttons')
const buttons = butt.querySelectorAll('.button')
const submit = document.querySelector('.submit')
const bold = document.querySelector('.bold')
const root = document.getElementsByClassName('container')
const change = document.getElementById('change')

const rooter = document.querySelector('.container')


let buttArr = Array.from(buttons)
const click_Arr = []
let counter = 0
let prev = undefined
let score = 0

buttArr.map(button => {
    button.addEventListener('click', () => {
        
        if (prev == button) {
            button.style.backgroundColor = ''
            button.style.color = ''
            score = 0
            prev = undefined
        }else if (prev == undefined){
            score = button.innerText
            button.style.backgroundColor = 'var(--Orange)'
            button.style.color = 'white'
            prev = button
        }
       
        
        
        console.log(score)
    })
})


 

submit.addEventListener('click', () => {
    let parent = change.parentNode
    console.log(parent)
    parent.removeChild(change)
    const h1 = document.createElement('div')
    

    h1.innerHTML =  
    `<div class="new">
    <img src="./images/illustration-thank-you.svg" alt="" class="image" />
    <span class="rating">${score} out of 5 Thank you!</span>
    <h2 class="bold">You selected</h2>

    <p class="small">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p> 
    </div>`
    
    rooter.appendChild(h1)
    

})

