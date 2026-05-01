import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyJa() {
  return (
    <>
      <p>
        ReLife（「本アプリ」「当社」）は、個人向けの生産性およびセルフインプルーブメント向けアプリです。
        本プライバシーポリシーは、ReLife の利用にあたり、当社がどのように情報を収集・利用・保護するかを説明します。
        本アプリを利用することで、以下の条件に同意したものとみなされます。
      </p>

      <h2>1. 収集する情報</h2>

      <h3>1.1. お客様から提供される情報</h3>
      <ul>
        <li>
          <strong>アカウント情報</strong>：メールアドレスとパスワード（認証プロバイダーが管理）。
        </li>
        <li>
          <strong>タスク情報</strong>：タスク、リスト、完了状態、統計の変化、カスタムルール。
        </li>
        <li>
          <strong>設定</strong>：言語、テーマ、各種設定。
        </li>
      </ul>
      <p>
        氏名、電話番号、住所など、その他の個人を特定する識別情報は{" "}
        <em>収集しません</em>。
      </p>

      <h3>1.2. 自動的に収集される情報</h3>
      <p>以下を収集する場合があります。</p>
      <ul>
        <li>デバイスの種類（iOS/Android）</li>
        <li>アプリのバージョン</li>
        <li>オペレーティングシステム</li>
        <li>クラッシュログおよびパフォーマンスデータ（安定性向上のため）</li>
      </ul>
      <p>
        デバイス ID、広告 ID、正確な位置情報は{" "}
        <strong>収集しません</strong>。
      </p>

      <h3>1.3. サブスクリプション関連情報</h3>
      <p>サブスクリプションを購入する場合：</p>
      <ul>
        <li>Apple または Google から安全な取引トークンが提供されます。</li>
        <li>
          ReLife はお客様のクレジットカード情報を{" "}
          <strong>閲覧・保存しません</strong>。
        </li>
      </ul>
      <p>決済は以下により安全に処理されます。</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play ストア</strong></li>
        <li>（任意）Web 決済の <strong>Stripe</strong></li>
      </ul>

      <h2>2. 情報の利用目的</h2>
      <p>当社は情報を以下の目的で利用します。</p>
      <ul>
        <li>タスクおよび統計情報の提供・デバイス間同期</li>
        <li>統計進行の計算</li>
        <li>プレミアム機能の提供</li>
        <li>アプリ性能の改善</li>
        <li>サブスクリプション状態の確認</li>
        <li>設定の保存</li>
      </ul>
      <ul>
        <li>データを販売しません</li>
        <li>広告主と共有しません</li>
        <li>アプリやウェブサイト間で追跡しません</li>
      </ul>

      <h2>3. データの保存とセキュリティ</h2>
      <p>データは暗号化されたクラウドストレージに安全に保存されます。</p>
      <p>HTTPS 通信、データベース暗号化、サーバーアクセス制限などの標準的な対策を講じます。</p>
      <p>いかなるシステムも 100% の安全性を保証できません。</p>

      <h2>4. 第三者サービス</h2>
      <p>ReLife は信頼できる第三者プロバイダーを利用します。</p>

      <h3>認証およびデータベース</h3>
      <ul>
        <li>Supabase（バックエンドおよび認証）</li>
      </ul>

      <h3>アプリ内課金</h3>
      <ul>
        <li>Apple App Store（StoreKit）</li>
        <li>Google Play 課金</li>
        <li>RevenueCat（サブスクリプション管理）</li>
        <li>Stripe（Web チェックアウトが有効な場合）</li>
      </ul>

      <h3>クラッシュ報告（任意）</h3>
      <ul>
        <li>Sentry または Expo のエラーログ</li>
      </ul>
      <p>これらのサービスには運用上必要最小限のデータのみが送信されます。</p>

      <h2>5. お客様の権利</h2>
      <p>管轄地域により、以下の権利を有する場合があります。</p>
      <ul>
        <li>データへのアクセス</li>
        <li>更新または訂正</li>
        <li>アカウントおよび関連データの削除</li>
        <li>データのエクスポート</li>
        <li>解析のオプトアウト（該当する場合）</li>
      </ul>
      <p>
        ご請求は次へご連絡ください：{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. 児童のプライバシー</h2>
      <p>
        ReLife は<strong>13 歳未満の児童を対象としていません</strong>。
      </p>
      <p>児童から故意にデータを収集することはありません。</p>
      <p>お子様がアプリを利用したと思われる場合はご連絡ください。データを削除します。</p>

      <h2>7. データの保持</h2>
      <p>アカウントが存続する間、データを保持します。</p>
      <p>アカウント削除後、データはサーバーから永久に削除されます。</p>

      <h2>8. ポリシーの変更</h2>
      <p>本ポリシーを更新することがあります。</p>
      <p>変更はアプリおよび本サイトに更新日とともに掲示されます。</p>

      <h2>9. お問い合わせ</h2>
      <p>本ポリシーに関するご質問：</p>
      <p><strong>ReLife サポート</strong></p>
      <p>
        Telegram：{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        メール：{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
