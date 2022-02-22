const leftBtn = document.querySelector('.left'),
    rightBtn = document.querySelector('.right'),
    images = document.querySelectorAll('img'),

    imgCont = document.querySelector('.image-container');
let index = 0;
function change(){
    if (index > images.length-1){
        index = 0
    }else if(index < 0){
        index = images.length - 1
    }
    imgCont.style.cssText = `transform: translateX(${500 * -index}px)`

}

console.log(images.length)
leftBtn.addEventListener('click', () => {
    index--

    // if (index < (images.length / 2)) {
    //
    //     imgCont.style.cssText = `transform: translateX(${500 * index}px)`
    // } else {
    //     index = -Math.trunc(images.length / 2)
    //     imgCont.style.cssText = `transform: translateX(${500 * index}px)`
    // }
    change()

})

rightBtn.addEventListener('click', function () {
    index++
    console.log(index)
    // if (index > -(images.length / 2)) {
    //
    //     imgCont.style.cssText = `transform: translateX(${500 * index}px)`
    // } else {
    //     index = Math.trunc(images.length / 2)
    //     imgCont.style.cssText = `transform: translateX(${500 * index}px)`
    // }
    change()
})
