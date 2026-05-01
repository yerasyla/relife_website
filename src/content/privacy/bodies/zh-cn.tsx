import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyZhCn() {
  return (
    <>
      <p>
        ReLife（「本应用」「我们」）是一款个人效率与自我提升应用。本隐私政策说明当您使用
        ReLife 时，我们如何收集、使用和保护您的信息。使用本应用即表示您同意下列条款。
      </p>

      <h2>1. 我们收集的信息</h2>

      <h3>1.1. 您提供的信息</h3>
      <ul>
        <li>
          <strong>账户数据</strong>：电子邮箱和密码（由身份验证服务商管理）。
        </li>
        <li>
          <strong>任务数据</strong>：任务、清单、完成状态、统计变化、自定义规则。
        </li>
        <li>
          <strong>设置</strong>：语言、主题、偏好。
        </li>
      </ul>
      <p>
        我们 <em>不会</em> 收集您的姓名、电话号码、住址或其他个人身份信息。
      </p>

      <h3>1.2. 自动收集的数据</h3>
      <p>我们可能收集：</p>
      <ul>
        <li>设备类型（iOS/Android）</li>
        <li>应用版本</li>
        <li>操作系统</li>
        <li>崩溃日志与性能数据（用于提升稳定性）</li>
      </ul>
      <p>
        我们 <strong>不会</strong> 收集设备标识符、广告标识符或精确位置。
      </p>

      <h3>1.3. 订阅数据</h3>
      <p>若您购买订阅：</p>
      <ul>
        <li>Apple 或 Google 会向我们提供安全的交易令牌。</li>
        <li>
          ReLife <strong>不会</strong> 查看或存储您的银行卡信息。
        </li>
      </ul>
      <p>付款由以下渠道安全处理：</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play 商店</strong></li>
        <li>（可选）网页支付 <strong>Stripe</strong></li>
      </ul>

      <h2>2. 我们如何使用您的信息</h2>
      <p>我们使用您的信息用于：</p>
      <ul>
        <li>提供并在设备间同步任务与统计</li>
        <li>计算统计进度</li>
        <li>启用高级功能</li>
        <li>改进应用性能</li>
        <li>判断订阅状态</li>
        <li>保存偏好设置</li>
      </ul>
      <ul>
        <li>不出售您的数据</li>
        <li>不与广告商共享您的数据</li>
        <li>不在应用或网站之间追踪您</li>
      </ul>

      <h2>3. 数据存储与安全</h2>
      <p>您的数据使用加密云存储安全保存。</p>
      <p>我们采取常规安全措施，包括：</p>
      <ul>
        <li>HTTPS 通信</li>
        <li>加密数据库</li>
        <li>限制服务器访问</li>
      </ul>
      <p>任何系统都无法保证绝对安全。</p>

      <h2>4. 第三方服务</h2>
      <p>ReLife 使用可信的第三方供应商：</p>

      <h3>身份验证与数据库</h3>
      <ul>
        <li>Supabase（安全后端与身份验证）</li>
      </ul>

      <h3>应用内购买</h3>
      <ul>
        <li>Apple App Store（StoreKit）</li>
        <li>Google Play 结算</li>
        <li>RevenueCat（订阅管理）</li>
        <li>Stripe（如启用网页结账）</li>
      </ul>

      <h3>崩溃报告（可选）</h3>
      <ul>
        <li>Sentry 或 Expo 错误日志</li>
      </ul>
      <p>这些服务仅接收必要的最少数据。</p>

      <h2>5. 您的权利</h2>
      <p>根据您所在地区的法律，您可能有权：</p>
      <ul>
        <li>访问您的数据</li>
        <li>更新或更正数据</li>
        <li>删除账户及相关数据</li>
        <li>导出数据</li>
        <li>选择退出分析（如适用）</li>
      </ul>
      <p>
        如需请求，请发送邮件至：{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. 儿童隐私</h2>
      <p>
        ReLife <strong>不面向 13 岁以下儿童</strong>。
      </p>
      <p>我们不会故意收集儿童数据。</p>
      <p>如您认为儿童使用了本应用，请联系我们以便删除数据。</p>

      <h2>7. 数据保留</h2>
      <p>我们会在您保留账户期间保存数据。</p>
      <p>删除账户后，数据将从服务器永久移除。</p>

      <h2>8. 政策变更</h2>
      <p>我们可能不时更新本政策。</p>
      <p>变更将在应用和本网站公布并标注更新日期。</p>

      <h2>9. 联系我们</h2>
      <p>如对本政策有疑问：</p>
      <p><strong>ReLife 支持</strong></p>
      <p>
        Telegram：{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        邮箱：{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
