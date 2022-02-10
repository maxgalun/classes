const root = document.querySelector('.root');
setInterval(function() {
    const rowBlock = document.createElement("div");
    rowBlock.classList.add('flex'); 
    root.appendChild(rowBlock);

    for(let i=0; i < 5; i++) {
        const block = document.createElement("div");
        block.classList.add('block');
        rowBlock.appendChild(block);
    }
}, 1000);