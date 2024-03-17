// DOMContentLoaded 이벤트가 발생하면 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {

    // HTML 요소들을 가져오기(HTML 문서에서 필요한 요소들을 ID를 통해 선택하여 변수에 할당)
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const progressBar = document.getElementById("progress-fill");
    const backButton = document.getElementById("back-btn");
    const snsShareButton = document.getElementById("share-text");
    const snsIconsPopup = document.getElementById("sns-icons-popup");

    // MBTI 테스트 질문 목록
    const questions = [
        "프로젝트를 하면서 팀원들과 이야기 나누는 것이 즐겁다",
        "분할 작업에서 어려움을 느낄 때 팀원들과 함께 의논하여 해결하는 편이다",
        "강의실에서 다른 팀원들과도 이야기를 나눠보고 싶은 생각이 종종 든다",
        "강의실 내 누구나 먼저 다가가서 쉽게 말을 걸 수 있다",
        "프로젝트를 혼자보다 여럿이 하고 싶다",
        "프로젝트를 기획할 때 과거의 경험에 많이 의존하는 편이다",
        "프로젝트 중 주관적으로 괜찮은 아이디어가 생기면 바로 실행할 것이다",
        "정해진 프로젝트에서 나와 다른 의견을 가지는 팀원을 이해하기 어렵다",
        "프로젝트 중 내가 어떤 일을 해야 하는지 명확히 이해하고 있다",
        "프로젝트 중 팀원의 아이디어에 해결될만한 질문을 많이 하는 편이다",
        "프로젝트 중 팀원이 잘 따르지 않을 때 감정적으로 반응한다",
        "프로젝트에서 팀원이 지적한 말이 머릿속에 자주 남는 편이다",
        "팀원 간의 갈등이나 의견 충돌이 발생하면, 이 상황을 회피하고 싶다",
        "프로젝트를 진행할 때 일정과 계획보다는 소통과 협력이 더 중요하다고 생각한다",
        "나는 팀원의 행동, 말투, 생각을 대체로 이해하려고 노력한다",
        "프로젝트를 시작하기 전 철저한 계획을 세운다",
        "누가 역할 분담을 해주지 않아도 알아서 프로젝트를 할 수 있다",
        "일이 주어지면 마감 기간을 정확히 지키는 편이다",
        "해야 할 일을 마지막까지 미루지 않는다",
        "프로젝트 중 팀원이 잘 따르지 않을 때 어떻게 하면 내보낼 수 있을지 계획한다",
    ];

    // MBTI 결과
    const resultMap = {
        "ENFJ": "모두를 아우르는 열정킹",
        "ENFP": "고개만 끄덕이는 프로 공감러",
        "ENTJ": "리더형 전략가",
        "ENTP": "날카로운 통찰력의 프로 지적러",
        "ESFJ": "사교성 강한 인싸형",
        "ESFP": "날 이끌어줘~~ 놀자형",
        "ESTJ": "꽃밭 팀원을 이끄는 리더",
        "ESTP": "모든 아이디어를 도전하는 프로도끼러",
        "INFJ": "걸어다니는 아이디어 뱅크",
        "INFP": "소심한 아이디어 뱅크",
        "INTJ": "전략적인 MasterMind",
        "INTP": "논리적인 탐구형",
        "ISFJ": "프로젝트 수호자",
        "ISFP": "예술적인 프로젝터",
        "ISTJ": "신중하고 철저한 검사관",
        "ISTP": "현실적 조언러 만능 재주꾼"
    };

    // MBTI 카테고리
    const mbtiCategories = {
        "EI": ["E", "I"],
        "SN": ["S", "N"],
        "FT": ["F", "T"],
        "JP": ["J", "P"]
    };

    const selectedAnswers = [];

    function calculateMBTI() {
        let mbtiResult = "";
        for (const category in mbtiCategories) {
            const categoryAnswers = selectedAnswers.slice(0, questions.length);
            const dominantAnswer = getDominantAnswer(categoryAnswers, category);
            mbtiResult += dominantAnswer;
        }
        return mbtiResult;
    }

    // 각 카테고리에서 가장 높은 빈도로 선택된 응답을 찾는 함수
    function getDominantAnswer(answers, category) {
        const count = {
            "E": 0,
            "I": 0,
            "S": 0,
            "N": 0,
            "T": 0,
            "F": 0,
            "J": 0,
            "P": 0
        };

        answers.forEach(answer => {
            if (answer) count[answer]++;
        });

        const categories = mbtiCategories[category];
        let dominantAnswer = categories[0]; // Default to the first category

        categories.forEach(cat => {
            if (count[cat] > count[dominantAnswer]) {
                dominantAnswer = cat;
            }
        });
        return dominantAnswer;
    }

    // 현재 질문의 인덱스
    let currentQuestionIndex = 0;

    // 현재 질문을 화면에 표시하는 함수
    function showQuestion() {
        questionContainer.style.display = "block";
        resultContainer.style.display = "none";
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = `Q${currentQuestionIndex + 1}: ${currentQuestion}`;
        updateButtonsState();
    }

    // 특정 질문 번호로 이동하는 함수
    function showQuestionByIndex(index) {
        if (index >= 0 && index < questions.length) {
            currentQuestionIndex = index;
            showQuestion();
            updateProgressBar();
            highlightSelectedAnswer();
        }
    }

    // 각 질문 버튼에 클릭 이벤트 추가
    for (let i = 0; i < questions.length; i++) {
        const questionButton = document.getElementById(`question${i + 1}-btn`);
        if (questionButton) {
            questionButton.addEventListener("click", function () {
                showQuestionByIndex(i);
            });
        }
    }

    // 특정 질문 번호로 이동하는 함수
    function goToQuestionByNumber(number) {
        const questionIndex = number - 1;
        showQuestionByIndex(questionIndex);
    }

    // MBTI 결과를 화면에 표시하는 함수
    function showResult(result) {
        const mbtiType = resultMap[result] || "미분류 MBTI 유형"; // resultMap에 없는 경우 처리 추가
        resultText.innerText = `당신의 MBTI 유형은 ${result} (${mbtiType}) 입니다.`;
        alert("결과 확인하기!!");
        resetProgressBar();
        resultContainer.style.display = "block";
        questionContainer.style.display = "none";
    }

    function updateButtonsState() {
        yesButton.disabled = selectedAnswers[currentQuestionIndex] === "yes";
        noButton.disabled = selectedAnswers[currentQuestionIndex] === "no";
    }

    function highlightSelectedAnswer() {
        const allButtons = document.querySelectorAll("#question-container button");
        allButtons.forEach((button) => {
            button.style.fontWeight = "normal";
        });

        const selectedAnswer = selectedAnswers[currentQuestionIndex];
        if (selectedAnswer) {
            const selectedButton = selectedAnswer === "yes" ? yesButton : noButton;
            selectedButton.style.fontWeight = "bold";
        }
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / (questions.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function resetProgressBar() {
        progressBar.style.width = "0";
    }

    function openSharePopup() {
        snsIconsPopup.style.display = "block";
    }

    // 공유 아이콘 클릭 시 공유 팝업을 열기
    snsShareButton.addEventListener("click", function () {
        openSharePopup();
    });

    // 공유 팝업 이외의 영역 클릭 시 팝업 닫기
    document.addEventListener("click", function (event) {
        if (event.target !== snsShareButton && !snsIconsPopup.contains(event.target)) {
            snsIconsPopup.style.display = "none";
        }
    });

    function nextQuestion(answer) {
        switch (currentQuestionIndex) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                selectedAnswers[currentQuestionIndex] = answer === "yes" ? "E" : "I";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                selectedAnswers[currentQuestionIndex] = answer === "yes" ? "S" : "N";
                break;
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                selectedAnswers[currentQuestionIndex] = answer === "yes" ? "F" : "T";
                break;
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                selectedAnswers[currentQuestionIndex] = answer === "yes" ? "J" : "P";
                break;
        }

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
            updateProgressBar();
            highlightSelectedAnswer();
        } else {
            const result = calculateMBTI();
            showResult(result);
        }
    }

    // Yes 버튼 클릭 시 다음 질문으로 이동
    yesButton.addEventListener("click", function () {
        nextQuestion("yes");
    });

    // No 버튼 클릭 시 다음 질문으로 이동
    noButton.addEventListener("click", function () {
        nextQuestion("no");
    });

    // 이전 질문으로 이동하는 함수
    backButton.addEventListener("click", function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
            updateProgressBar();
        }
    });
    
    // 초기에 첫 번째 질문을 표시
    showQuestion();
    highlightSelectedAnswer();
});