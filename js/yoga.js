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

    // Timer

    let deadline = '2021-04-21'; // конечная дата

    function getTimeRemaining (endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()), 
            //отнимаем время в милисекундах от дэдлайна до текущей даты
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        // чтобы получить дни: 
        // hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        // days = Math.floor((t / (1000 * 60 * 60 * 24)));
        
        
        // так как из функции взять сразу несколько переменных мы не можем - вернем их в виде объекта и функции return

        return {
            'total': t, //полное количество милисекунд
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days
        };
    }
  


    function setClock (id, endTime) {             
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days    = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock () {
            let t = getTimeRemaining (endTime);


            function addZero (num) {
                if (num <= 9) {
                    return '0' + num; 
                } else {
                    return num;
                }

            }
            hours.textContent = addZero(t.hours) + ' часов';
            minutes.textContent = addZero(t.minutes) + ' минут';
            seconds.textContent = addZero(t.seconds) + ' секунд';
            days.textContent = addZero(t.days) + ' дней';

            if (t.total <= 0) {
                clearInterval (timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                days.textContent = '00';
            }
        }    

    }

    setClock('timer', deadline); 
    // эта функция выставляет и запускает наши часы
    
});

