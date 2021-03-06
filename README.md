# 餐廳清單 Restaurant List
一個用 Express 和 MongoDB 所建立簡單的餐廳清單網路應用程式。

## 特色 Features
- 使用者可以註冊帳號或是用 Facebook Login 直接登入，建立並管理專屬他的一個餐廳清單
- 在首頁瀏覽所有餐廳與它們的簡單資料，包含餐廳照片、名稱、分類、評分
- 可以點進去看餐廳的詳細資訊，包含類別、地址、電話、描述、圖片
- 可以根據餐廳名稱、分類或排序來找到特定的餐廳
- 可以新增、修改、刪除餐廳的資訊

## 環境建置 Environment Setup

1. nvm & Node.js
2. nodemon
3. MongoDB

## 安裝 Installing

1. 在終端機輸入指令 Clone 此專案至本機電腦，並安裝相關套件
```
git clone https://github.com/Whaleep/restaurant-list
cd restaurant-list
npm install
```
2. 設定環境變數檔案，將檔案 .env.example 檔名改為 .env。  
若要使用 facebook login ，則需要先在 [Facebook for Developers](https://developers.facebook.com/) 中建立應用程式，將應用程式編號和密鑰填入 .env，即可使用 facebook login 功能。

3. 新增種子資料
```
npm run seed
```
4. 啟動專案
```
npm run dev
```

5. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
Express is listening on localhost:3000
```

## 預設使用者 Seed Users

>* email: user1@example.com
>* password: 12345678

>* email: user2@example.com
>* password: 12345678

## 版本階段 Version

在終端機輸入指令切換到對應進度
- v1 學期2-3(2020) A3進度
- v2 學期2-3(2020) A6進度
- v3 學期2-3(2020) A8進度
- v4 學期3後 A1進度
```
git checkout v1
git checkout v2
git checkout v3
git checkout v4
```
