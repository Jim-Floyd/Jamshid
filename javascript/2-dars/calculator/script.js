'use strict'

const result = document.querySelector('.result'),
      buttons = document.querySelectorAll('button'),
      show_result = document.querySelector('.show_result'),
      numbers = document.querySelector('.numbers'),
      delete_b = document.querySelector('.delete')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML !== 'Show result' && button.innerHTML !== 'Del') {
            numbers.value += button.innerHTML;
        }
        if (button.innerHTML === "Del"){
            let change = numbers.value.slice(0, -1);
            numbers.value = change;
        }
    })

})

show_result.addEventListener('click', () => {
    numbers.value = eval(numbers.value);
})

