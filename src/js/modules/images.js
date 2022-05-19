const images = () => {
    const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.querySelector('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText=`justify-content: center;
                            align-items: center;
                            display: none;
                            `;
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
            //проверка на target = проверка на кликабельность
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            imgPopup.classList.add('faded');
            document.body.style.overflow = "hidden";                 // стандартный способ обездвижить страницу при открытии модального окна
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {            // проверка что кликнута div с классом popup
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });
};

export default images;