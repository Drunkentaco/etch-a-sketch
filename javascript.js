/* Creates a 16 x 16 grid*/
const container = document.querySelector("#container");
for (i = 0; i < 16; i++){
    const row = document.createElement("row");
    row.classList.add('row');
    container.appendChild(row);
    for (j =0; j < 16; j++){
        const square = document.createElement('square');
        square.classList.add('square');
        row.appendChild(square);
    }
}

/* as the mouse enters a square, background changed to black*/
const grid = document.querySelectorAll('square');
    grid.forEach ((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        });
    });