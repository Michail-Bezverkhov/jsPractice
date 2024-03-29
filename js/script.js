/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    showMovies: function () {
        const moviesCopy = [...this.movies];

        moviesCopy.sort();


        const movieList = document.querySelectorAll('.promo__interactive-item');

        let count = 1;


        for (let i = 0; i < movieList.length; i++) {
            movieList[i].innerHTML = `${count}. ${moviesCopy[i]}`;
            count++;
        }
    }
};

movieDB.showMovies();

const promoBg = document.querySelector('.promo__bg'),
    promoAdv = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre');

promoBg.style.backgroundImage = 'url("../img/bg.jpg")';

promoAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'ДРАМА';