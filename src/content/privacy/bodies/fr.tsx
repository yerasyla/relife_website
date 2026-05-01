import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyFr() {
  return (
    <>
      <p>
        ReLife (« l&apos;Application », « nous ») est une application personnelle
        de productivité et de développement personnel. La présente politique de
        confidentialité explique comment nous collectons, utilisons et protégeons
        vos informations lorsque vous utilisez ReLife. En utilisant
        l&apos;Application, vous acceptez les conditions décrites ci‑dessous.
      </p>

      <h2>1. Informations que nous collectons</h2>

      <h3>1.1. Informations que vous fournissez</h3>
      <ul>
        <li>
          <strong>Données de compte</strong> : adresse e‑mail et mot de passe
          (gérés par notre fournisseur d&apos;authentification).
        </li>
        <li>
          <strong>Données des tâches</strong> : tâches, listes, statut de
          réalisation, évolutions des statistiques, règles personnalisées.
        </li>
        <li>
          <strong>Paramètres</strong> : langue, thème, préférences.
        </li>
      </ul>
      <p>
        Nous ne collectons <em>pas</em> votre nom, numéro de téléphone, adresse
        postale ou d&apos;autres identifiants personnels.
      </p>

      <h3>1.2. Données collectées automatiquement</h3>
      <p>Nous pouvons collecter :</p>
      <ul>
        <li>Type d&apos;appareil (iOS/Android)</li>
        <li>Version de l&apos;application</li>
        <li>Système d&apos;exploitation</li>
        <li>
          Journaux de plantages et données de performance (pour améliorer la
          stabilité)
        </li>
      </ul>
      <p>
        Nous ne collectons <strong>pas</strong> l&apos;identifiant de l&apos;appareil,
        l&apos;identifiant publicitaire ni la localisation précise.
      </p>

      <h3>1.3. Données d&apos;abonnement</h3>
      <p>Si vous souscrivez un abonnement :</p>
      <ul>
        <li>
          Apple ou Google nous fournit un jeton de transaction sécurisé.
        </li>
        <li>
          ReLife ne voit <strong>pas</strong> et ne stocke <strong>pas</strong> vos
          informations de carte bancaire.
        </li>
      </ul>
      <p>Les paiements sont traités de manière sécurisée par :</p>
      <ul>
        <li>
          <strong>Apple App Store</strong>
        </li>
        <li>
          <strong>Google Play Store</strong>
        </li>
        <li>(facultatif) <strong>Stripe</strong> pour les paiements web</li>
      </ul>

      <h2>2. Comment nous utilisons vos informations</h2>
      <p>Nous utilisons vos informations pour :</p>
      <ul>
        <li>Fournir et synchroniser vos tâches et statistiques entre appareils</li>
        <li>Calculer la progression des statistiques</li>
        <li>Activer les fonctionnalités premium</li>
        <li>Améliorer les performances de l&apos;application</li>
        <li>Déterminer le statut d&apos;abonnement</li>
        <li>Enregistrer vos préférences</li>
      </ul>
      <p>
        Nous ne faisons <strong>pas</strong> :
      </p>
      <ul>
        <li>Revendre vos données</li>
        <li>Les partager avec des annonceurs</li>
        <li>Vous suivre entre applications ou sites web</li>
      </ul>

      <h2>3. Stockage et sécurité des données</h2>
      <p>
        Vos données sont stockées de façon sécurisée dans un cloud chiffré.
      </p>
      <p>
        Nous appliquons des mesures de sécurité courantes pour protéger vos
        informations, notamment :
      </p>
      <ul>
        <li>Communication HTTPS</li>
        <li>Bases de données chiffrées</li>
        <li>Accès aux serveurs limité</li>
      </ul>
      <p>
        Malgré ces mesures, aucun système ne peut garantir une sécurité absolue.
      </p>

      <h2>4. Services tiers utilisés</h2>
      <p>ReLife s&apos;appuie sur des prestataires de confiance :</p>

      <h3>Authentification et base de données</h3>
      <ul>
        <li>Supabase (backend et authentification sécurisés)</li>
      </ul>

      <h3>Achats intégrés</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Facturation Google Play</li>
        <li>RevenueCat (gestion des abonnements)</li>
        <li>Stripe (paiement web si activé)</li>
      </ul>

      <h3>Rapports de plantages (facultatif)</h3>
      <ul>
        <li>Sentry ou journaux d&apos;erreur Expo</li>
      </ul>
      <p>Ces services ne reçoivent que les données minimales nécessaires.</p>

      <h2>5. Vos droits</h2>
      <p>Selon votre juridiction, vous pouvez avoir le droit de :</p>
      <ul>
        <li>Accéder à vos données</li>
        <li>Les mettre à jour ou les corriger</li>
        <li>Supprimer votre compte et les données associées</li>
        <li>Exporter vos données</li>
        <li>Vous désinscrire des analyses (le cas échéant)</li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez‑nous à :{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Confidentialité des enfants</h2>
      <p>
        ReLife n&apos;est <strong>pas destinée aux enfants de moins de 13 ans</strong>.
      </p>
      <p>Nous ne collectons pas sciemment de données auprès d&apos;enfants.</p>
      <p>
        Si vous pensez qu&apos;un enfant a utilisé l&apos;Application,
        contactez‑nous et nous supprimerons les données concernées.
      </p>

      <h2>7. Conservation des données</h2>
      <p>Nous conservons vos données tant que vous conservez un compte.</p>
      <p>
        Si vous supprimez votre compte, vos données sont définitivement effacées
        de nos serveurs.
      </p>

      <h2>8. Modifications de cette politique</h2>
      <p>Nous pouvons mettre à jour cette politique de confidentialité.</p>
      <p>
        Les changements seront publiés dans l&apos;Application et sur ce site avec la
        date de mise à jour.
      </p>

      <h2>9. Nous contacter</h2>
      <p>Pour toute question relative à cette politique :</p>
      <p>
        <strong>Support ReLife</strong>
      </p>
      <p>
        Telegram :{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        E‑mail :{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>
          {siteConfig.supportEmail}
        </a>
      </p>
    </>
  );
}
