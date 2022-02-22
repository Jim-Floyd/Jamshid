const species = document.querySelectorAll('.species');
const input = document.querySelector('input');
const img = document.querySelectorAll('img');
const h2 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');
const table = document.querySelector('table')
const caption = document.querySelector('caption')




for (let i=0; i<species.length; i++){
    const just = function () {
    species[i].style.cssText = 'background-color: grey'
    img[i].style.cssText = 'box-shadow: 0 0 3px 5px red'
    console.log('HI')
}
    const just1 = function () {
    h2[i].style.cssText = 'color: yellow'
}
    const just2 = function () {
    p[i].style.cssText = 'color: blue'
}
    const just3 = function () {
    p[i].style.cssText = 'color: black'
}
    img[i].addEventListener('click', just)
    h2[i].addEventListener("dblclick", just1)
    p[i].addEventListener("mouseover", just2)
    p[i].addEventListener("mouseout", just3)
}
const just = function () {
    table.style.cssText = 'box-shadow: 0 0 4px 3px blue'
    caption.style.cssText = 'color: yellow; text-shadow: 2px 3px blue; font-size: 20px'

}
const just1 = function () {
    table.style.cssText = 'box-shadow: 0 0 4px 3px black'
    caption.style.cssText = 'color: white; text-shadow: none; font-size: 15px'
}

table.addEventListener('mouseover', just)
table.addEventListener('mouseout', just1)

// species.forEach(item=>{
//     item.style.cssText = "color: yellow; background-color: #a1c4e7"
// })



// species.addEventListener('dblclick', just)
// species.addEventListener('mousedown', just)
// species.addEventListener('mouseup', just)
// species.addEventListener('mousemove', just)
// species.addEventListener('mouseover', just)
// species.addEventListener('mousewheel', just)
// species.addEventListener('mouseout', just)


// input.addEventListener('input', ()=>{
//     if (input.value === 's') {
//         alert('hello')
//     } else {alert('wrong text entered')}
// })
// document.addEventListener('keydown', (event) => {
//     let keyName = event.key;
//     if (keyName === 'Enter') {
//         alert('hello')
//     }
// })
// window.addEventListener('keyup', (event) => {
//     let keyName = event.key;
//     if (keyName === 's') {
//         console.log("you pressed 's'")
//     }
// })
window.addEventListener('keypress', (event) => {
    let keyName = event.key;
    if (keyName === 'a') {
        alert("you are pressing 'a'")
    }
})

