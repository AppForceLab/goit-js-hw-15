function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const initialSize = 30;
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = initialSize + i * 10 + "px";
    box.style.height = initialSize + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
