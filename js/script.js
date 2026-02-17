// 英検3級頻出単語データ（外部JSONファイルから読み込み）
let initialData = [];


let words = [...initialData]; // シャッフル用コピー
let currentIndex = 0;

// DOM要素取得
const card = document.getElementById('flashcard');
const wordText = document.getElementById('word-text');
const meaningText = document.getElementById('meaning-text');
const partText = document.getElementById('part-text');
const exampleText = document.getElementById('example-text');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const filterSelect = document.getElementById('filter-select');

// 品詞フィルタ関数
function filterByPart(part) {
    if (part === '全て') {
        words = [...initialData];
    } else {
        words = initialData.filter(item => item.part === part);
    }
    currentIndex = 0;
    renderCard();
    updateProgress();
}

// プログレスバー更新関数
function updateProgress() {
    const percentage = Math.round((currentIndex + 1) / words.length * 100);
    progressBar.style.width = percentage + '%';
    progressText.textContent = `学習進捗: ${currentIndex + 1} / ${words.length} (${percentage}%)`;
}

// 画面描画関数
function renderCard() {
    const currentData = words[currentIndex];

    // アニメーションのリセット
    card.classList.remove('is-flipped');

    // 内容更新（裏返る動作に合わせて少し遅延させる）
    setTimeout(() => {
        wordText.textContent = currentData.word;
        meaningText.textContent = currentData.meaning;
        partText.textContent = currentData.part;
        exampleText.textContent = currentData.example;
        counter.textContent = `${currentIndex + 1} / ${words.length}`;
    }, 150);
}

// クリックで裏返し
card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});

// 次へ
nextBtn.addEventListener('click', () => {
    if (currentIndex < words.length - 1) {
        currentIndex++;
        renderCard();
        updateProgress();
    } else {
        alert("最後のカードです");
    }
});

// 前へ
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderCard();
        updateProgress();
    }
});

// シャッフル機能 (Fisher-Yates Shuffle)
shuffleBtn.addEventListener('click', () => {
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    currentIndex = 0;
    renderCard();
    updateProgress();

    // ボタンのフィードバック
    shuffleBtn.textContent = "シャッフル完了！";
    setTimeout(() => {
        shuffleBtn.textContent = "シャッフル";
    }, 1000);
});

// 品詞フィルタ
filterSelect.addEventListener('change', (e) => {
    filterByPart(e.target.value);
});

// データ読み込みと初期化
async function initApp() {
    try {
        // 外部JSONファイルから単語データを読み込み
        const response = await fetch('data/words.json');
        if (!response.ok) {
            throw new Error('データの読み込みに失敗しました');
        }
        initialData = await response.json();
        words = [...initialData];

        // アプリを初期化
        renderCard();
        updateProgress();
    } catch (error) {
        console.error('エラー:', error);
        wordText.textContent = 'データ読み込みエラー';
        meaningText.textContent = 'data/words.jsonを確認してください';
    }
}

// アプリ起動
initApp();
