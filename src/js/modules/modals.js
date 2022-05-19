
// All modal windows

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();                                              // узнаем ширину полосы прокрутки .

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {                                             // обязательно, чтобы при клике на ссылку не перезагружалась страница
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                document.body.style.marginRight = `${scroll}px`;              // устанавливаем внешний отступ справа от элемента
                modal.style.display = "block";
                document.body.style.overflow = "hidden";                      // стандартный способ обездвижить страницу при открытии модального окна
            });                                                               // можно было использовать метод bootstrap: document.body.calssList.add('modal-open');
    
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;    
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    function calcScroll() {                             // функция нужна чтобы при открытии мод. окон не прыгало изображение при исчезновении полосы прокрутки .
        let div = document.createElement('div');        // создаем элемент, затем удаляем .

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;  // (ширина вместе со скроллом) - (ширина без скролла)
        div.remove();

        return scrollWidth;                                 // сам элемент не нужен. узнаем только ширину полосы прокрутки
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    //showModalByTime('.popup', 60000);
};


// const modals = () => {

//     // другой более простой способ

//     const btnModal = document.querySelector('.popup_engineer_btn'),
//         modalEngineer = document.querySelector('.popup_engineer'),
//         modalCall = document.querySelector('.popup'),
//         btnCloseModal = document.querySelectorAll('.popup_close'),
//         phoneLink = document.querySelectorAll('.phone_link');

//     btnModal.addEventListener('click', () => openModal(modalEngineer));

//     modalEngineer.addEventListener('click', (event) => {
//         if (event.target == modalEngineer) {
//             closeModal(modalEngineer);
//         }
//     });

//     modalCall.addEventListener('click', (event) => {
//         if (event.target == modalCall) {
//             closeModal(modalCall);
//         }
//     });

//     btnCloseModal.forEach(btn => {
//         btn.addEventListener('click', () => {
//             closeModal(modalEngineer);
//             closeModal(modalCall);
//         });
//     });

//     phoneLink.forEach(btn => {
//         btn.addEventListener('click', () => openModal(modalCall));
//     });

//     function openModal(item) {
//         item.style.display = 'block';
//     }
//     function closeModal(item) {
//         item.style.display = 'none';
//     }
// };

export default modals;