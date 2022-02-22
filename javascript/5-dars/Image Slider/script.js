let prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    slides = document.querySelectorAll('.slide')

// slides.forEach((slide, id) => {
//     prev.addEventListener('click', ()=>{
//
//         if (current.previousElementSibling) {
//             id --
//         } else {
//             id = slides.length-1
//         }
//         console.log(id)
//         remove()
//         slide[id].classList.add('current')
//     })
//     next.addEventListener('click', ()=>{
//
//         if (current.nextElementSibling) {
//             id ++
//         } else {
//             id = 0
//         }
//         remove()
//         slide[id].classList.add('current')
//     })
// })

next.addEventListener('click', () => {
    let current = document.querySelector('.current');
    remove()
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current')
    }
})
prev.addEventListener('click', () => {
    let current = document.querySelector('.current');
    remove()
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length - 1].classList.add('current')
    }
})

function remove() {
    slides.forEach(slide => {
        slide.classList.remove('current')
    })
}

