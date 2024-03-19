const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        overflowBody = document.querySelector('body');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = 'justify-content: center; align-items: center'
    bigImage.style.cssText = "max-width: 80%; max-height: 80%"
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            overflowBody.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;
