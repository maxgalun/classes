async function loadData() {
const dataFile = await fetch('https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/js-custom-data/data.json');
const books = await dataFile.json();

const root = document.createElement('div');
root.classList.add('container');
document.body.appendChild(root);
for (let i = 0; i < books.length; i++) {
    const div = document.createElement('div');
    div.classList.add('book-container');
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = books[i].image;
    div.appendChild(image);
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = books[i].title;
    div.appendChild(title);
    const button = document.createElement('div');
    button.classList.add('button');
    div.appendChild(button);
    root.appendChild(div);
}
}
loadData();