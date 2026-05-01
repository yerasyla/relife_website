import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyEn() {
  return (
    <>
      <p>
        ReLife (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;) is a personal
        productivity and self-improvement application. This Privacy Policy
        explains how we collect, use, and protect your information when you use
        ReLife. By using the App, you agree to the terms described below.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1. Information You Provide</h3>
      <ul>
        <li>
          <strong>Account data</strong>: email address and password (managed
          through our authentication provider).
        </li>
        <li>
          <strong>Task data</strong>: tasks, lists, completion status, stat
          changes, custom rules.
        </li>
        <li>
          <strong>Settings</strong>: language, theme, preferences.
        </li>
      </ul>
      <p>
        We do <em>not</em> collect your name, phone number, physical address, or
        any other personal identifiers.
      </p>

      <h3>1.2. Automatic Data</h3>
      <p>We may collect:</p>
      <ul>
        <li>Device type (iOS/Android)</li>
        <li>App version</li>
        <li>Operating system</li>
        <li>Crash logs &amp; performance data (to improve stability)</li>
      </ul>
      <p>
        We do <strong>not</strong> collect device ID, advertising ID, or precise
        location.
      </p>

      <h3>1.3. Subscription Data</h3>
      <p>If you purchase a subscription:</p>
      <ul>
        <li>Apple or Google provides us with a secure transaction token.</li>
        <li>
          ReLife does <strong>not</strong> see or store your credit card
          information.
        </li>
      </ul>
      <p>All purchases are handled securely by:</p>
      <ul>
        <li>
          <strong>Apple App Store</strong>
        </li>
        <li>
          <strong>Google Play Store</strong>
        </li>
        <li>(optionally) <strong>Stripe</strong> for web payments</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and sync your tasks and stats across devices</li>
        <li>Calculate stat progress</li>
        <li>Enable premium features</li>
        <li>Improve app performance</li>
        <li>Detect subscription status</li>
        <li>Save your preferences</li>
      </ul>
      <p>
        We do <strong>not</strong>:
      </p>
      <ul>
        <li>Sell your data</li>
        <li>Share your data with advertisers</li>
        <li>Track you across apps or websites</li>
      </ul>

      <h2>3. Data Storage &amp; Security</h2>
      <p>Your data is stored securely using encrypted cloud storage.</p>
      <p>
        We take standard security measures to protect your information,
        including:
      </p>
      <ul>
        <li>HTTPS communication</li>
        <li>Encrypted databases</li>
        <li>Limited access to servers</li>
      </ul>
      <p>Despite our efforts, no system can guarantee 100% security.</p>

      <h2>4. Third-Party Services We Use</h2>
      <p>ReLife uses trusted third-party providers:</p>

      <h3>Authentication &amp; Database</h3>
      <ul>
        <li>Supabase (secure backend &amp; auth)</li>
      </ul>

      <h3>In-App Purchases</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Google Play Billing</li>
        <li>RevenueCat (subscription management)</li>
        <li>Stripe (for web checkout, if enabled)</li>
      </ul>

      <h3>Crash Reporting (optional)</h3>
      <ul>
        <li>Sentry or Expo error logs</li>
      </ul>
      <p>These services only receive the minimum data necessary to operate.</p>

      <h2>5. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access your data</li>
        <li>Update or correct your data</li>
        <li>Delete your account and associated data</li>
        <li>Export your data</li>
        <li>Opt-out of analytics (where applicable)</li>
      </ul>
      <p>
        To request any of the above, email us at:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Children&apos;s Privacy</h2>
      <p>
        ReLife is <strong>not intended for children under 13</strong>.
      </p>
      <p>We do not knowingly collect data from children.</p>
      <p>
        If you believe a child has used the App, contact us and we will delete
        the data.
      </p>

      <h2>7. Data Retention</h2>
      <p>We keep your data for as long as you maintain an account.</p>
      <p>
        If you delete your account, your data is permanently removed from our
        servers.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time.</p>
      <p>
        Changes will be posted inside the App and on our website with the
        updated date.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact:</p>
      <p>
        <strong>ReLife Support</strong>
      </p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>
          {siteConfig.supportEmail}
        </a>
      </p>
    </>
  );
}
