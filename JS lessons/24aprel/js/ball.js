let count =0


// function mouseMoveFunc () {
//     count++
//     console.log(count)
//     console.log('Mouse move')
// }
let ball = document.querySelector('.ball')

// function mouseMoveFunc (e) {
    
//     console.log(e.clientX, e.clientY)
//     ball.style.top = `${e.clientY}px`
//     ball.style.left = `${e.clientX}px`
// }

function mouseMoveFunc (e) {
    console.log(e.clientX, e.clientY)
    document.body.innerHTML += 
    `<div class="ball" style="top:${e.clientY}px; left:${e.clientX}px">A</div>`
}

function keyBoardFunc(e)  {
    console.log(e.key)
    document.body.innerHTML += 
    `<div class="ball2">${e.key}</div>`
}
