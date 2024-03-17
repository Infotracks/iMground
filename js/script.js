
var num = 1;
var q = {
    // EI
    1: {
        "number" : "STEP 1",
        "title" : "프로젝트를 하면서 팀원들과 이야기 나누는 것이 즐겁다",
        "type" : "EI",
        "A" : "그렇다",
        "B" : "아니다"
    },
    2: {
        "number" : "STEP 2",
        "title" : "분할 작업에서 어려움을 느낄 때 팀원들과 함께 의논하여 해결하는 편이다",
        "type" : "EI",
        "A" : "그렇다",
        "B" : "아니다"
    },

    3: {
        "number" : "STEP 3",
        "title" : "강의실에서 다른 팀원들과도 이야기를 나눠보고 싶은 생각이 종종 든다",
        "type" : "EI",
        "A" : "그렇다",
        "B" : "아니다"
    },

    4: {
        "number" : "STEP 4",
        "title" : "강의실 내 누구나 먼저 다가가서 쉽게 말을 걸 수 있다",
        "type" : "EI",
        "A" : "그렇다",
        "B" : "아니다"
    },

    5: {
        "number" : "STEP 5",
        "title" : "프로젝트를 혼자보다 여럿이 하고 싶다",
        "type" : "EI",
        "A" : "그렇다",
        "B" : "아니다"
    },
    // SN
    6: {
        "number" : "STEP 6",
        "title" : "프로젝트를 기획할 때 과거의 경험에 많이 의존하는 편이다",
        "type" : "SN",
        "A" : "그렇다",
        "B" : "아니다"
    },
    7: {
        "number" : "STEP 7",
        "title" : "프로젝트 중 주관적으로 괜찮은 아이디어가 생기면 바로 실행할 것이다",
        "type" : "SN",
        "A" : "그렇다",
        "B" : "아니다"
    },
    8: {
        "number" : "STEP 8",
        "title" : "정해진 프로젝트에서 나와 다른 의견을 가지는 팀원을 이해하기 어렵다",
        "type" : "SN",
        "A" : "그렇다",
        "B" : "아니다"
    },

    9: {
        "number" : "STEP 9",
        "title" : "프로젝트 중 내가 어떤 일을 해야 하는지 명확히 이해하고 있다",
        "type" : "SN",
        "A" : "그렇다",
        "B" : "아니다"
    },
    10: {
        "number" : "STEP 10",
        "title" : "프로젝트 중 팀원의 아이디어에 해결될만한 질문을 많이 하는 편이다",
        "type" : "SN",
        "A" : "그렇다",
        "B" : "아니다"
    },
    // FT
    11: {
        "number" : "STEP 11",
        "title" : "프로젝트 중 팀원이 잘 따르지 않을 때 감정적으로 반응한다",
        "type" : "FT",
        "A" : "그렇다",
        "B" : "아니다"
    },
    12: {
        "number" : "STEP 12",
        "title" : "프로젝트에서 팀원이 지적한 말이 머릿속에 자주 남는 편이다",
        "type" : "FT",
        "A" : "그렇다",
        "B" : "아니다"
    },
    13: {
        "number" : "STEP 13",
        "title" : "팀원 간의 갈등이나 의견 충돌이 발생하면, 이 상황을 회피하고 싶다",
        "type" : "FT",
        "A" : "그렇다",
        "B" : "아니다"
    },
    14: {
        "number" : "STEP 14",
        "title" : "프로젝트를 진행할 때 일정과 계획보다는 소통과 협력이 더 중요하다고 생각한다",
        "type" : "FT",
        "A" : "그렇다",
        "B" : "아니다"
    },
    15: {
        "number" : "STEP 15",
        "title" : "나는 팀원의 행동, 말투, 생각을 대체로 이해하려고 노력한다",
        "type" : "FT",
        "A" : "그렇다",
        "B" : "아니다"
    },
    // JP
    16: {
        "number" : "STEP 16",
        "title" : "프로젝트를 시작하기 전 철저한 계획을 세운다",
        "type" : "JP",
        "A" : "그렇다",
        "B" : "아니다"
    },
    17: {
        "number" : "STEP 17",
        "title" : "누가 역할 분담을 해주지 않아도 알아서 프로젝트를 할 수 있다",
        "type" : "JP",
        "A" : "그렇다",
        "B" : "아니다"
    },
    18: {
        "number" : "STEP 18",
        "title" : "일이 주어지면 마감 기간을 정확히 지키는 편이다",
        "type" : "JP",
        "A" : "그렇다",
        "B" : "아니다"
    },
    19: {
        "number" : "STEP 19",
        "title" : "해야 할 일을 마지막까지 미루지 않는다",
        "type" : "JP",
        "A" : "그렇다",
        "B" : "아니다"
    },
    20: {
        "number" : "STEP 20",
        "title" : "프로젝트 중 팀원이 잘 따르지 않을 때 어떻게 하면 내보낼 수 있을지 계획한다",
        "type" : "JP",
        "A" : "그렇다",
        "B" : "아니다"
    },

}

var result = {
    "ISTJ" : {
        "stat" : "신중하고 철저한 검사관",
        // "food": "'컵라면'",
        // "img" : "images/product/noodle.png",
        "subtitle" : "ISTJ",
        "explain" : "보수적인 성격" + "<br />" + "이거 왜 안해오셨어요..?"
    },
    "ISFJ" : {
        "stat" : "프로젝트 수호자",
        // "food" : "'핫도그'",
        // "img" : "images/product/hotdog.png",
        "subtitle" : "ISFJ",
        "explain" : "무난한 프로젝트 주제 선택" + "<br />" + "이정도면 됐어!"
    },
    "INFJ" : {
        "stat" : "걸어다니는 아이디어 뱅크",
        // "food": "'모찌 롤 케이크'",
        // "img" : "images/product/mozzie.png",
        "subtitle" : "INFJ",
        "explain" : "이거 재밌을거 같은데 해볼래요?"

    },
    "INTJ" : {
        "stat" : "전략적인 MasterMind",
        // "food": "프링글스",
        // "img" : "images/product/pringles.png",
        "subtitle" : "INTJ",
        "explain" : "차근차근 기획부터!" + "<br />" + "계획한대로! 차례대로!"
    },

    "ISTP" : {
        "stat" : "현실적 조언러",
        // "food": "냉동치킨",
        // "img" : "images/product/chicken.png",
        "subtitle" : "ISTP",
        "explain" : "문제점은 못참지..!" + "<br />" + "만능 재주꾼!"
    },
    "ISFP" : {
        "stat" : "예술적인 프로젝터",
        // "food" : "'샌드위치'",
        // "img" : "images/product/sandwich.png",
        "subtitle" : "ISFP",
        "explain" : "오늘은 이 아이디어가 땡기는군!" + "<br />" + "이 아이디어 어때요??"
    },
    "INFP" : {
        "stat" : "소심한 아이디어 뱅크",
        // "food": "'치즈볼'",
        // "img" : "images/product/cheeseball.png",
        "subtitle" : "INFP",
        "explain" : "이거 재밌을거 같지 않아요..?" + "<br />"
    },
    "INTP" : {
        "stat" : "논리적인 탐구형",
        // "food": "'국물짬뽕'",
        // "img" : "images/product/jjambbong.png",
        "subtitle" : "INTP",
        "explain" : "보니까.. 이거 좋은데요?" + "<br />"
    },

    "ESTP" : {
        "stat" : "모든 아이디어를 도전하는 프로도끼러",
        // "food": "'케이준 치킨 샐러드'",
        // "img" : "images/product/cajun.png",
        "subtitle" : "ESTP",
        "explain" : "이것도 좋을것 같고..! + <br /> +저것도 좋을 것 같고..!"
    },
    "ESFP" : {
        "stat" : "날 이끌어줘~~ 놀자형",
        // "food" : "'스테이크 반찬'",
        // "img" : "images/product/stake.png",
        "subtitle" : "ESFP",
        "explain" : "역시 형이 기획한게 최고인것 같아요!!" + "<br />" + "따라가겠습니다!!"
    },
    "ENFP" : {
        "stat" : "고개만 끄덕이는 프로 공감러",
        // "food": "'인절미 아아스'",
        // "img" : "images/product/icecream.png",
        "subtitle" : "ENFP",
        "explain" : "어?! 좋은데요??" + "<br />"
    },
    "ENTP" : {
        "stat" : "날카로운 통찰력의 프로 지적러",
        // "food": "'초코 프레첼'",
        // "img" : "images/product/prechel.png",
        "subtitle" : "ENTP",
        "explain" : "그거 어디서 본 아이디어라.." + "<br />" + "실현하기 어려울 것 같은데요?"
    },

    "ESTJ" : {
        "stat" : "꽃밭 팀원을 이끄는 리더",
        // "food": "'소떡소떡'",
        // "img" : "images/product/sodduck.png",
        "subtitle" : "ESTJ",
        "explain" : "여러분.. 아이디어좀 내주세요.." + "<br />" + "그냥 제가 할게요"
    },
    "ESFJ" : {
        "stat" : "사교성 강한 인싸형",
        // "food" : "'콜팝'",
        // "img" : "images/product/colpop.png",
        "subtitle" : "ESFJ",
        "explain" : "좋은데요?!" + "<br />" + "같이 디벨롭 시켜볼까요!!?"
    },
    "ENFJ" : {
        "stat" : "모두를 아우르는 열정킹",
        // "food": "'돈까스'",
        // "img" : "images/product/tonkachu.png",
        "subtitle" : "ENFJ",
        "explain" : "와 아이디어 너무 좋다.." + "<br />" + "당장 오늘부터 구현하죠!"
    },
    "ENTJ" : {
        "stat" : "리더형 전략가",
        // "food": "'츄러스'",
        // "img" : "images/product/churus.png",
        "subtitle" : "ENTJ",
        "explain" : "난 기획단계가 제일 좋아!" + "<br />" + "좋은 아이디어 생각나는사람?!"
    },
}

// function shareOnKakao() {
//     var sharedText = "나의 MBTI 결과를 확인해보세요!";
//     var sharedUrl = "#"; // 여기에 결과 페이지 URL을 넣으세요
//     var kakaoLink = "https://story.kakao.com/s/share?url=" + encodeURIComponent(sharedUrl) + "&text=" + encodeURIComponent(sharedText);
//     window.open(kakaoLink, "_blank");
// }

// function shareOnInstagram() {
//     var sharedUrl = "https://example.com/mbti-result"; // 여기에 결과 페이지 URL을 넣으세요
//     var instagramLink = "https://www.instagram.com/share?url=" + encodeURIComponent(sharedUrl);
//     window.open(instagramLink, "_blank");
// }

// function shareOnFacebook() {
//     var sharedUrl = "https://example.com/mbti-result"; // 여기에 결과 페이지 URL을 넣으세요
//     var facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(sharedUrl);
//     window.open(facebookLink, "_blank");
// }

// function shareOnTwitter() {
//     var sharedText = "나의 MBTI 결과를 확인해보세요!";
//     var sharedUrl = "https://example.com/mbti-result"; // 여기에 결과 페이지 URL을 넣으세요
//     var twitterLink = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(sharedUrl) + "&text=" + encodeURIComponent(sharedText);
//     window.open(twitterLink, "_blank");
// }

function start() {
    $('.start').hide();
    $('.question').show();
    next();
}


$('#A').click(function(){ 
   var type = $("#type").val();
   var preValue = $("#" + type).val();

   $("#" + type).val(parseInt(preValue)+1);
   next();
});

$("#B").click(function(){
    next();
})



function next() {

    if(num == 21) {
        $(".question").hide();
        $(".result").show();
         // 결과 확인을 위한 alert 메시지 표시
         alert("MBTI 테스트 측정 완료!!\n결과를 보시려면 확인을 눌러주세요");


        // mbti 타입
        var mbti = "";
        ($("#EI").val() < 5 ? mbti += "I" : mbti += "E");
        ($("#SN").val() < 5 ? mbti += "N" : mbti += "S");
        ($("#FT").val() < 5 ? mbti += "T" : mbti += "F");
        ($("#JP").val() < 5 ? mbti += "P" : mbti += "J");


        // 결과
        $("#stat").html(result[mbti]["stat"]);
        $("#food").html(result[mbti]["food"]);
        $("#img").attr("src",result[mbti]["img"]);
        $("#subtitle").html(result[mbti]["subtitle"]);
        $("#explain").html(result[mbti]["explain"]);
    }
    else {
        $(".progress-bar").attr('style', 'width:calc(100/20*'+num+'%')
        $("#number").html(q[num]["number"]);
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);

        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);

        num++;
    }
}

// document.getElementById("back-btn").addEventListener("click", function() {
//     if (num > 2) { // 현재 질문 번호가 1보다 큰 경우에만 뒤로 이동
//         num -= 2; // 현재 번호를 두 번 감소시켜 이전 질문으로 이동
//         next(); // 이전 질문을 표시하기 위해 next 함수 호출
//     }
// });

function createQuestionButtons() {
    var buttonsContainer = document.getElementById("questionButtons");
    for (var i = 1; i <= 20; i++) {
      var button = document.createElement("button");
      button.textContent = i;
      button.setAttribute("onclick", "goToQuestion(" + i + ")");
      buttonsContainer.appendChild(button);
    }
  }

  // 특정 번호로 이동하는 함수
  function goToQuestion(questionNumber) {
    if (questionNumber >= 1 && questionNumber <= 20) {
      num = questionNumber;
      next(); // 특정 번호의 질문을 표시하기 위해 next 함수 호출
    }
  }

  // 페이지 로드 시 버튼 생성 함수 호출
  createQuestionButtons();
    
  function regame() {
    $('.result').hide();
    window.location.href = 'MainHome.html';

    num = 1;

    // // 카카오톡, 인스타그램, 페이스북, 트위터 공유하기 링크 생성
    // var sharedUrl = "https://example.com/mbti-result"; // 여기에 결과 페이지 URL을 넣으세요
    // var sharedText = "나의 MBTI 결과를 확인해보세요!";

    // var kakaoLink = "https://story.kakao.com/s/share?url=" + encodeURIComponent(sharedUrl) + "&text=" + encodeURIComponent(sharedText);
    // var instagramLink = "https://www.instagram.com/share?url=" + encodeURIComponent(sharedUrl);
    // var facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(sharedUrl);
    // var twitterLink = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(sharedUrl) + "&text=" + encodeURIComponent(sharedText);

    // // 팝업 창으로 각 소셜 미디어 플랫폼에 대한 공유하기 링크 열기
    // window.open(kakaoLink, "_blank", "width=600,height=400");
    // window.open(instagramLink, "_blank", "width=600,height=400");
    // window.open(facebookLink, "_blank", "width=600,height=400");
    // window.open(twitterLink, "_blank", "width=600,height=400");
}