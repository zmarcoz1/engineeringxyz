# 網站部署與通知系統設定指南

本文件說明如何將更新後的 EngineeringXYZ 網站部署到生產環境，以及如何設定 Firebase、Cloud Functions、Pub/Sub、Google Apps Script 電郵通知和分析追蹤。請依照以下步驟操作，必要時插入您的專案 ID、網域名稱與機密金鑰。

## 前置準備

1. 安裝 [Firebase CLI](https://firebase.google.com/docs/cli) 並在終端中執行 `firebase login` 完成登入。
2. 準備一個 Google 帳號用於 Gmail 郵件通知（預設每日限額約 100 封）。
3. 取得以下資訊：
   * **GA4 測量 ID**：`G-FQ5PYVVVSJ`（已嵌入 HTML）。
   * **Meta Pixel ID**：`772205282119757`（已嵌入 HTML）。
   * **LinkedIn Insight Partner ID**：`7877444`（已嵌入 HTML）。
   * **LinkedIn Conversion ID**：從 LinkedIn Campaign Manager 建立轉換後取得，替換程式碼中的 `REPLACE_WITH_LINKEDIN_CONVERSION_ID`。
   * **共用密鑰（Shared Secret）**：自訂的隨機字串，用於驗證 Cloud Function 與 Apps Script 之間的 Pub/Sub 訊息。請在 `functions/index.js` 和 `apps-script/Code.gs` 兩處填入相同值。

## 一、Firebase 與 Firestore 設定

1. 登入 Firebase 控制台並建立或選擇一個專案。
2. 在「建構」→「Firestore Database」中啟用 **Firestore**，選擇 **Native 模式**。初次部署可讓 Cloud Function 自動建立 `leads` 集合。
3. 在「專案設定」→「一般」→「你的應用程式」中新增一個 **Web 應用程式**，複製 Firebase 設定物件（包含 `apiKey`、`authDomain` 等）。
4. 打開 `js/firebase-init.js`，將 `firebaseConfig` 內的 `YOUR_API_KEY`、`YOUR_PROJECT_ID` 等佔位符替換成剛剛複製的值。

## 二、部署 Cloud Functions 與 Pub/Sub

1. 確保已在 Google Cloud 控制台啟用 **Cloud Functions API** 與 **Pub/Sub API**。
2. 在 Cloud Console 或 via `gcloud` 建立名為 `new-lead` 的 Pub/Sub 主題（Topic）。在 GUI 中：
   * 前往「Pub/Sub」→「主題」→「建立主題」，輸入 `new-lead` 後建立。
3. 本專案的 Cloud Function 代碼位於 `functions/index.js`。請編輯 `SHARED_SECRET` 常數為自訂隨機字串，並確定已安裝 `firebase-admin`, `firebase-functions` 和 `@google-cloud/pubsub` 套件。
4. 在專案根目錄初始化 Functions（若尚未初始化）：
   ```bash
   firebase init functions
   ```
   選擇 **JavaScript** 或 **TypeScript**（建議使用 Node 18）、允許安裝依賴。
5. 將此儲存庫中的 `functions/index.js` 覆蓋到 Firebase 生成的 `functions/index.js`。更新 `package.json` 依賴為 `@google-cloud/pubsub`。
6. 部署 Cloud Function：
   ```bash
   cd functions
   npm install @google-cloud/pubsub
   cd ..
   firebase deploy --only functions
   ```
   部署完成後，`onLeadCreatePublish` 會在 Firestore `leads` 集合新增文件時觸發，並將資料發布到 `new-lead` 主題，並附帶 `secret` 屬性。

## 三、建立 Google Apps Script 郵件通知

1. 前往 [Google Apps Script](https://script.google.com) 建立一個新專案。
2. 在 `Code.gs` 中貼上 `apps-script/Code.gs` 的全部程式碼，將 `SHARED_SECRET` 常數設定為與 Cloud Function 相同的字串，並修改 `RECIPIENTS` 陣列為你的通知信箱（此專案預設為 `mwu@engineeringxyz.com` 和 `engineeringxyz.com@gmail.com`）。
3. 點擊「部署」→「新增部署」，選擇 **Web 應用程式**。
   * 版本說明可以填寫 `v1`。
   * 執行應用程式的身分選擇 **本人**。
   * 存取權選擇「任何擁有連結的人」或「僅限受限使用者」，請依需求決定。
4. 部署後複製 **Web 應用程式 URL**，將其作為 Pub/Sub push 訂閱的端點。
5. 注意：使用免費 Gmail 帳號發送郵件時每天約限制 100 封，如果潛在線索量較大，可在程式碼中註解說明如何改用 Gmail API 或第三方郵件服務（例如 SendGrid）。

## 四、建立 Pub/Sub Push 訂閱

1. 回到 Google Cloud 控制台 → 「Pub/Sub」→「訂閱」，按下「建立訂閱」。
2. 選擇剛建立的 `new-lead` 主題。
3. 訂閱類型選擇 **推送 (Push)**，在端點 URL 欄貼上前一步 Apps Script 的 Web App URL。
4. 留意「認證」選項，可選擇「無認證」或使用服務帳戶憑證。若選擇憑證，請確保 Apps Script 會驗證 JWT。此範例為簡化，使用共享密鑰驗證。
5. 建立後可在訂閱詳情頁面查看投遞結果是否為 2xx 成功狀態。

## 五、Google Analytics 4 設定

1. 在 Google Analytics 中建立或選擇您的 GA4 屬性。
2. 進入「管理」→「資料串流」→「網頁」，確認 Measurement ID 為 `G-FQ5PYVVVSJ`。
3. 在 GA4 介面中前往「設定」→「事件」並新增自訂事件 `generate_lead` 為轉換，設定條件如下：
   * 事件名稱：`generate_lead`
   * (可留空其他參數)
4. 使用 DebugView 或即時報表確認謝謝頁面載入時會觸發 `generate_lead` 事件。

## 六、Meta Pixel 設定

1. 在 Facebook 事件管理員中確認已有 Pixel ID `772205282119757`。
2. 在測試環境使用 [Meta Pixel Helper](https://developers.facebook.com/docs/meta-pixel) 瀏覽網站，確認每個頁面有觸發 `PageView` 事件；當提交表單完成跳轉至謝謝頁時，確認會觸發 `Lead` 事件。

## 七、LinkedIn Insight Tag 與轉換追蹤

1. 在 LinkedIn Campaign Manager →「資源」→「轉換追蹤」建立新的網站轉換。設定表單提交或謝謝頁為轉換條件。
2. 建立後複製 **轉換 ID**，並在所有 HTML 文件和 `js/lead-form.js` 中的 `REPLACE_WITH_LINKEDIN_CONVERSION_ID` 位置替換為此 ID。
3. 使用 LinkedIn Insight Tag Helper 驗證謝謝頁載入時會觸發自訂轉換事件。

## 八、本地測試

1. 在專案根目錄執行簡易 HTTP 伺服器，例如：
   ```bash
   npx http-server -p 8080
   ```
   或使用任何您熟悉的本地伺服器工具。
2. 開啟瀏覽器造訪 `http://localhost:8080/contact.html`，填寫表單後提交，確認：
   * 表單前端驗證運作正常並要求勾選同意。
   * 網址導向 `/thank-you.html`。
   * Firebase Firestore 中出現新的 `leads` 文件，內容包含姓名、Email、電話、訊息、UTM 參數、使用者代理字串與 IP 等欄位。
   * Pub/Sub 主題 `new-lead` 收到訊息（可在 GCP 控制台檢查訊息計數）。
   * Apps Script 信箱收到通知郵件。
   * GA4 DebugView 出現 `generate_lead` 事件，Meta Pixel Helper 顯示 `Lead` 事件。

## 九、部署至正式環境

您可以將整個 `site-updated.zip` 解壓縮後部署到任意靜態網站代管，例如 Netlify、Vercel 或 Firebase Hosting。若使用 Firebase Hosting：

1. 在專案根目錄執行 `firebase init hosting`，選擇同一個專案並將「public」資料夾指定為網站根目錄。
2. 將 `public` 資料夾內容清空後，將更新後網站檔案全部放入。
3. 執行 `firebase deploy --only hosting` 將網站上傳。

## 十、解碼 ZIP 檔案

報告中提供的 `site-updated.zip.b64` 是經 Base64 編碼的壓縮檔。下載後，可用以下指令解碼：

### macOS/Linux

```bash
base64 --decode site-updated.zip.b64 > site-updated.zip
```

### Windows（使用 PowerShell 或命令提示字元）

```powershell
certutil -decode site-updated.zip.b64 site-updated.zip
```

解碼後即可解壓縮並部署。

---

此指南涵蓋從 Firebase、Cloud Functions、Pub/Sub、Apps Script，到分析追蹤與部署的完整流程。如有任何步驟與介面不符，請以最新官方文件為準並於相關頁面截圖輔助記錄設定過程。