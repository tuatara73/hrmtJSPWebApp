import list from './list.js';

function main() {
    const containerEl = document.querySelector("#container");

    const fragment = document.createDocumentFragment();

    list.forEach(leader => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = leader.image;
        image.setAttribute('alt', leader.name);
        listItem.appendChild(image);
        fragment.appendChild(listItem);
    });

    containerEl.appendChild(fragment);
}

main();