'use strict';

let picture = document.getElementById('picture');

let timerId;

let setPicture = i => {
        if(i === 0) {
            i = 4;
        }

        let pic = 'url(./images/' + i + '.jpg)'
        picture.style.backgroundImage = pic;
        picture.setAttribute('data-indext', i);


        timerId = setTimeout(() => {
            setPicture(i-1);
        }, 3000);

}

setPicture(4);

