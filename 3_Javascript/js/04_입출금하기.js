// prompt 사용연습

function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);

  // 프롬프트 창에서 입력값을 넣으면 -> 문자열로 저장
  // 프롬프트 창에서 취소를 누르면 -> null

  if (password == null) { // 취소를 눌렀다면
    alert("취소");

  } else { // 확인을 눌렀다면

    if (password == '1234') { // 지정한 비밀번호 1234와 같다면
      alert("비밀번호 일치");
    } else { // 비밀번호가 다르다면
      alert("비밀번호 불일치");
    }

  }

}

// -----------------------------------------------

const amount = document.getElementById("amount");
// 금액 작성 input 요소 -> <input type="text" id="amount">
const output = document.getElementById("output");
// 잔액 출력 span 요소 -> <h1>잔액 : <span id="output"></span> 원</h1>

let balance = 10000; // 잔액 기록 변수(초기값 10000)
const pw = '1234'; // 비밀번호 저장 변수

output.innerText = balance;

// 입금 함수
function deposit(){
  // input에 입력된 금액 구하기

  // amount.value.length == 0
  if(amount.value.length == 0) {
    alert("금액을 입력해주세요!");
  
  } else { // 입력이 되었다면
    // 구한 금액을 잔액(balance)에 누적
    // 구한 금액(amount.value)이 현재 string
    // -> Number() 를 이용하여 number(숫자)타입으로 형변환
    balance += Number(amount.value);
    output.innerText = balance;
    amount.value = '';
  }
}

// 출금 함수
function withdrawal(){
  if(amount.value.length == 0){
    alert("금액을 입력해주세요!");

  } else {
    const password = prompt("비밀번호를 입력하세요.");
  
    if (password == null) { // 취소버튼 누름 
      alert("출금이 취소됨");
  
    } else { // 확인 버튼 누름
      if (password == pw) { // 비밀번호가 일치하면
        const money = Number(amount.value)

        if(balance < money) {
          alert("출금 금액이 잔액보다 클 수 없습니다");

        } else {

          balance -= money;
          output.innerText = balance;
          amount.value = '';

          alert(`${money}원이 출금되었습니다. 남은 잔액 :${balance}원`);
          // 템플릿 리터럴(Template Literal)
          // 백틱(``)을 사용하여 문자열을 감싸고,
          // ${} 안에 변수/값을 넣어 동적으로 문자열을 생성하는 방식
        }
  
      } else { // 비밀번호가 다르다면
        alert("비밀번호가 일치하지 않습니다.");
      }
  
    }

  }


}

