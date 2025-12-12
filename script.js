// Supabase 配置
const SUPABASE_URL = 'https://dgdcmqmpnfmoablwxbgs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_5UvBU9_j0CuvOjqz1Vmk0A_2lKBPG6h';

// 初始化 Supabase 客戶端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 關鍵字分類系統
const careerCategories = {
    tech: {
        keywords: ['工程師', '程式', '軟體', '開發', 'AI', '人工智慧', '科技', '網頁', 'APP', '資訊', '程式設計師', '資工', '電腦', '演算法', '網路', '系統', '架構師', '前端', '後端', '全端'],
        responses: [
            {
                intro: "科技改變世界的夢想很崇高，但",
                transition: "宇宙看見了一個更實際的道路：用雙輪和熱情改變城市的每個角落",
                outro: "況且，科技會被淘汰，但人們永遠需要吃飯！"
            },
            {
                intro: "寫程式 debug 到凌晨，改需求改到懷疑人生",
                transition: "不如騎著機車，享受風的自由，每一單都是成就感",
                outro: "程式會有 bug，但送餐永遠不會出錯（頂多遲到而已）！"
            }
        ]
    },
    medical: {
        keywords: ['醫生', '護理師', '護士', '藥師', '醫療', '治療', '救人', '醫學', '診所', '醫院', '獸醫', '牙醫', '中醫', '復健', '醫護'],
        responses: [
            {
                intro: "你想拯救生命，這份使命感令人敬佩",
                transition: "但宇宙要告訴你，拯救飢餓的靈魂也是一種救贖",
                outro: "而且不用值大夜班，不用被病患罵！"
            },
            {
                intro: "懸壺濟世固然偉大",
                transition: "但在這個時代，即時送達熱騰騰的食物，同樣溫暖人心",
                outro: "醫生救身體，外送員救靈魂（和胃）！"
            }
        ]
    },
    education: {
        keywords: ['老師', '教授', '教育', '講師', '教學', '教師', '補習', '家教', '幼教', '特教', '校長', '訓導', '教書'],
        responses: [
            {
                intro: "教育英才、作育菁莪，這是多麼崇高的志業",
                transition: "但宇宙認為，在送餐的路上，你能教會人們「等待」與「感恩」",
                outro: "而且不用改考卷，不用處理家長投訴！"
            },
            {
                intro: "傳道、授業、解惑是你的理想",
                transition: "但每一次準時送達，你都在傳授「守時」與「服務」的真諦",
                outro: "學生會忘記你教的內容，但客人永遠記得那頓美味！"
            }
        ]
    },
    art: {
        keywords: ['設計', '藝術', '畫家', '音樂', '創作', '美術', '插畫', '動畫', '導演', '攝影', '作家', '寫作', '小說', '編劇', '藝術家', '繪畫'],
        responses: [
            {
                intro: "藝術創作需要靈感與天賦，你的夢想很浪漫",
                transition: "但宇宙看見了更美的畫面：你穿梭在城市街道，每條路線都是行為藝術",
                outro: "而且外送能溫飽，藝術家可能餓死！"
            },
            {
                intro: "用創意改變世界，這個願景讓人動容",
                transition: "但穿梭大街小巷的送餐路線，就是最美的城市詩篇",
                outro: "況且送餐有穩定收入，不用餓著肚子搞創作！"
            }
        ]
    },
    business: {
        keywords: ['CEO', '執行長', '老闆', '創業', '經理', '主管', '總監', '企業', '商業', '生意', '管理', '行銷', '業務', '銷售', '貿易', '金融', '投資', '會計'],
        responses: [
            {
                intro: "商業帝國的夢想很宏大，當老闆確實威風",
                transition: "但宇宙要提醒你：外送就是最好的創業起點，低成本、高彈性",
                outro: "先送個幾年，存夠錢再來創業不遲！"
            },
            {
                intro: "管理團隊、開創事業，這需要極大的勇氣",
                transition: "但在成為 CEO 之前，先當「首席外送官」(Chief Delivery Officer) 吧",
                outro: "而且創業會負債，送餐穩賺不賠！"
            }
        ]
    },
    service: {
        keywords: ['服務', '客服', '接待', '餐飲', '服務生', '空服', '櫃台', '門市', '銷售員', '店員', '房務', '飯店'],
        responses: [
            {
                intro: "服務業需要親切的笑容與無比的耐心",
                transition: "而外送員就是服務業的極致形式——不用一直微笑，還能自由移動",
                outro: "而且不用看客人臉色，放門口就走！"
            },
            {
                intro: "為客戶帶來愉悅體驗是你的使命",
                transition: "那麼，把熱騰騰的美食送到客戶手中，就是最直接的快樂傳遞",
                outro: "同樣是服務業，為何不選擇更自由的那一種？"
            }
        ]
    },
    freedom: {
        keywords: ['自由', 'SOHO', '自由業', '自由工作', '接案', '遠端', '在家', '彈性', '時間自由', '獨立'],
        responses: [
            {
                intro: "追求時間自由與工作彈性，這是現代人的夢想",
                transition: "而外送就是最自由的工作：想接就接，想休就休",
                outro: "而且收入即時，不用等客戶付款！"
            },
            {
                intro: "不想被時間綁住，想要自主安排生活",
                transition: "那外送員就是為你量身打造的職業：彈性排班，自由穿梭",
                outro: "真正的自由，從外送開始！"
            }
        ]
    },
    law: {
        keywords: ['律師', '法官', '檢察官', '法律', '司法', '法務', '律師事務所', '訴訟'],
        responses: [
            {
                intro: "伸張正義、維護法律，這是社會的重要支柱",
                transition: "但宇宙認為，準時送達食物也是一種契約的履行",
                outro: "而且不用背法條，不用寫狀子！"
            }
        ]
    },
    science: {
        keywords: ['科學家', '研究', '實驗', '學者', '博士', '研究員', '物理', '化學', '生物', '數學'],
        responses: [
            {
                intro: "探索真理、追求知識，這是人類進步的動力",
                transition: "但在探索宇宙奧秘之前，先探索這座城市的每條街道吧",
                outro: "研究可能一輩子沒成果，送餐每天都有收入！"
            }
        ]
    },
    sports: {
        keywords: ['運動員', '體育', '教練', '健身', '球員', '選手', '運動', '健身教練', '瑜珈'],
        responses: [
            {
                intro: "用身體突破極限，追求更高更快更強",
                transition: "那麼騎著機車穿梭大街小巷，就是最好的體能訓練",
                outro: "而且不用擔心運動傷害提早退休！"
            }
        ]
    }
};

// 通用回應（找不到關鍵字時使用）
const defaultResponses = [
    {
        intro: "你的夢想很獨特，宇宙仔細聆聽了你的願望",
        transition: "但經過深思熟慮，宇宙發現有一個更適合你的道路",
        outro: "相信宇宙的安排，這是最好的選擇！"
    },
    {
        intro: "這個職業確實不錯，但是",
        transition: "宇宙為你準備了一個更務實、更自由、更有前景的選擇",
        outro: "接受這份宇宙的禮物吧！"
    }
];

// 計數器相關功能（使用 Supabase）
async function getCounter() {
    try {
        const { data, error } = await supabase
            .from('visitor_counter')
            .select('count')
            .eq('id', 'global_counter')
            .single();

        if (error) {
            console.error('Error fetching counter:', error);
            return 0;
        }

        return data ? data.count : 0;
    } catch (err) {
        console.error('Error:', err);
        return 0;
    }
}

async function incrementCounter() {
    try {
        // 先獲取當前計數
        const currentCount = await getCounter();
        const newCount = currentCount + 1;

        // 更新數據庫
        const { error } = await supabase
            .from('visitor_counter')
            .update({ count: newCount })
            .eq('id', 'global_counter');

        if (error) {
            console.error('Error updating counter:', error);
            return currentCount;
        }

        return newCount;
    } catch (err) {
        console.error('Error:', err);
        return 0;
    }
}

async function updateCounterDisplay() {
    const countNumber = document.getElementById('countNumber');
    if (countNumber) {
        const count = await getCounter();
        countNumber.textContent = count;
    }
}

// 關鍵字匹配函數
function matchCareerCategory(description) {
    const lowerDesc = description.toLowerCase();

    // 遍歷所有職業分類
    for (const [category, data] of Object.entries(careerCategories)) {
        // 檢查是否包含該分類的任何關鍵字
        for (const keyword of data.keywords) {
            if (lowerDesc.includes(keyword.toLowerCase())) {
                // 隨機選擇一個該分類的回應
                const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
                return randomResponse;
            }
        }
    }

    // 如果沒有匹配到，返回通用回應
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 生成完整的回應 HTML
function generateResponse(name, description) {
    const response = matchCareerCategory(description);

    return `
        <div class="response-container">
            <p class="response-intro">
                <strong>${name}</strong>，${response.intro}
            </p>

            <p class="response-transition">
                ${response.transition}
            </p>

            <div class="final-answer" data-revealing="true">
                <div class="revealing-text">✨ 宇宙正在計算中... ✨</div>
                <div class="answer-content">
                    <div class="answer-label">🎯 宇宙的最終指引 🎯</div>
                    <div class="answer-result">外送員</div>
                    <div class="answer-decoration">━━━━━━━━━━━━━━━━━━━</div>
                </div>
            </div>

            <p class="response-outro">
                ${response.outro}
            </p>
        </div>
    `;
}

// 取得元素
const form = document.getElementById('fortuneForm');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const fortuneText = document.getElementById('fortuneText');

// 顯示彈出視窗
async function showModal(name, description) {
    const responseHTML = generateResponse(name, description);
    fortuneText.innerHTML = responseHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // 增加計數並更新顯示
    await incrementCounter();
    await updateCounterDisplay();

    // 先讓「揭曉中」的框框顯示出來
    setTimeout(() => {
        const finalAnswer = document.querySelector('.final-answer');
        if (finalAnswer) {
            finalAnswer.style.opacity = '1';
            finalAnswer.style.transform = 'scale(1) translateY(0)';
        }
    }, 100);

    // 延遲 1.5 秒後揭曉「外送員」
    setTimeout(() => {
        const finalAnswer = document.querySelector('.final-answer');
        if (finalAnswer) {
            // 移除揭曉中狀態，顯示真正的答案
            finalAnswer.removeAttribute('data-revealing');
            finalAnswer.classList.add('revealed');

            // 自動滾動到「外送員」位置（平滑滾動）
            setTimeout(() => {
                finalAnswer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 200);
        }
    }, 1800);
}

// 關閉彈出視窗
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 表單提交事件
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('question').value.trim();

    if (name && description) {
        showModal(name, description);
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

// 頁面載入時初始化
window.addEventListener('load', async function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 載入並顯示計數器
    await updateCounterDisplay();
});
