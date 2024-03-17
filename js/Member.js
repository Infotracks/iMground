// Member.js

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 기본 동작 방지

    // 사용자 입력 가져오기
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var carrier = document.getElementById("carrier").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // 간단한 유효성 검사
    if (
        username.trim() === "" ||
        password.trim() === "" ||
        confirmPassword.trim() === "" ||
        email.trim() === "" ||
        name.trim() === "" ||
        carrier.trim() === "" ||
        phoneNumber.trim() === ""
    ) {
        alert("모든 입력란을 입력하세요.");
        return;
    }

    // 비밀번호가 일치하지 않을 때
    if (password !== confirmPassword) {
        // 경고 메시지 표시
        alert("비밀번호가 일치하지 않습니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        return;
    }

    // 아이디 중복 확인
    if (!checkDuplicate("username", username)) {
        alert("아이디가 이미 사용 중입니다.");
        return;
    }

    // 아이디 길이 유효성 검사
    if (username.trim().length < 6) {
        alert("아이디는 최소 6글자 이상이어야 합니다.");
        return;
    }

    // 이메일 중복 확인
    if (!checkDuplicate("email", email)) {
        alert("이메일이 이미 사용 중입니다.");
        return;
    }

    // 전화번호 유효성 검사
    if (!isValidPhoneNumber(phoneNumber)) {
        alert("전화번호는 11자리의 숫자로만 입력되어야 합니다.");
        return;
    }

    // 이름 유효성 검사
    if (!isValidName(name)) {
        alert("이름은 2~4글자로만 입력 가능합니다.");
        return;
    }

    // 아이디 유효성 검사
    if (!isValidUsername(username)) {
        alert("아이디는 영문과 숫자로만 입력 가능합니다.");
        return;
    }

    // 비밀번호 유효성 검사
    if (!isValidPassword(password)) {
        alert("비밀번호는 특수문자를 포함하여 13자리까지 입력 가능합니다.");
        return;
    }

    // 로컬 스토리지에 회원가입 정보 저장 (예시로 username과 password만 저장)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("회원가입이 완료되었습니다.");
    window.location.href = "Login.html";
});

document.getElementById("checkUsername").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    if (checkDuplicate("username", username)) {
        alert("사용 가능한 아이디입니다.");
    } else {
        alert("이미 사용 중인 아이디입니다.");
    }
});

document.getElementById("checkEmailButton").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    if (checkDuplicate("email", email)) {
        alert("사용 가능한 이메일입니다.");
    } else {
        alert("이미 사용 중인 이메일입니다.");
    }
});

function checkDuplicate(field, value) {
    // TODO: 실제 서버와의 통신을 통한 중복 확인 로직 구현
    // 가상으로 중복 확인 결과를 반환 (실제 서버 연동 필요)
    if (field === "username") {
        // 아이디 중복 확인 로직 (가상)
        return value !== "existingUsername";
    } else if (field === "email") {
        // 이메일 중복 확인 로직 (가상)
        return value !== "existing@email.com";
    }
    return true; // 기본적으로 중복이 아닌 것으로 가정
}

function isValidPhoneNumber(phoneNumber) {
    // 전화번호는 11자리의 숫자로만 이루어져야 함
    return /^\d{11}$/.test(phoneNumber);
}

function isValidName(name) {
    // 이름은 2~4글자로만 이루어져야 함
    return /^[가-힣]{2,4}$/.test(name);
}

function isValidUsername(username) {
    // 아이디는 영문과 숫자로만 이루어져야 함
    return /^[a-zA-Z0-9]+$/.test(username);
}

function isValidPassword(password) {
    // 비밀번호는 특수문자를 포함하여 13자리까지 이루어져야 함
    return /^(?=.*[a-zA-Z0-9!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{1,13}$/.test(password);
}

// 팝업 알림으로 메시지를 표시하는 함수
function showPopupMessage(message) {
    // 팝업 메시지 요소 생성
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = message;

    // 팝업 메시지를 body 요소에 추가
    document.body.appendChild(popup);

    // 2초 후에 팝업 메시지를 제거
    setTimeout(function () {
        popup.remove();
    }, 2000);
}

// 비밀번호 확인 입력란에 포커스 아웃 이벤트 추가
document.getElementById("confirmPassword").addEventListener("blur", function () {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // 비밀번호와 비밀번호 확인이 일치하지 않을 때
    if (password !== confirmPassword) {
        // 팝업으로 알림 메시지 표시
        alert("비밀번호가 일치하지 않습니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("passwordErrorMessage").style.display = "block";
    } else {
        // 입력란의 테두리 색상을 원래대로 변경
        document.getElementById("password").style.borderColor = "";
        document.getElementById("confirmPassword").style.borderColor = "";
        // 경고 메시지 숨기기
        document.getElementById("passwordErrorMessage").style.display = "none";
    }
});