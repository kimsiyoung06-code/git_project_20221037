const display = document.getElementById("display"); // 한국어 주석: 계산 결과 표시 영역을 가져옵니다.
const numberButtons = document.querySelectorAll("[data-number]"); // 한국어 주석: 숫자 버튼을 모두 가져옵니다.
const operationButtons = document.querySelectorAll("[data-operation]"); // 한국어 주석: 연산 버튼을 모두 가져옵니다.
let currentNumber = "0"; // 한국어 주석: 현재 입력 중인 숫자를 저장합니다.
let savedNumber = null; // 한국어 주석: 첫 번째 계산 숫자를 저장합니다.
let selectedOperation = null; // 한국어 주석: 선택한 연산 기호를 저장합니다.
let startNewNumber = false; // 한국어 주석: 다음 숫자를 새로 입력할지 저장합니다.
// 한국어 주석: 계산 결과의 불필요한 소수 자릿수를 정리합니다.
function formatNumber(number) { // 한국어 주석: 결과 표시용 숫자 변환 함수를 정의합니다.
  if (!Number.isFinite(number)) return "오류"; // 한국어 주석: 유효하지 않은 계산 결과를 오류로 표시합니다.
  return String(Number(number.toPrecision(12))); // 한국어 주석: 부동소수점 오차와 불필요한 0을 정리합니다.
} // 한국어 주석: 결과 표시용 숫자 변환 함수가 끝납니다.
// 한국어 주석: 현재 숫자를 계산기 화면에 표시합니다.
function showNumber() { // 한국어 주석: 화면 표시 함수를 정의합니다.
  display.textContent = currentNumber; // 한국어 주석: 현재 숫자를 화면에 씁니다.
} // 한국어 주석: 화면 표시 함수가 끝납니다.
// 한국어 주석: 숫자 버튼 입력을 현재 숫자에 반영합니다.
function enterNumber(number) { // 한국어 주석: 숫자 입력 함수를 정의합니다.
  if (startNewNumber || currentNumber === "0" || currentNumber === "오류") { // 한국어 주석: 새 숫자를 입력해야 하는지 확인합니다.
    currentNumber = number; // 한국어 주석: 현재 입력을 새 숫자로 바꿉니다.
    startNewNumber = false; // 한국어 주석: 이어서 숫자를 입력할 수 있게 합니다.
  } else { // 한국어 주석: 기존 숫자에 이어 입력하는 경우입니다.
    currentNumber += number; // 한국어 주석: 선택한 숫자를 현재 숫자 뒤에 붙입니다.
  } // 한국어 주석: 숫자 입력 조건 처리를 끝냅니다.
  showNumber(); // 한국어 주석: 바뀐 숫자를 화면에 표시합니다.
} // 한국어 주석: 숫자 입력 함수가 끝납니다.
// 한국어 주석: 선택한 사칙연산으로 두 숫자를 계산합니다.
function calculate(firstNumber, secondNumber, operation) { // 한국어 주석: 두 숫자와 연산 기호를 받습니다.
  if (operation === "+") return firstNumber + secondNumber; // 한국어 주석: 덧셈 결과를 반환합니다.
  if (operation === "-") return firstNumber - secondNumber; // 한국어 주석: 뺄셈 결과를 반환합니다.
  if (operation === "*") return firstNumber * secondNumber; // 한국어 주석: 곱셈 결과를 반환합니다.
  if (operation === "/") return firstNumber / secondNumber; // 한국어 주석: 나눗셈 결과를 반환합니다.
  return secondNumber; // 한국어 주석: 선택된 연산이 없으면 현재 숫자를 반환합니다.
} // 한국어 주석: 사칙연산 함수가 끝납니다.
// 한국어 주석: 연산 버튼 입력을 처리하고 다음 숫자를 기다립니다.
function chooseOperation(operation) { // 한국어 주석: 연산 선택 함수를 정의합니다.
  const number = Number(currentNumber); // 한국어 주석: 현재 숫자를 숫자 자료형으로 변환합니다.
  if (selectedOperation && !startNewNumber) { // 한국어 주석: 먼저 처리할 연산이 있는지 확인합니다.
    if (selectedOperation === "/" && number === 0) { // 한국어 주석: 0으로 나누려는지 확인합니다.
      currentNumber = "오류"; // 한국어 주석: 나눗셈 오류를 저장합니다.
      savedNumber = null; // 한국어 주석: 저장된 숫자를 비웁니다.
      selectedOperation = null; // 한국어 주석: 선택된 연산을 비웁니다.
      startNewNumber = true; // 한국어 주석: 오류 뒤 새 숫자를 입력할 수 있게 합니다.
      showNumber(); // 한국어 주석: 오류를 화면에 표시합니다.
      return; // 한국어 주석: 잘못된 연산을 여기서 끝냅니다.
    } // 한국어 주석: 0 나누기 확인을 끝냅니다.
    currentNumber = formatNumber(calculate(savedNumber, number, selectedOperation)); // 한국어 주석: 앞선 계산 결과를 현재 숫자로 저장합니다.
    showNumber(); // 한국어 주석: 중간 계산 결과를 표시합니다.
  } else { // 한국어 주석: 새 연산을 시작하는 경우입니다.
    savedNumber = number; // 한국어 주석: 현재 숫자를 첫 번째 숫자로 저장합니다.
  } // 한국어 주석: 연산 준비를 끝냅니다.
  selectedOperation = operation; // 한국어 주석: 새 연산 기호를 저장합니다.
  startNewNumber = true; // 한국어 주석: 다음 숫자를 새로 입력하도록 준비합니다.
} // 한국어 주석: 연산 선택 함수가 끝납니다.
// 한국어 주석: 등호 버튼을 눌렀을 때 최종 결과를 계산합니다.
function showResult() { // 한국어 주석: 최종 계산 함수를 정의합니다.
  if (!selectedOperation || savedNumber === null || startNewNumber) return; // 한국어 주석: 계산에 필요한 값이 있는지 확인합니다.
  const number = Number(currentNumber); // 한국어 주석: 현재 숫자를 숫자 자료형으로 변환합니다.
  if (selectedOperation === "/" && number === 0) { // 한국어 주석: 0으로 나누려는지 확인합니다.
    currentNumber = "오류"; // 한국어 주석: 나눗셈 오류를 저장합니다.
  } else { // 한국어 주석: 계산할 수 있는 경우입니다.
    currentNumber = formatNumber(calculate(savedNumber, number, selectedOperation)); // 한국어 주석: 계산 결과를 현재 숫자로 저장합니다.
  } // 한국어 주석: 나눗셈 오류 확인을 끝냅니다.
  savedNumber = null; // 한국어 주석: 첫 번째 숫자를 비웁니다.
  selectedOperation = null; // 한국어 주석: 연산 기호를 비웁니다.
  startNewNumber = true; // 한국어 주석: 다음 숫자 입력을 새로 시작하도록 설정합니다.
  showNumber(); // 한국어 주석: 최종 결과를 화면에 표시합니다.
} // 한국어 주석: 최종 계산 함수가 끝납니다.
// 한국어 주석: 계산 상태를 모두 초기 상태로 되돌립니다.
function clearCalculator() { // 한국어 주석: 초기화 함수를 정의합니다.
  currentNumber = "0"; // 한국어 주석: 현재 숫자를 0으로 초기화합니다.
  savedNumber = null; // 한국어 주석: 저장한 숫자를 비웁니다.
  selectedOperation = null; // 한국어 주석: 선택한 연산을 비웁니다.
  startNewNumber = false; // 한국어 주석: 새 숫자 입력 상태를 초기화합니다.
  showNumber(); // 한국어 주석: 초기 숫자를 화면에 표시합니다.
} // 한국어 주석: 초기화 함수가 끝납니다.
// 한국어 주석: 소수점 버튼 입력을 처리합니다.
function enterDecimal() { // 한국어 주석: 소수점 입력 함수를 정의합니다.
  if (startNewNumber || currentNumber === "오류") { // 한국어 주석: 새 숫자를 입력하는 상태인지 확인합니다.
    currentNumber = "0."; // 한국어 주석: 0 다음에 소수점을 붙여 새 숫자를 시작합니다.
    startNewNumber = false; // 한국어 주석: 현재 숫자에 이어 입력하게 설정합니다.
  } else if (!currentNumber.includes(".")) { // 한국어 주석: 현재 숫자에 소수점이 없는지 확인합니다.
    currentNumber += "."; // 한국어 주석: 숫자 뒤에 소수점을 붙입니다.
  } // 한국어 주석: 소수점 입력 처리를 끝냅니다.
  showNumber(); // 한국어 주석: 바뀐 숫자를 화면에 표시합니다.
} // 한국어 주석: 소수점 입력 함수가 끝납니다.
// 한국어 주석: 현재 숫자의 부호를 양수와 음수 사이에서 바꿉니다.
function changeSign() { // 한국어 주석: 부호 변경 함수를 정의합니다.
  if (currentNumber === "0" || currentNumber === "오류") return; // 한국어 주석: 0과 오류의 부호 변경을 막습니다.
  currentNumber = String(Number(currentNumber) * -1); // 한국어 주석: 현재 숫자의 부호를 반대로 바꿉니다.
  showNumber(); // 한국어 주석: 부호가 바뀐 숫자를 표시합니다.
} // 한국어 주석: 부호 변경 함수가 끝납니다.
// 한국어 주석: 현재 숫자를 백분율로 바꿉니다.
function changePercent() { // 한국어 주석: 백분율 계산 함수를 정의합니다.
  if (currentNumber === "오류") return; // 한국어 주석: 오류 상태에서는 백분율을 계산하지 않습니다.
  currentNumber = formatNumber(Number(currentNumber) / 100); // 한국어 주석: 현재 숫자를 100으로 나눕니다.
  showNumber(); // 한국어 주석: 백분율 결과를 화면에 표시합니다.
} // 한국어 주석: 백분율 계산 함수가 끝납니다.
document.querySelector(".buttons").addEventListener("click", function (event) { // 한국어 주석: 누른 계산기 버튼의 이름을 음성으로 안내합니다.
  const button = event.target.closest("button"); // 한국어 주석: 실제로 눌린 버튼을 찾습니다.
  if (!button || !("speechSynthesis" in window)) return; // 한국어 주석: 버튼이 아니거나 음성 기능을 지원하지 않으면 끝냅니다.
  const buttonNames = { clear: "초기화", sign: "부호 변경", percent: "퍼센트", decimal: "소수점", equals: "계산" }; // 한국어 주석: 기호 대신 자연스러운 이름으로 읽을 버튼을 지정합니다.
  const label = button.getAttribute("aria-label") || buttonNames[button.id] || button.textContent.trim(); // 한국어 주석: 접근성 이름, 기능 이름, 버튼 글자 순으로 읽을 내용을 정합니다.
  const utterance = new SpeechSynthesisUtterance(label); // 한국어 주석: 버튼 이름으로 음성 안내를 만듭니다.
  utterance.lang = "ko-KR"; // 한국어 주석: 한국어 발음으로 설정합니다.
  window.speechSynthesis.cancel(); // 한국어 주석: 빠르게 연속 입력하면 앞선 안내를 멈춥니다.
  window.speechSynthesis.speak(utterance); // 한국어 주석: 선택한 버튼 이름을 말합니다.
}); // 한국어 주석: 버튼 음성 안내 연결을 끝냅니다.
numberButtons.forEach(function (button) { // 한국어 주석: 각 숫자 버튼에 동작을 연결합니다.
  button.addEventListener("click", function () { enterNumber(button.dataset.number); }); // 한국어 주석: 누른 숫자를 입력합니다.
}); // 한국어 주석: 숫자 버튼 연결을 끝냅니다.
operationButtons.forEach(function (button) { // 한국어 주석: 각 연산 버튼에 동작을 연결합니다.
  button.addEventListener("click", function () { chooseOperation(button.dataset.operation); }); // 한국어 주석: 누른 연산을 선택합니다.
}); // 한국어 주석: 연산 버튼 연결을 끝냅니다.
document.getElementById("equals").addEventListener("click", showResult); // 한국어 주석: 등호 버튼에 계산 동작을 연결합니다.
document.getElementById("clear").addEventListener("click", clearCalculator); // 한국어 주석: AC 버튼에 초기화 동작을 연결합니다.
document.getElementById("decimal").addEventListener("click", enterDecimal); // 한국어 주석: 소수점 버튼에 입력 동작을 연결합니다.
document.getElementById("sign").addEventListener("click", changeSign); // 한국어 주석: 부호 버튼에 변경 동작을 연결합니다.
document.getElementById("percent").addEventListener("click", changePercent); // 한국어 주석: 퍼센트 버튼에 계산 동작을 연결합니다.
