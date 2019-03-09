import './html-equal.js';
import makeGifTemplate from '../src/make-template.js';

const test = QUnit.test;



test('template will match literal html', assert => {
    //arrange
    const image = {
        slug: 'funny-cat-FiGiRei2ICzzG',
        url: 'http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG',
        images: {
            fixed_height: {
                url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif',
            },
        },
        title: 'Funny Cat GIF',
    };
    

    //act
    const result = makeGifTemplate(image);
    //assert
    assert.htmlEqual(result, /*html*/ `
    <li class="gif">
    <a href="http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG">
    <img src="http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif" alt="Funny Cat GIF">
    </a>
    <p>Funny Cat GIF</p>
    </li>
    `);
});