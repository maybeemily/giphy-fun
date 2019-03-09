export default function makeGifTemplate(image) {
    const html = `
    <li class="gif">
    <a href="${image.url}">
    <img src="${image.images.fixed_height.url}" alt="${image.title}">
    </a>
    <p>${image.title}</p>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}