document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 기본 동작 방지

    // 사용자 입력 가져오기
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // 간단한 유효성 검사
    if (
        username.trim() === "" ||
        password.trim() === "" ||
        confirmPassword.trim() === "" ||
        email.trim() === "" ||
        name.trim() === "" ||
        phoneNumber.trim() === ""
    ) {
        alert("모든 입력란을 입력하세요.");
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("phoneNumber").style.borderColor = "red";
        return;
    }

    // 아이디 중복 확인
    if (!checkDuplicate("username", username)) {
        alert("아이디가 이미 사용 중입니다.");
        return;
    }

    // 아이디 길이 유효성 검사
    if (username.trim().length <= 6) {
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
        alert("전화번호는 11자리 숫자로만 입력되어야 합니다.");
        return;
    }

    // 이름 유효성 검사
    if (!isValidName(name)) {
        alert("이름은 2~5글자로만 입력 가능합니다.");
        return;
    }

    // 아이디 유효성 검사
    if (!isValidUsername(username)) {
        alert("아이디는 영문 + 숫자로만 입력 가능합니다.");
        return;
    }

    // 비밀번호 유효성 검사
    if (!isValidPassword(password)) {
        alert("비밀번호는 특수문자를 포함하여 10자리~ 16자리까지 입력 가능합니다.");
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

function isValidPhoneNumber(phoneNumber) {
    // 전화번호는 11자리의 숫자로만 이루어져야 함
    return /^\d{11}$/.test(phoneNumber);
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

// --------- 아이디, 비밀번호, 이름, 이메일, 전화번호 포커스 아웃 이벤트 추가 -----
document.getElementById("username").addEventListener("blur", function () {
    var username = document.getElementById("username").value;

    // 아이디 길이 유효성 검사 (6자 이상 12자 이하여야 함)
    if (username.trim().length < 6 || username.trim().length > 12) {
        // 팝업으로 알림 메시지 표시
        alert("아이디는 6자 이상 12자 이하여야 합니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("username").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("usernameErrorMessage").style.display = "block";
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/.test(username)) {
        // 팝업으로 알림 메시지 표시
        alert("아이디는 영문자와 숫자의 조합으로 이루어져야 합니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("username").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("usernameErrorMessage").style.display = "block";
    } else {
        // 입력란의 테두리 색상을 원래대로 변경
        document.getElementById("username").style.borderColor = "green";
        // 경고 메시지 숨기기
        document.getElementById("usernameErrorMessage").style.display = "none";
    }
});




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
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{10,16}$/.test(password)) {
        // 팝업으로 알림 메시지 표시
        alert("비밀번호는 10~16자 영문 + 숫자 + 특수문자 조합으로 입력되어야 합니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("passwordErrorMessage").style.display = "block";
    } else {
        // 입력란의 테두리 색상을 원래대로 변경
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("confirmPassword").style.borderColor = "green";
        // 경고 메시지 숨기기
        document.getElementById("passwordErrorMessage").style.display = "none";
    }
});


// 이메일 유효성 확인 포커스 아웃 이벤트 추가
document.getElementById("email").addEventListener("blur", function () {
    var email = document.getElementById("email").value;

    // 이메일 형식 유효성 검사
    if (!isValidEmail(email)) {
        // 팝업으로 알림 메시지 표시
        alert("올바른 이메일 형식이 아닙니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("email").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("emailErrorMessage").style.display = "block";
    } else {
        // 입력란의 테두리 색상을 원래대로 변경
        document.getElementById("email").style.borderColor = "green";
        // 경고 메시지 숨기기
        document.getElementById("emailErrorMessage").style.display = "none";
    }
});

// 이메일 유효성 검사 함수
function isValidEmail(email) {
    // 이메일 형식 정규 표현식
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// 이름 유효성 검사 및 포커스 아웃 이벤트 추가
document.getElementById("name").addEventListener("blur", function () {
    var name = document.getElementById("name").value;

    // 이름의 길이가 2~5글자이고, 한글로만 이루어져 있는지 확인
    if (!/^[가-힣]{2,5}$/.test(name)) {
        // 팝업으로 알림 메시지 표시
        alert("이름은 한글로 2~5글자 내로 입력 가능합니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("name").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("nameErrorMessage").style.display = "block";
    } else {
        // 입력란의 테두리 색상을 원래대로 변경
        document.getElementById("name").style.borderColor = "green";
        // 경고 메시지 숨기기
        document.getElementById("nameErrorMessage").style.display = "none";
    }
});

// 전화번호 유효성 검사 및 포커스 아웃 이벤트 추가
document.getElementById("phoneNumber").addEventListener("blur", function() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    // 전화번호는 11자리의 숫자로만 입력되어야 한다.
    if(/^\d{11}$/.test(phoneNumber)) {
        // 유효한 전화번호 형식인 경우
        // 입력란의 테두리 색상을 초록색으로 변경
        document.getElementById("phoneNumber").style.borderColor = "green";
        // 경고 메시지 숨기기
        document.getElementById("phoneNumberErrorMessage").style.display = "none";
    } else {
        // 유효하지 않은 전화번호 형식인 경우
        // 팝업으로 알림 메시지 표시
        alert("전화번호는 11자리의 숫자로만 입력되어야 합니다.");
        // 입력란을 빨간색으로 강조
        document.getElementById("phoneNumber").style.borderColor = "red";
        // 경고 메시지 표시
        document.getElementById("phoneNumberErrorMessage").style.display = "block";
    }
});