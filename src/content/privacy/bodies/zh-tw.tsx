import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyZhTw() {
  return (
    <>
      <p>
        ReLife（「本 App」、「我們」）是一款個人生產力與自我成長應用程式。本隱私權政策說明當您使用
        ReLife 時，我們如何收集、使用與保護您的資訊。使用本 App 即表示您同意下列條款。
      </p>

      <h2>1. 我們收集的資訊</h2>

      <h3>1.1. 您提供的資訊</h3>
      <ul>
        <li>
          <strong>帳戶資料</strong>：電子郵件與密碼（由身分驗證供應商管理）。
        </li>
        <li>
          <strong>任務資料</strong>：任務、清單、完成狀態、統計變更、自訂規則。
        </li>
        <li>
          <strong>設定</strong>：語言、主題、偏好設定。
        </li>
      </ul>
      <p>
        我們 <em>不會</em> 收集您的姓名、電話號碼、實體地址或其他個人身分識別資訊。
      </p>

      <h3>1.2. 自動收集的資料</h3>
      <p>我們可能收集：</p>
      <ul>
        <li>裝置類型（iOS/Android）</li>
        <li>App 版本</li>
        <li>作業系統</li>
        <li>當機紀錄與效能資料（用於提升穩定性）</li>
      </ul>
      <p>
        我們 <strong>不會</strong> 收集裝置識別碼、廣告識別碼或精確位置。
      </p>

      <h3>1.3. 訂閱資料</h3>
      <p>若您購買訂閱：</p>
      <ul>
        <li>Apple 或 Google 會提供安全的交易權杖（token）。</li>
        <li>
          ReLife <strong>不會</strong> 查看或儲存您的信用卡資料。
        </li>
      </ul>
      <p>付款由以下服務安全處理：</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play 商店</strong></li>
        <li>（選用）網路付款 <strong>Stripe</strong></li>
      </ul>

      <h2>2. 我們如何使用您的資訊</h2>
      <p>我們將資訊用於：</p>
      <ul>
        <li>提供並跨裝置同步您的任務與統計</li>
        <li>計算統計進度</li>
        <li>啟用進階功能</li>
        <li>改善 App 效能</li>
        <li>判斷訂閱狀態</li>
        <li>儲存偏好設定</li>
      </ul>
      <ul>
        <li>不出售您的資料</li>
        <li>不與廣告商分享您的資料</li>
        <li>不跨 App 或網站追蹤您</li>
      </ul>

      <h2>3. 資料儲存與安全</h2>
      <p>您的資料以加密雲端儲存方式安全保存。</p>
      <p>我們採取常見安全措施，包括：</p>
      <ul>
        <li>HTTPS 通訊</li>
        <li>加密資料庫</li>
        <li>伺服器存取限制</li>
      </ul>
      <p>沒有任何系統能保證百分之百安全。</p>

      <h2>4. 第三方服務</h2>
      <p>ReLife 使用可信賴的第三方供應商：</p>

      <h3>身分驗證與資料庫</h3>
      <ul>
        <li>Supabase（安全後端與驗證）</li>
      </ul>

      <h3>App 內購買</h3>
      <ul>
        <li>Apple App Store（StoreKit）</li>
        <li>Google Play 帳款服務</li>
        <li>RevenueCat（訂閱管理）</li>
        <li>Stripe（若啟用網路結帳）</li>
      </ul>

      <h3>當機回報（選用）</h3>
      <ul>
        <li>Sentry 或 Expo 錯誤紀錄</li>
      </ul>
      <p>這些服務僅接收必要最少資料。</p>

      <h2>5. 您的權利</h2>
      <p>依您所在地法令，您可能擁有以下權利：</p>
      <ul>
        <li>存取您的資料</li>
        <li>更新或更正資料</li>
        <li>刪除帳戶與相關資料</li>
        <li>匯出資料</li>
        <li>選擇退出分析（如適用）</li>
      </ul>
      <p>
        若要提出請求，請寄信至：{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. 兒童隱私</h2>
      <p>
        ReLife <strong>非為未滿 13 歲兒童設計</strong>。
      </p>
      <p>我們不會故意收集兒童資料。</p>
      <p>若您認為兒童曾使用本 App，請與我們聯絡以便刪除資料。</p>

      <h2>7. 資料保留</h2>
      <p>只要您維持帳戶，我們會保留資料。</p>
      <p>若您刪除帳戶，資料將自伺服器永久移除。</p>

      <h2>8. 政策變更</h2>
      <p>我們可能不定期更新本政策。</p>
      <p>變更將於 App 與本網站公告並附上更新日期。</p>

      <h2>9. 聯絡我們</h2>
      <p>若對本政策有任何疑問：</p>
      <p><strong>ReLife 支援</strong></p>
      <p>
        Telegram：{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        電子郵件：{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
