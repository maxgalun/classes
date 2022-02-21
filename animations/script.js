const block = document.querySelector('#block');
console.log(block.style);
let offset = 0;
setInterval(function() {
    if (offset < 300) {
        offset += 1;
        block.style.left = offset + 'px';
    }
}, 10);