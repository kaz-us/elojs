const generateGrid = size => {//first generate game-field
    let gridArray = [];
    for (let i = 0; i < size * size; i++) {
        gridArray[i] = { alive: !!Math.round(Math.random() - 0.25) };
    }
    //console.log(gridArray);
    return gridArray;
}

const calcNeighbors = arr => {
    let size = Math.sqrt(arr.length);
    for (let i = 0; i < size * size; i++) {
        let aliveNeigh = 0;
        if (i > size - 1) { //check top-line
            if (arr[i - size].alive) aliveNeigh++; //top square
            if (i % size !== 0) {
                if (arr[i - size - 1].alive) aliveNeigh++; //top-left square
            }
            if ((i + 1) % size !== 0) {
                if (arr[i - size + 1].alive) aliveNeigh++; //top-rigth square
            }
        }
        if (i < size * (size - 1)) { //check bottom-line
            if (arr[i + size].alive) aliveNeigh++; //down square
            if (i % size !== 0) {
                if (arr[i + size - 1].alive) aliveNeigh++; //down-left square
            }
            if ((i + 1) % size !== 0) {
                if (arr[i + size + 1].alive) aliveNeigh++; //down-rigth square
            }
        }
        if (i % size !== 0) {
            if (arr[i - 1].alive) aliveNeigh++; //left square
        }
        if ((i + 1) % size !== 0) {
            if (arr[i + 1].alive) aliveNeigh++; //rigth square
        }
        arr[i]['neigh'] = aliveNeigh;
    }
}
const outpuGrid = arr => {//draw game-field
    let colony = document.getElementById('grid');
    while (colony.lastChild) {
        colony.removeChild(colony.lastChild);
    };
    let alive = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let child = document.createElement('input');
        child.type = 'checkbox';
        child.id = i;
        child.style.margin = '0px 3px';
        arr[i].alive ? child.checked = true : alive--;
        colony.appendChild(child);
        if ((i + 1) % Math.sqrt(arr.length) === 0) {
            let sep = document.createElement('br');
            colony.appendChild(sep);
        };
    }
    console.log('Alive: ' + alive);
}

const nextGrid = arr => {//generete new array according to the rules
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i]);
        if (arr[i].neigh < 2 || arr[i].neigh > 3) newarr[i]['alive']  = false;
        if (arr[i].neigh === 3) newarr[i]['alive'] = true;
    }
    return newarr;
}

const changeGrid = arr => {//read game-field, change array.alive and generate array.neigh
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = document.getElementById(i);
        newarr[i] = {alive: element.checked};
    }
    calcNeighbors(newarr);
    return newarr;
}

let grid = generateGrid(prompt('Введите размер поля:',0));
outpuGrid(grid);

let button = document.querySelector('#next');
button.addEventListener('click', _=> outpuGrid(nextGrid(changeGrid(grid))));