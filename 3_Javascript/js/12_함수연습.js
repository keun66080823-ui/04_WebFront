const num = document.querySelectorAll("li");
// 1번 : name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
num[0].addEventListener("click", function(name){
  name = "world";
  console.log(`Hello,${name}!`);
});

// 2번 : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
function add(a, b) {
  a = 2;
  b = 3;
  return a + b;
}
num[1].addEventListener("click", function(x, y){
  console.log(`두 수의 합 = ` + add(x, y));
})

// 3번 : 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
function multi(a, b){
  a = 2;
  b = 3;
  return a*b;
}

num[2].addEventListener("click", (x,y) => {
  console.log(multi(x, y));
});

// 4번 : 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 
// "첫 번째 숫자가 더 큽니다"를 출력하고, 그렇지 않으면 
// "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
function bigger(a, b){
  if(a > b){
    return "첫 번째 숫자가 더 큽니다";
  } else {
    return "두 번째 숫자가 더 크거나 같습니다";
  }
}

num[3].addEventListener("click", (x, y) => {
  x = 8;
  y = 23;
  console.log(bigger(x,y));
});

// 5번 : 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
num[4].addEventListener("click", function length(text) {
  text = "동해물과백두산이마르고닳도록";
  
});
