// window.addEventListener('loaded'); одно из событий для глобального объекта. но оно не особо нам подходит, т.к., JS начнет свою работу только тогда, когда загрузится ВЕСЬ DOM (до последней картинки). но это не совсем удобно

//window.addEventListener('DOMContentLoaded');
// этот обработчик намного приоритетнее первого. скрипт начинает работать уже тогда, когда загружена ОСНОВНАЯ структура дом-документа (без картинок и т.д.)

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {                      
        for (let i = a; i < tabContent.length; i++) { 
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }   
    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
    };
    	
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
               	if (target == tab[i]) {
				hideTabContent(0);
				showTabContent(i);
				break;
            	}
            }
        }

    });

    
});

