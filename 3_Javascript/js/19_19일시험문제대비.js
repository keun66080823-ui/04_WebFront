const create = document.querySelector("#create");
const container = document.querySelector(".container");

create.addEventListener("click", () => {

  // 입력값
  const w = document.querySelector("#w").value;
  const h = document.querySelector("#h").value;
  const text = document.querySelector("#content").value;

  const size = document.querySelector("#fontSize").value;
  const color = document.querySelector("#fontColor").value;

  const align = document.querySelector('input[name="align"]:checked').value;

  // 박스 만들기
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.width = w + "px";
  box.style.height = h + "px";

  // 입력창 만들기
  const input = document.createElement("input");
  input.classList.add("text");
  input.value = text;

  // 글씨 스타일 적용
  input.style.fontSize = size + "px";
  input.style.color = color;
  input.style.textAlign = align;

  // 조립
  box.append(input);
  container.append(box);
});

