# EngineeringXYZ change specification — 實作報告

日期：2026-08-18  
分支：`codex/design-only-scope`  
基準：`origin/main`（`5d84a99`）

## 完成內容

- 新增 About 頁 `Scope of Services`，清楚限定 EngineeringXYZ 只交付設計文件，不採購、轉售、製造、安裝、標示或保證完成機器。
- 新增第 07 項服務：控制系統及機器電氣設計支援。
- 新增機器電氣責任分工表，區分 EngineeringXYZ、UL 508A panel shop、C-10 contractor 及客戶／AHJ。
- 首頁 hero 將 `controls` 改為 `control system design`。
- 所有八個帶 footer 的內容／附屬頁加入設計交付、panel build、field wiring 及 facility installation 分界，並加入 Scope of Services 及 Electrical Scope 連結。
- Contact form 新增 control-system category，拆分 Utility 與 Government agency；Government agency 顯示非阻擋提示。
- 首頁 Organization JSON-LD 新增七項 `hasOfferCatalog`，沒有重新加入先前已移除的 `ProfessionalService` 類型。
- 更新 `llms.txt` 至七項服務、design-only 採購分界及電氣責任分工。
- 加入所有規格要求的確認標記及 proof／quote HTML comments。

## P0.1 — Apps Script 必須確認及重新部署

Contact form 現時可能提交的 `category` 值如下（大小寫及空格必須完全相同）：

1. `machine and prototype design support`
2. `fixture and workholding design support`
3. `internal inspection or test equipment`
4. `industrial cad and drawing documentation`
5. `manufacturing process or internal equipment`
6. `defined project recovery or design capacity`
7. `control system design or plc programming`
8. `other`

Contact form payload 欄位：

- `name`
- `company`
- `entity_type`
- `industry`
- `email`
- `phone`
- `category`
- `timeline`
- `message`
- `consent`
- `eligibility`
- `website`
- `elapsed_ms`
- 視乎 campaign data 而加入：`utm_source`、`utm_medium`、`utm_campaign`、`utm_content`

Resource form payload 欄位：

- `name`
- `company`
- `email`
- `category`（固定為 `other`）
- `message`
- `consent`
- `website`
- `elapsed_ms`
- 視乎 campaign data 而加入：`utm_source`、`utm_medium`、`utm_campaign`、`utm_content`

確認結果：

- payload 仍以 `URLSearchParams` POST。
- `fetch` 沒有設定 `Content-Type` header。
- `website` honeypot 仍會送出空字串。
- `elapsed_ms` 仍會送出，而且前端最短門檻為 `3000` ms。

網站 repo 不能修改部署中的 Apps Script。擁有人必須確認 Apps Script allow-list 接受上述八個 category 值及新增欄位，然後 **deploy a new version**；只按 Save 不會更新 live web app。

## 尚待擁有人確認的標記

- `public/index.html:276` — 確認可引用 `49 → 4 motors` 項目。
- `public/index.html:404` — 確認可引用 Hyeonu Heo quote 及職銜／學校。
- `public/index.html:595` — 完整實體郵寄地址、registered-agent address 或 PO box。
- `public/services.html:449` — 同上。
- `public/projects.html:311` — 同上。
- `public/about.html:345` — 同上。
- `public/contact.html:330` — 同上。
- `public/resources.html:252` — 同上。
- `public/resume.html:120` — 同上。
- `public/thankyou.html:99` — 同上。
- `public/llms.txt:66` — 真實、精確的專利狀態文案。
- `public/llms.txt:67` — 真實、精確的 peer-reviewed publication 數量。

## 精確 find 不匹配，因此按規格停止的項目

以下三項未作猜測式替換：

1. 規格要求在 `public/about.html` 找 `4 U.S. patents granted and in process`。實際 HTML 是分開的兩個元素：
   - `public/about.html:232`：`<p class="stat__figure">4</p>`
   - `public/about.html:233`：`<p class="stat__label">U.S. patents granted and in process</p>`
2. 規格要求找 `10+ Peer-reviewed publications`。實際 HTML 同樣分開：
   - `public/about.html:236`：`<p class="stat__figure">10+</p>`
   - `public/about.html:237`：`<p class="stat__label">Peer-reviewed publications</p>`
3. 規格要求找 `Custom Machines, Fixtures, PLC/HMI, and Robot Systems`。實際字串在 `public/about.html:197-198` 跨行及跨 HTML text node。

因此 About 頁目前仍顯示上述兩項未核實 credential claims 及舊 role wording；擁有人應提供精確真實資料後再修改。

## 規格與目前主分支的結構落差

- 規格假設首頁有 `ProfessionalService` JSON-LD 及六項 catalogue；目前主分支已基於先前法律風險檢視移除 `ProfessionalService`。本次把七項 catalogue 放在 `Organization.hasOfferCatalog`，沒有重新加入該類型。
- 規格驗證列寫首頁 `@graph` 應有 4 nodes；目前主分支實際已有 5 nodes：Organization、Person、WebSite、BreadcrumbList、FAQPage。本次保持 5 nodes。
- 規格列要求 canonical 使用 `https://www.engineeringxyz.com/…`；目前全站及部署設定使用 `https://engineeringxyz.com/…`。本次保持既有 apex canonical，避免未經確認更換 canonical host。

## 驗證記錄

- `node --check public/js/script.js`：通過。
- 19 個 HTML 檔的 JSON-LD：全部可解析。
- 首頁 JSON-LD：5 graph nodes；Organization offer catalogue 為 7 項。
- FAQ：5 個 visible `<dd>` 與 JSON-LD answer 經 HTML entity decode 後逐字相同。
- 六個主要內容頁：每頁一個 `<h1>`、無 heading-level 跳級、所有圖片有 `alt`／`width`／`height`。
- 五個 redirect stubs：HTTP 200、`noindex, follow` 及既有 canonical 均保留。
- 所有主要內容頁及 redirect stubs：本機 HTTP 200。
- 桌面 1280px 及手機 375px：主要頁面無水平 overflow；低於 1160px 漢堡選單顯示。
- 電氣責任表在 375px 由自己的 scroll container 處理，不造成 body overflow。
- Government agency 選項會顯示 inline note，不會 hard block。
- localhost：`gtag` 沒有載入；瀏覽器 console 沒有 error；本機 server 記錄沒有 404。
- `commissioning` 所有 marketing hits 均為 `client-led` 或 `support during`。
- 沒有新增 `turnkey`、`single point of responsibility`、`NFPA 79 compliant`、`code compliant`、`UL listed` 或 `certified` marketing claim。
- 未修改 `*-old.html`、`css/legacy.css`、`js/legacy.js`、`privacy.html`、`404.html` 或 `robots.txt`。

