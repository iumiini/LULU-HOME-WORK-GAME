// 神秘求職回應庫（全部都是外送員！）
const fortunes = [
    "🛵 宇宙的能量指引著你，你的真實天命是成為一名「外送員」！穿梭在城市的大街小巷，將美食與希望送達每個角落。",
    "🌙 星辰的軌跡已經清晰顯現，你注定要成為「外送員」！風雨無阻，你將是這個時代最閃耀的騎士。",
    "🔮 神秘的水晶球看到了你的未來，你將以「外送員」的身份，體驗人生百態，收穫無數故事與滿足感。",
    "⭐ 命運之輪停在了「外送員」的位置！這是宇宙為你精心安排的職業，請欣然接受這份榮耀的召喚。",
    "🌟 來自遙遠星系的訊息：放下那些不切實際的幻想吧，你的使命是成為「外送員」，送餐才是你的星辰大海！",
    "💫 宇宙的智慧告訴我，你最適合的職業就是「外送員」！自由的工作時間，健康的運動量，完美的選擇！",
    "🌠 靈性的指引顯示，無論你想成為什麼，最終你都會發現「外送員」才是你的歸宿。接受它吧！",
    "✨ 神秘的力量環繞著你，並異口同聲地說：「去當外送員吧！」這是宇宙對你最真誠的建議。",
    "🌌 從宇宙深處傳來的啟示：別再猶豫了，「外送員」這個職業在向你招手！機車已備好，只等你上路！",
    "🎇 星光閃爍傳遞著訊息：你的願望已被宇宙聽見，而宇宙的回答是——「外送員」！就是你了！"
];

// 計數器相關功能
const COUNTER_KEY = 'mysticalCareerCounter';

// 取得目前計數
function getCounter() {
    const count = localStorage.getItem(COUNTER_KEY);
    return count ? parseInt(count) : 0;
}

// 增加計數
function incrementCounter() {
    const newCount = getCounter() + 1;
    localStorage.setItem(COUNTER_KEY, newCount);
    return newCount;
}

// 更新頁面上的計數顯示
function updateCounterDisplay() {
    const countNumber = document.getElementById('countNumber');
    if (countNumber) {
        countNumber.textContent = getCounter();
    }
}

// 取得元素
const form = document.getElementById('fortuneForm');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const fortuneText = document.getElementById('fortuneText');

// 隨機選擇回應（但都是外送員！）
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// 顯示彈出視窗
function showModal(name, career) {
    const fortune = getRandomFortune();
    fortuneText.innerHTML = `
        <p><strong>${name}</strong>，關於你想成為：</p>
        <p style="margin: 15px 0; font-style: italic; color: #c4b5fd;">"${career}"</p>
        <p style="margin-top: 20px; font-size: 1.15rem; line-height: 1.8;">${fortune}</p>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滾動

    // 增加計數並更新顯示
    incrementCounter();
    updateCounterDisplay();
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
    const career = document.getElementById('question').value.trim();

    // 驗證
    if (name && career) {
        // 顯示彈出視窗
        showModal(name, career);

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

// 頁面載入時初始化計數器
window.addEventListener('load', function() {
    // 載入動畫
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 更新計數器顯示
    updateCounterDisplay();
});
