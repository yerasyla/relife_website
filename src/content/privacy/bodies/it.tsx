import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyIt() {
  return (
    <>
      <p>
        ReLife (&quot;l&apos;App&quot;, &quot;noi&quot;) è un&apos;applicazione personale di
        produttività e miglioramento personale. La presente Informativa sulla privacy
        spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni quando
        usi ReLife. Usando l&apos;App accetti i termini di seguito indicati.
      </p>

      <h2>1. Informazioni che raccogliamo</h2>

      <h3>1.1. Informazioni che ci fornisci</h3>
      <ul>
        <li>
          <strong>Dati dell&apos;account</strong>: email e password (gestiti dal nostro
          fornitore di autenticazione).
        </li>
        <li>
          <strong>Dati delle attività</strong>: attività, liste, stato di completamento,
          modifiche alle statistiche, regole personalizzate.
        </li>
        <li>
          <strong>Impostazioni</strong>: lingua, tema, preferenze.
        </li>
      </ul>
      <p>
        Non raccogliamo <em>nome e cognome</em>, numero di telefono, indirizzo fisico o altri
        identificatori personali.
      </p>

      <h3>1.2. Dati raccolti automaticamente</h3>
      <p>Possiamo raccogliere:</p>
      <ul>
        <li>Tipo di dispositivo (iOS/Android)</li>
        <li>Versione dell&apos;app</li>
        <li>Sistema operativo</li>
        <li>Registri di arresto anomalo e dati sulle prestazioni (per migliorare la stabilità)</li>
      </ul>
      <p>
        Non raccogliamo <strong>ID del dispositivo</strong>, ID pubblicitario né posizione precisa.
      </p>

      <h3>1.3. Dati sugli abbonamenti</h3>
      <p>Se acquisti un abbonamento:</p>
      <ul>
        <li>Apple o Google ci fornisce un token di transazione sicuro.</li>
        <li>
          ReLife <strong>non</strong> visualizza né memorizza i dati della tua carta.
        </li>
      </ul>
      <p>I pagamenti sono gestiti in modo sicuro da:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(facoltativo) <strong>Stripe</strong> per pagamenti web</li>
      </ul>

      <h2>2. Come utilizziamo le informazioni</h2>
      <p>Utilizziamo le informazioni per:</p>
      <ul>
        <li>Fornire e sincronizzare attività e statistiche tra dispositivi</li>
        <li>Calcolare i progressi delle statistiche</li>
        <li>Abilitare funzioni premium</li>
        <li>Migliorare le prestazioni dell&apos;app</li>
        <li>Rilevare lo stato dell&apos;abbonamento</li>
        <li>Salvare le preferenze</li>
      </ul>
      <ul>
        <li>Non vendiamo i tuoi dati</li>
        <li>Non li condividiamo con inserzionisti</li>
        <li>Non ti tracciamo tra app o siti web</li>
      </ul>

      <h2>3. Archiviazione e sicurezza</h2>
      <p>I dati sono conservati in modo sicuro utilizzando storage cloud crittografato.</p>
      <p>Adottiamo misure di sicurezza standard, tra cui:</p>
      <ul>
        <li>Comunicazioni HTTPS</li>
        <li>Database crittografati</li>
        <li>Accesso ai server limitato</li>
      </ul>
      <p>Nessun sistema può garantire sicurezza assoluta.</p>

      <h2>4. Servizi di terze parti</h2>
      <p>ReLife utilizza fornitori affidabili:</p>

      <h3>Autenticazione e database</h3>
      <ul>
        <li>Supabase (backend e autenticazione sicuri)</li>
      </ul>

      <h3>Acquisti in-app</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Fatturazione Google Play</li>
        <li>RevenueCat (gestione abbonamenti)</li>
        <li>Stripe (checkout web, se abilitato)</li>
      </ul>

      <h3>Segnalazioni di arresto anomalo (facoltativo)</h3>
      <ul>
        <li>Sentry o log di errore Expo</li>
      </ul>
      <p>Questi servizi ricevono solo i dati minimi necessari.</p>

      <h2>5. I tuoi diritti</h2>
      <p>In base alla giurisdizione, potresti avere il diritto di:</p>
      <ul>
        <li>Accedere ai dati</li>
        <li>Aggiornarli o correggerli</li>
        <li>Eliminare account e dati associati</li>
        <li>Esportare i dati</li>
        <li>Opporti alle analisi (ove applicabile)</li>
      </ul>
      <p>
        Richieste:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Privacy dei minori</h2>
      <p>
        ReLife <strong>non è destinata a minori di 13 anni</strong>.
      </p>
      <p>Non raccogliamo consapevolmente dati da minori.</p>
      <p>Se ritieni che un minore abbia usato l&apos;App, contattaci per eliminare i dati.</p>

      <h2>7. Conservazione</h2>
      <p>Conserviamo i dati finché mantieni un account.</p>
      <p>Eliminando l&apos;account, i dati vengono rimossi permanentemente dai nostri server.</p>

      <h2>8. Modifiche</h2>
      <p>Possiamo aggiornare questa informativa.</p>
      <p>Le modifiche saranno pubblicate nell&apos;App e su questo sito con la data aggiornata.</p>

      <h2>9. Contatti</h2>
      <p>Per domande su questa informativa:</p>
      <p><strong>Supporto ReLife</strong></p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
