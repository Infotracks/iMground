// 로그인 폼(form)에 대한 이벤트 리스너를 추가
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // 사용자가 입력한 아이디와 비밀번호 가져오기
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // 로컬 스토리지에서 회원가입 정보 가져오기
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // 사용자가 입력한 아이디와 비밀번호가 로컬 스토리지에 저장된 값과 일치하는지 확인
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        // 일치하면 성공 메시지를 표시하고 메인 홈페이지로 이동
        alert("로그인 성공!");
        window.location.href = "/HTML/MainHome.html";
    } else {
        // 일치하지 않으면 실패 메시지를 표시
        alert("로그인 실패. 아이디 또는 비밀번호가 일치하지 않습니다.");
    }
});
// 카카오톡으로 로그인하는 함수
function loginOnKakao() {
    alert("카카오톡으로 로그인 완료!!");
}
// 인스타그램으로 로그인하는 함수
function loginOnInstagram() {
    alert("인스타그램으로 로그인 완료!!");
}
// 페이스북으로 로그인하는 함수
function loginOnFacebook() {
    alert("페이스북으로 로그인 완료!!");
}
// 트위터로 로그인하는 함수
function loginOnTwitter() {
    alert("트위터로 로그인 완료!!");
}

document.getElementById('findId').addEventListener('click', function (event) {
    event.preventDefault(); // 기본 이벤트를 방지합니다. (여기서는 링크 이동을 막습니다)
    alert('인증이 필요합니다!!');
});

document.getElementById('findPassword').addEventListener('click', function (event) {
    event.preventDefault(); // 기본 이벤트를 방지합니다.
    alert('인증이 필요합니다!!');
});