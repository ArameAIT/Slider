import React from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Slider() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'vertical',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    return (

        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    1/3
                    <img style={{ height: "90%", width: "100%", objectFit: "cover" }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div class="swiper-slide">
                    2/3
                    <img style={{ height: "90%", width: "100%", objectFit: "cover" }} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div class="swiper-slide">
                    3/3
                    <img style={{ height: "90%", width: "100%", objectFit: "cover" }} src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                    
                </div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

        </div>
    )

}
// init Swiper:

export default Slider