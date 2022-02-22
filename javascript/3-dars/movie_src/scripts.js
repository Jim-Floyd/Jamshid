// CHANGE HEADER
const backImg = document.querySelector('.promo__bg')
backImg.style.background = "url('https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/06/02/Pictures/_d9f82122-a4ae-11ea-bb61-4f53f79c8883.jpg') center no-repeat"
backImg.style.backgroundPosition = '0% 10%';
backImg.style.backgroundSize = 'cover';
document.querySelector('.promo__genre').textContent = 'ТРИЛЛЕР';
document.querySelector('.promo__title').textContent = 'ЛОГАН';


// REMOVE ADS
document.querySelector('.promo__adv').innerHTML = ''

// CREATE JS LIST
let movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


function updateMovieList() {
    let movie_list = document.querySelector('.promo__interactive-list');
    movie_list.innerHTML = ""

    movieDB.movies.forEach((item, id) => {

        movie_list.innerHTML += `<li class="promo__interactive-item">${id + 1} ${item}<div class="delete"></div></li>`
    })
    document.querySelectorAll('.delete').forEach((item, id) => {
            item.addEventListener('click', () => {
                movieDB.movies.splice(id, 1)
                console.log(movieDB.movies)
                movieDB.movies.sort()
                updateMovieList()
            })
        }
    )
}

// ADD TO WATCHED LIST
updateMovieList()
const btn = document.querySelector('button');
const items = document.querySelectorAll('.promo__interactive-item')
btn.addEventListener('click', (fff) => {
    fff.preventDefault()
    let inpValue = document.querySelector('.adding__input');
    if (inpValue.value) {
        movieDB.movies.push(inpValue.value);
        inpValue.value = ''
    }
    if (document.querySelector('.check').checked === true) {
        alert('favourite')
    }
    document.querySelector('.check').checked = false;
    updateMovieList()
});

document.querySelectorAll('.delete')


