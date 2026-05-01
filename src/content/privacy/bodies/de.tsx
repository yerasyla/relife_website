import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyDe() {
  return (
    <>
      <p>
        ReLife („die App“, „wir“) ist eine persönliche Produktivitäts‑ und
        Selbstverbesserungs‑App. Diese Datenschutzerklärung erläutert, wie wir Ihre
        Informationen erheben, nutzen und schützen, wenn Sie ReLife verwenden.
        Durch die Nutzung der App stimmen Sie den nachfolgenden Bedingungen zu.
      </p>

      <h2>1. Welche Daten wir erheben</h2>

      <h3>1.1. Von Ihnen bereitgestellte Daten</h3>
      <ul>
        <li>
          <strong>Kontodaten</strong>: E‑Mail‑Adresse und Passwort (über unseren
          Authentifizierungs­dienst).
        </li>
        <li>
          <strong>Aufgabendaten</strong>: Aufgaben, Listen, Erledigungsstatus,
          Statistikänderungen, benutzerdefinierte Regeln.
        </li>
        <li>
          <strong>Einstellungen</strong>: Sprache, Design, Präferenzen.
        </li>
      </ul>
      <p>
        Wir erheben <em>keinen</em> Namen, keine Telefonnummer, keine Anschrift und keine
        anderen persönlichen Identifikatoren.
      </p>

      <h3>1.2. Automatisch erhobene Daten</h3>
      <p>Wir können erheben:</p>
      <ul>
        <li>Gerätetyp (iOS/Android)</li>
        <li>App‑Version</li>
        <li>Betriebssystem</li>
        <li>Absturzberichte und Leistungsdaten (zur Stabilität)</li>
      </ul>
      <p>
        Wir erheben <strong>keine</strong> Geräte‑IDs, Werbe‑IDs und keinen genauen Standort.
      </p>

      <h3>1.3. Abonnementdaten</h3>
      <p>Wenn Sie ein Abonnement kaufen:</p>
      <ul>
        <li>Apple oder Google stellt uns ein sicheres Transaktions‑Token bereit.</li>
        <li>
          ReLife sieht <strong>keine</strong> Kartendaten und speichert diese{" "}
          <strong>nicht</strong>.
        </li>
      </ul>
      <p>Zahlungen werden sicher verarbeitet durch:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(optional) <strong>Stripe</strong> für Web‑Zahlungen</li>
      </ul>

      <h2>2. Wie wir Daten verwenden</h2>
      <p>Wir nutzen Daten, um:</p>
      <ul>
        <li>Aufgaben und Statistiken geräteübergreifend bereitzustellen und zu synchronisieren</li>
        <li>Statistikfortschritt zu berechnen</li>
        <li>Premium‑Funktionen zu ermöglichen</li>
        <li>die App‑Leistung zu verbessern</li>
        <li>den Abonnementstatus zu erkennen</li>
        <li>Einstellungen zu speichern</li>
      </ul>
      <ul>
        <li>Wir verkaufen Ihre Daten nicht</li>
        <li>Wir geben sie nicht an Werbetreibende weiter</li>
        <li>Wir verfolgen Sie nicht über Apps oder Websites hinweg</li>
      </ul>

      <h2>3. Speicherung und Sicherheit</h2>
      <p>Ihre Daten werden mit verschlüsseltem Cloud‑Speicher gesichert gespeichert.</p>
      <p>Wir treffen übliche Sicherheitsmaßnahmen, z. B.:</p>
      <ul>
        <li>HTTPS‑Kommunikation</li>
        <li>verschlüsselte Datenbanken</li>
        <li>eingeschränkten Serverzugriff</li>
      </ul>
      <p>Ein absolutes Sicherheitsniveau kann nicht garantiert werden.</p>

      <h2>4. Drittanbieter</h2>
      <p>ReLife nutzt vertrauenswürdige Anbieter:</p>

      <h3>Authentifizierung und Datenbank</h3>
      <ul>
        <li>Supabase (sicheres Backend und Auth)</li>
      </ul>

      <h3>In‑App‑Käufe</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Google Play‑Abrechnung</li>
        <li>RevenueCat (Abonnementverwaltung)</li>
        <li>Stripe (Web‑Checkout, falls aktiv)</li>
      </ul>

      <h3>Absturzmeldungen (optional)</h3>
      <ul>
        <li>Sentry oder Expo‑Fehlerprotokolle</li>
      </ul>
      <p>Diese Dienste erhalten nur das minimal notwendige Datenvolumen.</p>

      <h2>5. Ihre Rechte</h2>
      <p>Je nach Rechtsordnung können Sie u. a. Folgendes haben:</p>
      <ul>
        <li>Zugang zu Ihren Daten</li>
        <li>Berichtigung oder Aktualisierung</li>
        <li>Löschung von Konto und zugehörigen Daten</li>
        <li>Datenexport</li>
        <li>Widerspruch gegen Analysen (soweit anwendbar)</li>
      </ul>
      <p>
        Anfragen an:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Kinder</h2>
      <p>
        ReLife richtet sich <strong>nicht</strong> an Kinder unter 13 Jahren.
      </p>
      <p>Wir erheben wissentlich keine Daten von Kindern.</p>
      <p>Kontaktieren Sie uns, wenn ein Kind die App genutzt haben soll – wir löschen die Daten.</p>

      <h2>7. Aufbewahrung</h2>
      <p>Wir speichern Daten, solange ein Konto besteht.</p>
      <p>Bei Kontolöschung werden Daten dauerhaft von unseren Servern entfernt.</p>

      <h2>8. Änderungen</h2>
      <p>Wir können diese Erklärung aktualisieren.</p>
      <p>Änderungen werden in der App und auf dieser Website mit Datum veröffentlicht.</p>

      <h2>9. Kontakt</h2>
      <p>Fragen zu dieser Erklärung:</p>
      <p><strong>ReLife Support</strong></p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        E‑Mail:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
