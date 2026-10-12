// script.js - 포트폴리오 마우스 이벤트 및 드롭다운 기능

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. 프로필 카드 마우스오버/마우스아웃 이벤트 (제시해주신 예제 응용)
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
        profileCard.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#f1f8ff"; // 마우스 올렸을 때 연한 하늘색 배경
            this.style.borderColor = "#2ecc71";     // 테두리 색상 포인트
            this.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
        });

        profileCard.addEventListener("mouseout", function () {
            this.style.backgroundColor = "white";    // 원래 배경으로 복구
            this.style.borderColor = "#dee2e6";
            this.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
        });
    }

    // 2. 포트폴리오 카드들 마우스 이벤트 (mouseover / mouseout)
    const cardLinks = document.querySelectorAll(".card-link");
    cardLinks.forEach(function (link) {
        const card = link.querySelector(".card");
        
        if (card) {
            card.addEventListener("mouseover", function () {
                card.style.backgroundColor = "#e8f8f5"; // 민트빛 배경으로 강조
                card.style.borderColor = "#2ecc71";
            });

            card.addEventListener("mouseout", function () {
                card.style.backgroundColor = "white";
                card.style.borderColor = "#dee2e6";
            });
        }
    });

    // 3. 서브 메뉴 마우스 드롭다운 / 호버 효과 구현
    // 만약 sub-nav에 드롭다운 기능을 추가하고 싶다면 아래와 같이 활용할 수 있습니다.
    const subNavItems = document.querySelectorAll(".sub-nav a");
    subNavItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            this.style.transform = "translateY(-2px)";
        });
        item.addEventListener("mouseout", function () {
            this.style.transform = "translateY(0)";
        });
    });

    // 4. 방명록 로컬 스토리지 연동 (새로고침해도 방명록 유지)
    loadComments();
});

// 방명록 추가 함수
function addComment() {
    const nameInput = document.getElementById('writerName');
    const messageInput = document.getElementById('writerMessage');
    
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert('이름과 내용을 모두 입력해주세요!');
        return;
    }

    const today = new Date().toISOString().slice(0, 10);
    const newComment = { name, message, date: today };

    // 로컬 스토리지에서 기존 목록 불러오기
    let comments = JSON.parse(localStorage.getItem('portfolioComments')) || [];
    comments.unshift(newComment); // 최신글을 맨 위에 추가
    localStorage.setItem('portfolioComments', JSON.stringify(comments));

    // 화면 렌더링 갱신
    renderComments();

    // 입력창 초기화
    nameInput.value = '';
    messageInput.value = '';
}

// 방명록 삭제 함수
function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem('portfolioComments')) || [];
    comments.splice(index, 1); // 해당 인덱스 아이템 삭제
    localStorage.setItem('portfolioComments', JSON.stringify(comments));
    renderComments();
}

// 방명록 화면에 그려주는 함수
function renderComments() {
    const list = document.getElementById('commentList');
    if (!list) return;

    let comments = JSON.parse(localStorage.getItem('portfolioComments')) || [];
    
    // 기본 예시 데이터가 없을 경우를 대비해 초기 HTML 유지 혹은 로컬스토리지 기반 출력
    let html = '';
    
    if (comments.length === 0) {
        html = `<li class="list-group-item text-center text-muted small py-3">작성된 방명록이 없습니다. 첫 글을 남겨보세요!</li>`;
    } else {
        comments.forEach((c, idx) => {
            html += `
                <li class="list-group-item d-flex justify-content-between align-items-center small py-3">
                    <div>
                        <strong>${c.name}</strong>: <span class="text-secondary">${c.message}</span>
                        <span class="text-muted ms-2 small" style="font-size: 11px;">${c.date}</span>
                    </div>
                    <button class="btn btn-outline-danger btn-sm py-0 px-2" onclick="deleteComment(${idx})" style="font-size: 12px;">삭제</button>
                </li>
            `;
        });
    }
    list.innerHTML = html;
}

// 페이지 로드시 방명록 불러오기 실행
function loadComments() {
    // 만약 로컬스토리지에 데이터가 아예 없다면 기본 '교수님' 방명록을 기본값으로 세팅
    if (!localStorage.getItem('portfolioComments')) {
        const defaultComments = [
            { name: "교수님", message: "포트폴리오 구성이 아주 훌륭합니다!", date: "2026-09-28" }
        ];
        localStorage.setItem('portfolioComments', JSON.stringify(defaultComments));
    }
    renderComments();
}