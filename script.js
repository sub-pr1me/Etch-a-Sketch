
const container = document.getElementById("container")

// FUNCTIONS

function createContainer() {
let square = document.createElement("div");
square.setAttribute("class", "square");
square.textContent = "*";
container.appendChild(square);
};

function multiplyContainer() {
    for (let i=0; i<9; i++) {
        createContainer();
    };
};