# ✨ 神秘占卜網站 | Mysterious Fortune

一個充滿神秘感的娛樂性一頁式網站，讓使用者輸入問題後獲得來自宇宙的回應。

## 🌟 功能特色

- 🎨 **神秘視覺設計**：深色漸變背景、星星動畫、發光效果
- 📝 **互動式表單**：使用者可輸入姓名和問題
- 🔮 **隨機占卜回應**：10種不同的神秘回應
- 💫 **優雅彈出視窗**：帶有平滑動畫的結果顯示
- 🔗 **社群連結**：整合 YouTube 頻道和贊助連結
- 📱 **響應式設計**：支援各種螢幕尺寸

## 🚀 使用方法

1. 直接在瀏覽器中開啟 `index.html`
2. 無需任何伺服器或額外設定
3. 填寫表單並點擊「揭曉答案」按鈕
4. 查看神秘的宇宙回應！

## ⚙️ 設定你的連結

開啟 `index.html` 檔案，找到以下兩行並替換成你的真實連結：

```html
<!-- 第 40 行附近 -->
<a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank" class="social-link youtube">

<!-- 第 46 行附近 -->
<a href="YOUR_DONATION_LINK" target="_blank" class="social-link donation">
```

將 `YOUR_YOUTUBE_CHANNEL_LINK` 替換為你的 YouTube 頻道網址
將 `YOUR_DONATION_LINK` 替換為你的斗內/贊助連結

## 📁 檔案結構

```
├── index.html    # 主頁面結構
├── styles.css    # 視覺樣式設計
├── script.js     # 互動功能邏輯
└── README.md     # 專案說明文件
```

## 🎨 設計特色

- **色彩方案**：深紫色到黑色的漸變，營造神秘氛圍
- **動畫效果**：
  - 閃爍的星星背景
  - 按鈕懸停發光效果
  - 彈出視窗滑入動畫
  - 平滑的過渡效果
- **玻璃擬態設計**：半透明背景搭配模糊效果

## 💡 自訂占卜訊息

想要新增或修改占卜訊息？編輯 `script.js` 檔案中的 `fortunes` 陣列：

```javascript
const fortunes = [
    "你的第一條占卜訊息...",
    "你的第二條占卜訊息...",
    // 新增更多訊息
];
```

## 🌐 部署建議

這個網站可以輕鬆部署到：
- GitHub Pages
- Netlify
- Vercel
- 任何靜態網站託管服務

## 📝 授權

此專案僅供娛樂使用。

---

**提示**：記得在使用前更新你的 YouTube 和斗內連結！ 🎯