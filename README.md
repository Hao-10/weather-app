# 🌥️ Weather App - 天氣預報 Web 應用

本專案是一個使用 **React + TypeScript + Vite + Tailwind CSS** 開發的天氣預報 Web 應用。  
透過串接第三方天氣 API，即時取得天氣資料，並提供多種功能如：

- 當前天氣
- 多時段預報（五天、每 3 小時）
- 我的最愛城市收藏
- 主題（亮色 / 暗色）切換  
- 響應式 UI（支援桌機與行動裝置）

此專案主要用於練習前端工程師在實務中常見的：  
API 串接、狀態管理、localStorage 資料持久化、UI 狀態切換等技能。

---

## 🔗 線上展示 Demo

https://hao-10.github.io/weather-app/

---

## ✨ 功能特色

- 串接第三方 RESTful API，即時取得天氣資料
- 上方顯示所選城市的當前天氣（溫度、狀態、圖示等）
- 提供城市搜尋功能，可查詢任意城市的天氣資訊
- 下方 Tabs 區塊顯示不同資料視圖：
  - 五天天氣預報
  - 每 3 小時天氣預報
  - 我的最愛城市清單
- 「我的最愛城市」功能，使用 **localStorage** 儲存偏好
- 點選最愛城市可快速切換並更新顯示該城市資料
- 亮色 / 暗色主題切換功能，並記錄使用者偏好
- 支援行動裝置與桌面裝置的響應式設計（RWD）
- 處理 Loading 與錯誤顯示邏輯（Error Handling）

---

## 🛠 使用技術

- React  
- TypeScript  
- Vite  
- Tailwind CSS  
- RESTful API  
- localStorage（儲存收藏與主題設定）  

---

## 🧠 核心實作說明

- 使用 React Hooks 管理狀態（城市、天氣資料、Tabs、主題）
- 從 localStorage 初始化最愛列表與主題偏好，在頁面刷新後仍保留使用者設定
- 多視圖 Tabs 設計，切換不同氣象資訊（5 日 / 3 小時 / 我的最愛）
- 亮色 / 暗色模式，透過狀態與樣式切換提升 UX
- 條件渲染 loading / error 狀態，提高穩定性與使用體驗

---

## 🚀 專案啟動方式

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```