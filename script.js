// CONTAINER FOR SQUARES

const page = document.querySelector("body");
const cont = document.createElement("div");
cont.classList.add("container");
page.appendChild(cont);

// FUNCTIONS

function createSquares() {
    for (let i=1; i<=256; i++) {
        let square = document.createElement("div");
        square.setAttribute("id", `${i}`);
        square.setAttribute("class", "square");
        square.textContent = "";

        cont.appendChild(square);
    };
};

createSquares();

// HOVER SCRIPT

const units = document.querySelectorAll(".square");
units.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("active");
    });
});