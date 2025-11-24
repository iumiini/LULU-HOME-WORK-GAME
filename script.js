// 神秘占卜回應庫
const fortunes = [
    "✨ 宇宙的能量告訴我，你的問題將在不久的將來得到解答。保持耐心，答案會在你最意想不到的時刻出現。",
    "🌙 星辰的軌跡顯示，你即將迎來一段充滿驚喜的旅程。相信自己的直覺，它會引領你走向正確的方向。",
    "🔮 神秘的水晶球看到了你的未來，充滿了無限可能。勇敢地追求你的夢想，宇宙會支持你！",
    "⭐ 命運之輪正在轉動，好運即將降臨在你身上。保持樂觀的心態，美好的事物正在向你靠近。",
    "🌟 來自遙遠星系的訊息：你擁有改變一切的力量。不要懷疑自己，前方的道路將會越來越明亮。",
    "💫 宇宙的智慧告訴我，現在是採取行動的最佳時機。相信過程，一切都會按照最好的方式展開。",
    "🌠 靈性的指引顯示，你正走在正確的道路上。繼續前進，你的努力終將開花結果。",
    "✨ 神秘的力量環繞著你，為你帶來保護和祝福。放下擔憂，擁抱即將到來的美好改變。",
    "🌌 從宇宙深處傳來的啟示：你比自己想像的更加強大。相信自己，奇蹟即將發生！",
    "🎇 星光閃爍傳遞著訊息：你的願望已被宇宙聽見。保持信念，驚喜正在路上。"
];

// 取得元素
const form = document.getElementById('fortuneForm');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const fortuneText = document.getElementById('fortuneText');

// 隨機選擇占卜結果
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// 顯示彈出視窗
function showModal(name, question) {
    const fortune = getRandomFortune();
    fortuneText.innerHTML = `
        <p><strong>${name}</strong>，關於你的問題：</p>
        <p style="margin: 15px 0; font-style: italic; color: #c4b5fd;">"${question}"</p>
        <p>${fortune}</p>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滾動
}

// 關閉彈出視窗
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢復滾動
}

// 表單提交事件
form.addEventListener('submit', function(e) {
    e.preventDefault(); // 防止表單預設提交

    // 取得表單數據
    const name = document.getElementById('name').value.trim();
    const question = document.getElementById('question').value.trim();

    // 驗證
    if (name && question) {
        // 顯示彈出視窗
        showModal(name, question);

        // 清空表單
        form.reset();
    }
});

// 點擊關閉按鈕
closeBtn.addEventListener('click', closeModal);

// 點擊背景關閉
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// 按下 ESC 鍵關閉
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// 頁面載入動畫
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
