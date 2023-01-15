let count =0


// function mouseMoveFunc () {
//     count++
//     console.log(count)
//     console.log('Mouse move')
// }
let ball = document.querySelector('.ball')

function mouseMoveFunc (e) {
    
    console.log(e.clientX, e.clientY)
    ball.style.margin = `${e.clientX}px`
    ball.style.margin = `${e.clientY}px`
}

