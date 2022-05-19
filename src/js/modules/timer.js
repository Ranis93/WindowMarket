const timer = (id, deadline) => {
    
    //Timer

    function getTimeRemainding(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),             // Возвратит количество оставшегося времени акции в миллисекундах.
            days = Math.floor(total / 1000 / 60 / 60 / 24),
            hours = Math.floor((total / 1000 / 60 / 60) % 24),
            minutes = Math.floor((total / 1000 / 60) % 60),
            seconds = Math.floor(total / 1000 % 60);

        return { total, days, hours, minutes, seconds };
    }

    function getZero(num) {                                             // добавление нулей.
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),             // блок с таймером.
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();                                          // вызов ф-ии до setInterval чтобы не было дерганий сразу после перезагрузки стр.

        function updateClock() {
            const t = getTimeRemainding(endtime);

            days.innerHTML = getZero(t.days);               // можно и с days.textContent
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                days.innerHTML = "00";               
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
                seconds.innerHTML = "00";

                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
};

export default timer;