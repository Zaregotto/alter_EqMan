import React from 'react';
import './Sliders.css'

import slider0 from '../../resources/sliders/Без імені.png'
import slider1 from '../../resources/sliders/Без імені2.png'
import slider2 from '../../resources/sliders/Без імені3.png'
import slider3 from '../../resources/sliders/Без імені33.png'

const Sliders = () => {

    let slides = document.getElementsByClassName("slider__slide");
    let navlinks = document.getElementsByClassName("slider__navlink");
    let currentSlide = 0;

    let el = document.getElementById("nav-button--next")
    if (el) {
        el.addEventListener("click", () => {
            changeSlide(currentSlide + 1)
        });
    }

    let em = document.getElementById("nav-button--prev")
    if (em) {
        em.addEventListener("click", () => {
            changeSlide(currentSlide - 1)
        });
    }

    function changeSlide(moveTo) {
        if (moveTo >= slides.length) {moveTo = 0;}
        if (moveTo < 0) {moveTo = slides.length - 1;}

        slides[currentSlide].classList.toggle("active");
        navlinks[currentSlide].classList.toggle("active");
        slides[moveTo].classList.toggle("active");
        navlinks[moveTo].classList.toggle("active");

        currentSlide = moveTo;
    }

    document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
        bullet.addEventListener('click', () => {
            if (currentSlide !== bulletIndex) {
                changeSlide(bulletIndex);
            }
        })
    })


    return (
        <div className="slider-text">
            <h1>Що ми пропонуємо</h1>
        <div className="container">
            <div className="slider">
                <div className="slider__slides">
                    <div className="slider__slide active">
                        <img src={slider0} alt="sliders"/>
                    </div>
                    <div className="slider__slide">
                        <img src={slider1} alt="sliders"/>
                    </div>
                    <div className="slider__slide">
                        <img src={slider2} alt="sliders"/>
                    </div>
                    <div className="slider__slide">
                        <img src={slider3} alt="sliders"/>
                    </div>
                    <div id="nav-button--prev" className="slider__nav-button"></div>
                    <div id="nav-button--next" className="slider__nav-button"></div>
                    <div className="slider__nav">
                        <div className="slider__navlink active"></div>
                        <div className="slider__navlink"></div>
                        <div className="slider__navlink"></div>
                        <div className="slider__navlink"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export {Sliders};

