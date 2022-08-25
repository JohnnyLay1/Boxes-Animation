const btn = document.getElementById('btn')
const boxesContainer = document.getElementById('boxes')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            // to check if we have 16 boxes console.log(box) and check website console
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            // it is add the class of box and change the style of background position
            // same as in the HTML
            boxesContainer.appendChild(box)
        }        
    }
}

// I forgot to call the function createBoxes
createBoxes() 