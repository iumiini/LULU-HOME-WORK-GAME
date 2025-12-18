# ✨ 神秘求職網站 ✨

一個充滿娛樂效果的求職諮詢網站，無論你輸入什麼職業夢想，宇宙的最終答案都會是：**外送員**！

🔗 **網站連結**: https://iumiini.github.io/LULU-HOME-WORK-GAME/

---

## 📋 專案簡介

這是一個娛樂性質的一頁式網站，模仿神秘占卜的形式，讓使用者填寫姓名和夢想職業描述，經過「宇宙分析」後，無論輸入什麼內容，最終都會推薦使用者成為「外送員」。整個過程充滿幽默感，並配有精美的動畫效果。

---

## ✨ 核心功能

### 1. **智慧回應系統**
- 根據使用者輸入的職業關鍵字，匹配對應的幽默回應
- 包含 10 大職業分類：
  - 💻 科技類（工程師、程式設計師、AI、軟體開發等）
  - 🏥 醫療類（醫生、護理師、藥師等）
  - 📚 教育類（老師、教授、講師等）
  - 🎨 藝術類（設計師、畫家、音樂家、作家等）
  - 💼 商業類（CEO、經理、創業、投資等）
  - 🍽️ 服務類（餐飲、客服、空服員等）
  - 🆓 自由工作類（SOHO、接案、遠端工作等）
  - ⚖️ 法律類（律師、法官、檢察官等）
  - 🔬 科學類（科學家、研究員、博士等）
  - 🏃 體育類（運動員、教練、健身教練等）
- 每個分類都有專屬的幽默回應，讓體驗更加生動

### 2. **特殊彩蛋功能**

#### 🦌 VIP 特殊名字
如果輸入以下特殊名字，會觸發 VIP 專屬回應：
- LULULALA
- LULU&LALA
- LALA
- 如鹿之家
- LULU
- 鹿鹿

**效果**：
- 金色邊框特效
- 慶祝動畫
- 專屬文案：「尊貴的LULU家族成員，宇宙對你有特別的安排」

#### 🎊 已經是外送員
如果職業描述中包含「外送員」、「外送」、「送餐」、「foodpanda」、「uber eat」等關鍵字，會觸發中獎效果：

**效果**：
- 豪華金色光暈
- 慶祝脈衝動畫
- 專屬文案：「恭喜你！你已經找到了宇宙的終極職業！」

### 3. **打字機動畫效果**
- 分析文字逐字顯示，模擬真實分析過程
- 三段式呈現：
  1. **開場白**：逐字打出個人化的職業分析
  2. **轉折點**：說明為何外送員更適合
  3. **結論**：鼓勵性的結尾文字
- 營造期待感與真實感

### 4. **延遲揭曉動畫**
- 「外送員」三個字會延遲出現
- 先顯示「正在分析中...」的文字
- 延遲約 2 秒後，「外送員」以彈跳動畫華麗登場
- 大字金色發光效果，極具視覺衝擊力

### 5. **全域訪客計數器**
- 使用 **Supabase** 雲端資料庫
- 全球同步計數
- 顯示「已有 X 人尋求宇宙的指引」
- 每次提交表單自動累加

### 6. **神秘紫色主題 + 星空動畫**
- 深紫色漸層背景
- 星星閃爍動畫
- 毛玻璃效果（backdrop-filter blur）
- 流動光暈按鈕
- 脈衝發光效果

### 7. **彈出視窗回應**
- 點擊「尋求指引」後，以模態視窗顯示結果
- 可滾動內容（支援長文本）
- 自訂紫色漸層滾動條
- 點擊背景或按 ESC 鍵關閉
- 平滑捲動到「外送員」位置

### 8. **社群連結整合**
- 🎥 YouTube 頻道：[@LuluCatHome](https://www.youtube.com/@LuluCatHome)
- ☕ Ko-fi 斗內支持：[newandnow](https://ko-fi.com/newandnow)
- SVG 圖示 + 漸層按鈕
- Hover 懸浮效果

### 9. **勵志文字**
- 「只要心裡相信就會成就」
- 顯示在提交按鈕下方
- 紫色斜體字，增添神秘感

### 10. **響應式設計**
- 支援手機、平板、桌面
- 字體大小自動調整
- 按鈕和表單在小螢幕上也能完美顯示

---

## 🛠️ 技術架構

### 前端技術
- **HTML5**: 語義化結構
- **CSS3**:
  - Flexbox 佈局
  - CSS Grid
  - CSS 動畫（@keyframes）
  - 漸層（linear-gradient）
  - 毛玻璃效果（backdrop-filter）
  - 自訂滾動條（::-webkit-scrollbar）
- **JavaScript (ES6+)**:
  - Async/Await
  - Promises
  - DOM 操作
  - Event Listeners
  - 正則表達式匹配

### 後端服務
- **Supabase**:
  - PostgreSQL 資料庫
  - 即時訪客計數
  - RESTful API
  - Row Level Security (RLS)

### 動畫技術
- CSS Keyframe 動畫
- JavaScript 打字機效果
- Transform + Transition
- Opacity 淡入淡出
- Scale + Translate 彈跳效果

---

## 📦 專案結構

```
LULU-HOME-WORK-GAME/
│
├── index.html          # 主頁面結構
├── styles.css          # 所有樣式與動畫
├── script.js           # 邏輯、Supabase 整合、動畫控制
└── README.md           # 專案說明文件
```

---

## 🚀 如何使用

### 本地測試
1. Clone 此專案
```bash
git clone https://github.com/iumiini/LULU-HOME-WORK-GAME.git
cd LULU-HOME-WORK-GAME
```

2. 在瀏覽器中開啟 `index.html`
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### GitHub Pages 部署
1. 進入 GitHub 專案設定
2. Settings → Pages
3. Source 選擇 `claude/clean-rebuild-01TDDR5StCCfN1X8fxnkQGLN` 分支
4. 資料夾選 `/ (root)`
5. 儲存後等待 1-2 分鐘即可訪問

---

## ⚙️ Supabase 配置

如果要使用自己的 Supabase 資料庫，請按照以下步驟：

### 1. 建立 Supabase 專案
前往 [Supabase](https://supabase.com/) 註冊並建立新專案

### 2. 建立資料表
執行以下 SQL：
```sql
CREATE TABLE visitor_counter (
  id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

INSERT INTO visitor_counter (id, count) VALUES ('global_counter', 0);
```

### 3. 設定 RLS 政策
```sql
ALTER TABLE visitor_counter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON visitor_counter
FOR SELECT USING (true);

CREATE POLICY "Enable update for all users" ON visitor_counter
FOR UPDATE USING (true);
```

### 4. 取得 API 金鑰
- 前往 Settings → API
- 複製 `Project URL` 和 `anon public` key
- 在 `script.js` 中更新：
```javascript
const SUPABASE_URL = '你的_SUPABASE_URL';
const SUPABASE_ANON_KEY = '你的_SUPABASE_ANON_KEY';
```

---

## 🎨 設計特色

### 色彩配置
- **主色調**: 深紫色 (#0f0c29, #302b63, #24243e)
- **強調色**: 紫羅蘭 (#667eea, #764ba2, #f093fb)
- **金色**: 外送員文字 (#fbbf24, #f59e0b)
- **特殊金色**: VIP 效果 (#ffd700)

### 動畫清單
1. **titleGlow** - 標題發光動畫
2. **twinkle** - 星星閃爍
3. **revealBounce** - 答案彈跳揭曉
4. **finalAnswerPulse** - 外送員脈衝
5. **answerGlow** - 外送員發光
6. **celebration** - VIP 慶祝特效
7. **revealingPulse** - 分析中脈衝

---

## 📝 工作流程

1. 使用者輸入姓名和職業描述
2. 點擊「尋求指引」按鈕
3. 系統檢查特殊名字 → 檢查是否已是外送員 → 關鍵字匹配
4. 顯示彈出視窗，開始打字機動畫
5. 逐字顯示分析文字
6. 延遲 2 秒後，「外送員」華麗登場
7. 計數器 +1
8. 使用者可點擊 YouTube 或 Ko-fi 連結

---

## 🎯 關鍵字列表範例

### 科技類
工程師、程式、軟體、開發、AI、人工智慧、科技、網頁、APP、資訊、程式設計師、資工、電腦、演算法、網路、系統、架構師、前端、後端、全端

### 醫療類
醫生、護理師、護士、藥師、醫療、治療、救人、醫學、診所、醫院、獸醫、牙醫、中醫、復健、醫護

### 教育類
老師、教授、教育、講師、教學、教師、補習、家教、幼教、特教、校長、訓導、教書

### 藝術類
設計、藝術、畫家、音樂、創作、美術、插畫、動畫、導演、攝影、作家、寫作、小說、編劇、藝術家、繪畫

...（更多分類請參考 script.js）

---

## 🐛 常見問題

### Q: 計數器顯示 0 或不更新？
A: 請確認 Supabase 配置正確，並檢查瀏覽器 Console 是否有錯誤訊息。

### Q: 動畫沒有顯示？
A: 清除瀏覽器快取（Ctrl+Shift+Delete）並重新載入頁面。

### Q: 特殊名字沒有觸發？
A: 確認輸入的名字與清單完全匹配（不區分大小寫）。

### Q: GitHub Pages 顯示空白？
A: 確認 GitHub Pages 設定正確指向 `claude/clean-rebuild-01TDDR5StCCfN1X8fxnkQGLN` 分支。

---

## 📄 授權

此專案為娛樂性質，僅供學習與展示使用。

---

## 👤 作者

**LULU Cat Home**
- YouTube: [@LuluCatHome](https://www.youtube.com/@LuluCatHome)
- Ko-fi: [newandnow](https://ko-fi.com/newandnow)

---

## 🙏 致謝

感謝所有尋求宇宙指引的訪客，願外送員的職業生涯帶給你自由與快樂！🚴‍♂️✨
