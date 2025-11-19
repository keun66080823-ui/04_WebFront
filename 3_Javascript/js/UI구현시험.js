const create = document.querySelector("#create");
const container = document.querySelector(".container");

create.addEventListener("click", () => {

  // 박스 설정
  const w = document.querySelector("#w").value; //성공
  const h = document.querySelector("#h").value; //성공
  const text = document.querySelector("#content").value; //성공
  const backColor = document.querySelector("#backColor").value; //성공
  // 폰트
  const size = document.querySelector("#fontSize").value; //성공
  const color = document.querySelector("#fontColor").value; //성공
  const align = document.querySelector('input[name="align"]:checked').value; //성공
  const height = document.querySelector('input[name="height"]:checked').value; //실패
  const weight = document.querySelector('input[name="fontWeight"]').value; //실패
  // 박스
  const box = document.createElement("div"); //성공
  box.classList.add("box"); //성공
  box.style.width = w + "px"; //성공
  box.style.height = h + "px"; //성공
  
  // 출력 문자열
  const input = document.createElement("input"); //성공
  input.classList.add("text"); //성공
  input.value = text; //성공
  input.style.backgroundColor = backColor; //성공

  // 글씨
  input.style.fontSize = size + "px"; //성공
  input.style.color = color; //성공
  input.style.textAlign = align; //성공
  input.style.flexDirection = height; //실패. 11_글자관련스타일에 없음... 대체 무슨 코드를 써야 되지...
  input.style.fontWeight = Number(weight) + "px"; //실패. 대체 뭐가 문제일까...

  box.append(input);
  container.append(box);
});