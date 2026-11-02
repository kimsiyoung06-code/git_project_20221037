// 로또 번호 생성 화면에서 사용하는 HTML 요소를 가져옵니다.
const numberArea = document.querySelector("#numbers");
const countDisplay = document.querySelector("#count");
const generateButton = document.querySelector("#generate");
const clearButton = document.querySelector("#clear");
const numberGrid = document.querySelector("#number-grid");
const selectedCountDisplay = document.querySelector("#selected-count");
const applyManualButton = document.querySelector("#apply-manual");
const topNumbersArea = document.querySelector("#top-numbers");

// 번호를 생성한 횟수를 저장하고 화면에 표시합니다.
let generationCount = 0;
// 번호를 직접 고르는 동안 선택된 번호를 저장합니다.
let selectedNumbers = [];

// 1~1205회 당첨번호 6개를 번호별로 집계한 횟수입니다(보너스 번호 제외).
const historicalCounts = [
  165, 151, 168, 159, 151, 162, 167, 154, 132, 157,
  163, 177, 174, 169, 162, 166, 166, 172, 165, 166,
  164, 140, 145, 162, 148, 162, 173, 151, 152, 154,
  163, 141, 172, 181, 159, 160, 170, 164, 164, 171,
  146, 151, 162, 159, 170
];

// 1부터 45까지의 번호 중 서로 다른 번호 6개를 섞어서 오름차순으로 반환합니다.
function makeLottoNumbers() {
  const availableNumbers = Array.from({ length: 45 }, (_, index) => index + 1);

  // 피셔-예이츠 셔플로 배열을 섞어 번호가 중복 선택되지 않게 합니다.
  for (let index = availableNumbers.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [availableNumbers[index], availableNumbers[swapIndex]] =
      [availableNumbers[swapIndex], availableNumbers[index]];
  }

  // 섞인 배열의 앞 6개 번호만 선택하고 작은 번호부터 정렬합니다.
  return availableNumbers.slice(0, 6).sort((first, second) => first - second);
}

// 숫자 구간에 맞는 로또 공의 배경색을 반환합니다.
function getBallColor(number) {
  if (number <= 10) return "#f0ad32";
  if (number <= 20) return "#4388d2";
  if (number <= 30) return "#e45b57";
  if (number <= 40) return "#858b91";
  return "#55a66c";
}

// 수동 번호 버튼 45개를 만들고 각 버튼에 과거 출현 횟수를 표시합니다.
function renderNumberChoices() {
  for (let number = 1; number <= 45; number++) {
    const option = document.createElement("button");
    const label = document.createElement("span");
    const frequency = document.createElement("small");

    option.type = "button";
    option.className = "num-option";
    option.dataset.number = number;
    option.setAttribute("aria-pressed", "false");
    option.setAttribute("aria-label", `${number}번, 과거 ${historicalCounts[number - 1]}회 출현`);
    label.textContent = number;
    frequency.textContent = `${historicalCounts[number - 1]}회`;
    option.append(label, frequency);
    numberGrid.append(option);
  }
}

// 출현 횟수가 가장 많은 번호 6개를 횟수와 함께 표시합니다.
function renderTopNumbers() {
  const topNumbers = historicalCounts
    .map((count, index) => ({ number: index + 1, count }))
    .sort((first, second) => second.count - first.count || first.number - second.number)
    .slice(0, 6);

  topNumbers.forEach(({ number, count }) => {
    const item = document.createElement("div");
    const ball = document.createElement("span");
    const frequency = document.createElement("span");

    item.className = "top-item";
    ball.className = "top-ball";
    ball.style.backgroundColor = getBallColor(number);
    ball.textContent = number;
    frequency.textContent = `${count}회`;
    item.append(ball, frequency);
    topNumbersArea.append(item);
  });
}

// 전달받은 번호 6개를 색상이 있는 공 모양 요소로 화면에 표시합니다.
function showNumbers(numbers) {
  numberArea.replaceChildren();

  numbers.forEach((number) => {
    const ball = document.createElement("span");
    ball.className = "ball";
    ball.textContent = number;
    ball.style.backgroundColor = getBallColor(number);
    ball.setAttribute("aria-label", `${number}번`);
    numberArea.append(ball);
  });
}

// 새 번호를 생성하고 생성 횟수 표시를 1 증가시킵니다.
function generateNumbers() {
  showNumbers(makeLottoNumbers());
  generationCount += 1;
  countDisplay.textContent = generationCount;
}

// 선택한 번호 수에 맞춰 버튼 상태와 적용 버튼 활성 여부를 갱신합니다.
function updateManualSelection() {
  selectedCountDisplay.textContent = selectedNumbers.length;
  applyManualButton.disabled = selectedNumbers.length !== 6;

  numberGrid.querySelectorAll(".num-option").forEach((option) => {
    const number = Number(option.dataset.number);
    option.setAttribute("aria-pressed", String(selectedNumbers.includes(number)));
    option.disabled = selectedNumbers.length === 6 && !selectedNumbers.includes(number);
  });
}

// 번호 버튼의 선택을 토글하되, 한 번에 6개까지만 선택할 수 있게 합니다.
function toggleNumberSelection(event) {
  const option = event.target.closest(".num-option");
  if (!option) return;

  const number = Number(option.dataset.number);
  if (selectedNumbers.includes(number)) {
    selectedNumbers = selectedNumbers.filter((selected) => selected !== number);
  } else if (selectedNumbers.length < 6) {
    selectedNumbers.push(number);
    selectedNumbers.sort((first, second) => first - second);
  }

  updateManualSelection();
}

// 선택한 번호 6개를 결과에 적용하고 생성 횟수를 갱신합니다.
function applyManualNumbers() {
  if (selectedNumbers.length !== 6) return;

  showNumbers(selectedNumbers);
  generationCount += 1;
  countDisplay.textContent = generationCount;
}

// 번호 표시를 비우고 생성 횟수를 처음 상태로 되돌립니다.
function clearNumbers() {
  numberArea.replaceChildren();
  const emptyMessage = document.createElement("span");
  emptyMessage.className = "empty";
  emptyMessage.textContent = "번호 뽑기를 눌러 시작하세요";
  numberArea.append(emptyMessage);
  generationCount = 0;
  countDisplay.textContent = generationCount;
  selectedNumbers = [];
  updateManualSelection();
}

// 버튼 클릭에 번호 생성과 초기화 동작을 연결합니다.
generateButton.addEventListener("click", generateNumbers);
clearButton.addEventListener("click", clearNumbers);
numberGrid.addEventListener("click", toggleNumberSelection);
applyManualButton.addEventListener("click", applyManualNumbers);
renderNumberChoices();
renderTopNumbers();
updateManualSelection();
