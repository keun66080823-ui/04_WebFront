const size = document.querySelector("#font-size");
const color = document.querySelector("#font-color");
const text = document.getElementById("textarea");
const newText = document.getElementById("newText");

document.getElementById("font-apply").addEventListener("click", () => {
  text.style.fontSize = Number(size.value)+"px"; 
  text.style.color = color.value;
});

document.getElementById("text-enter").addEventListener("click", (e) => {
  const box = document.createElement("div");
  box.innerText= text.value;
  newText.append(box);

  box.style.fontSize = Number(size.value) + "px";
  box.style.color = color.value;
});