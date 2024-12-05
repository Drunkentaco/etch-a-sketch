const container = document.querySelector("#container");
/* Creates a 16 x 16 grid*/
for (i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.classList.add('row');
    container.appendChild(row);
    for (j =0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

/* as the mouse enters a square, background changed to black*/
const color = document.querySelectorAll('.square');
    color.forEach ((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        });
    });

/* removes all the square and add the the dimension of the grid*/
const row = document.querySelectorAll('.row');
newGrid.addEventListener('click', () => {
    let dimension = prompt("Set the dimension of the grid (1-100)");
    if (dimension > 0 && dimension <= 100){
        while (row.firstChild) {
            row.removeChild(row.lastChild);
        }
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        for (i = 0; i < dimension; i++){
            const row = document.createElement("div");
            row.classList.add('row');
            container.appendChild(row);
            for (j =0; j < dimension; j++){
                const square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);
            }
        }
    }
});