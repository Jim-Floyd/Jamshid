const buttons = document.querySelectorAll('button'),
    modal = document.getElementById('myModal'),
    modalImg = document.getElementById('img01'),
    img = document.querySelectorAll('img'),
    p = document.querySelectorAll('.modal p'),
    h2 = document.querySelectorAll('h2')


buttons.forEach((btn, id) => {
    btn.addEventListener('click', ()=>{
        modal.style.display = 'block';
        modalImg.src = img[id].src
        modalImg.style.cssText = 'width:300px;height:200px'
        document.querySelector('.modalText').innerHTML = p[id].innerHTML
        document.querySelector('.modalTitle').innerHTML = h2[id].innerHTML
    })

})
console.log(document.getElementsByClassName('modalText').textContent)
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display ='none'
})

modal.addEventListener('click',(e)=>{
    if (e.target === modal){
        modal.style.display = 'none';
    }
})
