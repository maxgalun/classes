const root = document.querySelector('.root');
for (let j = 0; j < 7; j++) {
    const rowBlock = document.createElement("div");
    rowBlock.classList.add('flex'); 
    root.appendChild(rowBlock);

    for(let i=0; i < 5; i++) {
        const block = document.createElement("div");
        block.classList.add('block');
        rowBlock.appendChild(block);
    }
}