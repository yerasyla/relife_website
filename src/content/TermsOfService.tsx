import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import styles from "@/app/legal.module.css";

export function TermsOfService() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className={styles.updated}>
        Last updated: {siteConfig.lastUpdatedTerms}
      </p>

      <p>
        Welcome to ReLife (&quot;ReLife&quot;, &quot;the App&quot;, &quot;we&quot;,
        &quot;us&quot;).
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the ReLife
        application and related services.
      </p>
      <p>By accessing or using ReLife, you agree to these Terms.</p>

      <h2>1. Use of the App</h2>
      <p>
        ReLife is a personal productivity and self-improvement tool designed to
        help users track tasks, habits, and personal growth metrics.
      </p>
      <p>You agree to use the App only for lawful purposes and in accordance with these Terms.</p>
      <p>You must not:</p>
      <ul>
        <li>Use the App in any way that violates applicable laws or regulations</li>
        <li>Attempt to gain unauthorized access to our systems or other users&apos; data</li>
        <li>Interfere with or disrupt the App&apos;s functionality</li>
      </ul>

      <h2>2. Accounts</h2>
      <p>To use certain features, you may need to create an account.</p>
      <p>You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate accounts that violate these
        Terms.
      </p>

      <h2>3. User Data &amp; Content</h2>
      <p>You retain ownership of the data you create in ReLife, including:</p>
      <ul>
        <li>Tasks</li>
        <li>Lists</li>
        <li>Custom stat rules</li>
        <li>Preferences</li>
      </ul>
      <p>By using the App, you grant us a limited license to:</p>
      <ul>
        <li>Store</li>
        <li>Process</li>
        <li>Display your data</li>
      </ul>
      <p>This is solely for the purpose of providing and improving the App.</p>

      <h2>4. Subscriptions &amp; Payments</h2>
      <p>ReLife may offer premium features through subscriptions.</p>
      <ul>
        <li>
          Payments are processed by:
          <ul>
            <li>Google Play Store</li>
            <li>Apple App Store</li>
            <li>Stripe (for web, if applicable)</li>
          </ul>
        </li>
        <li>ReLife does not store your payment details.</li>
        <li>
          Subscriptions:
          <ul>
            <li>Automatically renew unless canceled</li>
            <li>Can be managed through your app store account</li>
          </ul>
        </li>
      </ul>
      <p>
        Refunds are subject to the policies of the respective platform
        (Google/Apple).
      </p>

      <h2>5. Intellectual Property</h2>
      <p>All rights to the App, including:</p>
      <ul>
        <li>Design</li>
        <li>Features</li>
        <li>Branding</li>
        <li>Software</li>
      </ul>
      <p>are owned by ReLife.</p>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, or distribute the App</li>
        <li>Reverse engineer or attempt to extract source code</li>
      </ul>

      <h2>6. Availability &amp; Changes</h2>
      <p>We aim to provide a reliable service, but:</p>
      <ul>
        <li>The App is provided &quot;as is&quot;</li>
        <li>We do not guarantee uninterrupted availability</li>
      </ul>
      <p>We may:</p>
      <ul>
        <li>Update features</li>
        <li>Modify or discontinue parts of the App</li>
      </ul>

      <h2>7. Disclaimer</h2>
      <p>ReLife is a productivity and self-improvement tool.</p>
      <p>It does not provide:</p>
      <ul>
        <li>Medical advice</li>
        <li>Psychological treatment</li>
        <li>Professional counseling</li>
      </ul>
      <p>Any results or improvements depend on individual use.</p>

      <h2>8. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <p>ReLife is not liable for:</p>
      <ul>
        <li>Loss of data</li>
        <li>Indirect or incidental damages</li>
        <li>Loss of productivity or personal outcomes</li>
      </ul>
      <p>Your use of the App is at your own risk.</p>

      <h2>9. Termination</h2>
      <p>You may stop using the App at any time.</p>
      <p>We may suspend or terminate access if:</p>
      <ul>
        <li>You violate these Terms</li>
        <li>We are required to do so by law</li>
      </ul>

      <h2>10. Privacy</h2>
      <p>
        Your use of the App is also governed by our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>We may update these Terms from time to time.</p>
      <p>Updates will be posted with a revised &quot;Last updated&quot; date.</p>
      <p>Continued use of the App means you accept the updated Terms.</p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by {siteConfig.governingLaw}.
      </p>

      <h2>13. Contact</h2>
      <p>If you have any questions about these Terms:</p>
      <p>
        <strong>ReLife Support</strong>
      </p>
      <p>
        Telegram:{" "}
        <a
          href={siteConfig.telegramUrl}
          rel="noopener noreferrer"
        >
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
