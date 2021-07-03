# 餐廳清單 Restaurant List
一個用 Express 和 MongoDB 所建立簡單的餐廳清單網路應用程式。

## 特色 Features
- 在首頁瀏覽所有餐廳與它們的簡單資料，包含餐廳照片、名稱、分類、評分
- 可以點進去看餐廳的詳細資訊，包含類別、地址、電話、描述、圖片
- 可以根據餐廳名稱、分類或排序來找到特定的餐廳
- 可以新增、修改、刪除餐廳的資訊

## 環境建置 Environment Setup

1. nvm & Node.js
2. nodemon
3. MongoDB

## 安裝 Installing

1. 在終端機輸入指令 Clone 此專案至本機電腦
```
git clone https://github.com/Whaleep/restaurantList-v3.git
```
2. 進入專案目錄
```
cd restaurantList-v3
```
3. 安裝相關套件
```
npm install
```
4. 新增種子資料
```
npm run seed
```
5. 啟動專案
```
npm run dev
```
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
Express is listening on localhost:3000
```
