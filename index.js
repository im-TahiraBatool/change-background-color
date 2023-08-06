const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','green','blue', 'yellow','pink', 'purple', 'grey', 'black','brown','violet']

body.style.backgroundColor = 'orange'

button.addEventListener('click', changeB)

function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}