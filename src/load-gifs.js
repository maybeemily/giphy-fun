import makeGifTemplate from './make-template.js';

const gifList = document.getElementById('gif-list');

export default function loadGifs(images){
    images.data.forEach(image => {
        const dom = makeGifTemplate(image);
        gifList.appendChild(dom);
    });
}
