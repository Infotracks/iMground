const IMAGES = [
    // 게임에 사용될 이미지 배열
    '/Game/겁먹은 와일드보어.png', '/Game/스톤골렘.png',
    '/Game/리본돼지.png', '/Game/아이스 드레이크.png',
    '/Game/초록버섯.png', '/Game/파란달팽이.png',
    '/Game/파란버섯.png', '/Game/콜드아이.png',
];

// 뒤집힌 카드 배열
let flippedCards = [];
// 뒤집힌 카드의 인덱스 배열
let flippedIndexes = [];
// 일치한 카드 쌍 수
let matchedPairs = 0;
// 점수
let score = 0;
// 카드 클릭 가능 여부
let isClickable = true;

// 게임 생성 함수
function createGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    const shuffledImages = shuffleArray(IMAGES.concat(IMAGES));

    shuffledImages.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('game-box');
        card.dataset.index = index;
        card.innerHTML = `<img src="${image}" alt="card" class="hidden">`;
        card.addEventListener('click', flipCard);

        gameContainer.appendChild(card);
    });

    // 카드 초기에 감추기
    setTimeout(() => {
        const cards = document.querySelectorAll('.game-box img');
        cards.forEach(card => card.classList.add('hidden'));
    }, 500);
}
// 게임 시작 함수
function startGame() {
    const cards = document.querySelectorAll('.game-box img');
    cards.forEach(card => card.classList.remove('hidden', 'card-rotate'));

    // 여기에 섞이는 애니메이션 추가 가능
    // 예를 들어, rotate 애니메이션을 추가해보겠습니다.
    setTimeout(() => {
        cards.forEach(card => card.classList.add('card-rotate'));
    }, 3000);
}
// 카드를 뒤집는 함수
function flipCard() {
    if (!isClickable) return;

    const selectedCard = this;
    const index = selectedCard.dataset.index;

    if (flippedCards.length < 2 && !flippedIndexes.includes(index) && !selectedCard.classList.contains('flip')) {
        selectedCard.classList.add('flip', 'card-rotate');
        flippedCards.push(selectedCard);
        flippedIndexes.push(index);

        if (flippedCards.length === 2) {
            isClickable = false;
            setTimeout(() => {
                checkMatch();
                isClickable = true;
            }, 500);
        }
    }
}
// 카드를 다시 뒤집는 함수
function unflipCards() {
    flippedCards.forEach(card => {
        card.classList.remove('flip');
        card.classList.remove('card-rotate');
    });

    flippedCards = [];
    flippedIndexes = [];
}
// 카드 일치 여부를 확인하는 함수
function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    const [firstIndex, secondIndex] = flippedIndexes;

    if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        updateScore();

        flippedCards = [];
        flippedIndexes = [];

        matchedPairs++; // 이미지가 일치하는 경우에만 matchedPairs 증가

        if (matchedPairs === IMAGES.length) {
            showWinAlert();
            resetGame();
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            unflipCards();
        }, 500);
    }
}

// 점수를 업데이트하는 함수
function updateScore() {
    score++;
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.innerText = `점수: ${score}`;
}
// 카드 클릭 이벤트 리스너
document.getElementById('game-container').addEventListener('click', function (event) {
    const clickedCard = event.target.closest('.game-box');
    if (clickedCard && !clickedCard.classList.contains('flip')) {
        clickedCard.classList.add('card-rotate');
    }
});
// 승리 알림을 표시하는 함수
function showWinAlert() {
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.innerText = `축하합니다! 모든 짝을 찾았습니다! 점수: ${score}`;

    setTimeout(() => {
        resetGame();
    }, 5000);
}
// 게임을 재설정하는 함수
function resetGame() {
    createGame();
    matchedPairs = 0;
    score = 0;

    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.innerText = `점수: ${score}`;
}
// 배열을 섞는 함수
function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// 최초 로딩 시 게임 생성
document.addEventListener('DOMContentLoaded', createGame);