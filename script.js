// CONTAINER FOR SQUARES

const page = document.querySelector("body");
const cont = document.createElement("div");
cont.classList.add("container");
page.appendChild(cont);

let input = 16;

// FUNCTIONS

function createSquares() {
    for (let i=1; i<=(input*input); i++) {
        let square = document.createElement("div");
        square.setAttribute("id", `${i}`);
        square.setAttribute("class", "square");
        square.textContent = "";

        cont.appendChild(square);
    };
};
createSquares();

// HOVER SCRIPT

function hover() {
    const units = document.querySelectorAll(".square");
    let sqrs = units;
    sqrs.forEach((div) => {
        div.addEventListener("mouseover", () => {
        div.classList.add("active");
        });
    });
};
hover();

//BUTTON SCRIPT

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    const units = document.querySelectorAll(".square");
    let k = prompt('Set the number of squares per side (16-100)');
    if (k > 15 && k < 101) {
        input -= input;
        input += Number(k);
        units.forEach((div) => {
            cont.removeChild(div);
        });
    createSquares();
    hover();
    cont.style.width = `${(input*10)}px`;
    cont.style.height = `${(input*10)}px`;
    } else {
        alert('The number is out of the specified range! Please enter a number between 16 and 100!')
    };
});