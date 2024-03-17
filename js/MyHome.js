// 사용자 정보 로딩 함수 (예시 데이터 사용)
function loadUserInfo() {
    var userInfo = {
        username: "user123",
        name: "홍길동",
        email: "user@example.com",
        phoneNumber: "010-1234-5678",
        signupDate: "2024-03-17"
    };

    document.getElementById("username").textContent = userInfo.username;
    document.getElementById("name").textContent = userInfo.name;
    document.getElementById("email").textContent = userInfo.email;
    document.getElementById("phoneNumber").textContent = userInfo.phoneNumber;
    document.getElementById("signupDate").textContent = userInfo.signupDate;
}

// 회원 탈퇴 함수
function withdraw() {
    if (confirm("정말로 회원 탈퇴하시겠습니까?")) {
        // 여기에 회원 탈퇴 처리 로직 추가
        alert("회원 탈퇴가 완료되었습니다.");
        // 회원 탈퇴 후 로그인 페이지로 이동
        window.location.href = "/html/MainHome.html";
    }
}

// 페이지 로드 시 사용자 정보 로딩
window.onload = function () {
    loadUserInfo();

    // 회원 탈퇴 버튼 클릭 이벤트 등록
    document.getElementById("withdrawButton").addEventListener("click", withdraw);
};
