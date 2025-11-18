const createBox
  = document.querySelector("#createBox");

const container
  = document.querySelector(".container");

createBox.addEventListener("click", () => {

  const box = document.createElement("div");
  box.classList.add("box");

  const input = document.createElement("input");
  input.classList.add("text");

  box.append(input);
  container.append(box);

});

const size = document.querySelector("#font-size");
const color = document.querySelector("#font-color");
const fontApply = document.querySelector("#font-apply");

fontApply.addEventListener("click", () => {
  const texts = document.querySelectorAll(".text");

  for (let i = 0; i < texts.length; i++) {
    texts[i].style.fontSize = Number(size.value) + "px";
    texts[i].style.color = color.value;
  }
});