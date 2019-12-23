import Swiper from 'swiper';
import $ from 'jquery';

export function createSlideCard() {
    let swiper = new Swiper('.swiper-container', {
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 2
            },
            // when window width is >= 480px
            576: {
                slidesPerView: 3
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        },
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });
}

