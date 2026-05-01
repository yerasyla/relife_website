import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyTr() {
  return (
    <>
      <p>
        ReLife (&quot;Uygulama&quot;, &quot;biz&quot;) kişisel üretkenlik ve kişisel gelişim
        uygulamasıdır. Bu Gizlilik Politikası, ReLife&apos;ı kullandığınızda bilgilerinizi nasıl
        topladığımızı, kullandığımızı ve koruduğumuzu açıklar. Uygulamayı kullanarak aşağıdaki
        şartları kabul etmiş olursunuz.
      </p>

      <h2>1. Topladığımız bilgiler</h2>

      <h3>1.1. Sizin sağladığınız bilgiler</h3>
      <ul>
        <li>
          <strong>Hesap verileri</strong>: e‑posta ve şifre (kimlik doğrulama sağlayıcısı tarafından yönetilir).
        </li>
        <li>
          <strong>Görev verileri</strong>: görevler, listeler, tamamlanma durumu, istatistik değişiklikleri,
          özel kurallar.
        </li>
        <li>
          <strong>Ayarlar</strong>: dil, tema, tercihler.
        </li>
      </ul>
      <p>
        Adınızı, telefon numaranızı, fiziksel adresinizi veya başka kişisel tanımlayıcıları{" "}
        <em>toplamayız</em>.
      </p>

      <h3>1.2. Otomatik veriler</h3>
      <p>Şunları toplayabiliriz:</p>
      <ul>
        <li>Cihaz türü (iOS/Android)</li>
        <li>Uygulama sürümü</li>
        <li>İşletim sistemi</li>
        <li>Çökme günlükleri ve performans verileri (kararlılık için)</li>
      </ul>
      <p>
        Cihaz kimliği, reklam kimliği veya kesin konum{" "}
        <strong>toplanmaz</strong>.
      </p>

      <h3>1.3. Abonelik verileri</h3>
      <p>Bir abonelik satın alırsanız:</p>
      <ul>
        <li>Apple veya Google bize güvenli bir işlem jetonu sağlar.</li>
        <li>
          ReLife ödeme kartı bilgilerinizi <strong>görmez</strong> ve{" "}
          <strong>saklamaz</strong>.
        </li>
      </ul>
      <p>Ödemeler güvenli şekilde şunlar tarafından işlenir:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(isteğe bağlı) web ödemeleri için <strong>Stripe</strong></li>
      </ul>

      <h2>2. Bilgileri nasıl kullanıyoruz</h2>
      <p>Bilgilerinizi şunlar için kullanıyoruz:</p>
      <ul>
        <li>Görevleri ve istatistikleri cihazlar arasında sağlamak ve senkronize etmek</li>
        <li>İlerlemeyi hesaplamak</li>
        <li>Premium özellikleri etkinleştirmek</li>
        <li>Uygulama performansını iyileştirmek</li>
        <li>Abonelik durumunu belirlemek</li>
        <li>Tercihleri kaydetmek</li>
      </ul>
      <ul>
        <li>Verilerinizi satmayız</li>
        <li>Reklamverenlerle paylaşmayız</li>
        <li>Uygulamalar veya web siteleri arasında takip etmeyiz</li>
      </ul>

      <h2>3. Saklama ve güvenlik</h2>
      <p>Verileriniz şifreli bulut depolama ile güvenli biçimde saklanır.</p>
      <p>HTTPS, şifreli veritabanları ve sınırlı sunucu erişimi gibi standart önlemler uygularız.</p>
      <p>Hiçbir sistem mutlak güvenlik garanti edemez.</p>

      <h2>4. Üçüncü taraf hizmetleri</h2>
      <p>ReLife güvenilir sağlayıcılar kullanır:</p>

      <h3>Kimlik doğrulama ve veritabanı</h3>
      <ul>
        <li>Supabase (güvenli arka uç ve kimlik doğrulama)</li>
      </ul>

      <h3>Uygulama içi satın alımlar</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Google Play Faturalandırma</li>
        <li>RevenueCat (abonelik yönetimi)</li>
        <li>Stripe (etkinse web ödemesi)</li>
      </ul>

      <h3>Çökme raporları (isteğe bağlı)</h3>
      <ul>
        <li>Sentry veya Expo hata günlükleri</li>
      </ul>
      <p>Bu hizmetler yalnızca gerekli minimum veriyi alır.</p>

      <h2>5. Haklarınız</h2>
      <p>Yargı bölgenize bağlı olarak şunlar dahil haklara sahip olabilirsiniz:</p>
      <ul>
        <li>Verilere erişim</li>
        <li>Güncelleme veya düzeltme</li>
        <li>Hesabı ve ilişkili verileri silme</li>
        <li>Verileri dışa aktarma</li>
        <li>Analizden çıkma (uygunsa)</li>
      </ul>
      <p>
        Talepler:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Çocukların gizliliği</h2>
      <p>
        ReLife <strong>13 yaşın altındaki çocuklar için tasarlanmamıştır</strong>.
      </p>
      <p>Çocuklardan bilerek veri toplamayız.</p>
      <p>Bir çocuğun uygulamayı kullandığını düşünüyorsanız silmemiz için bize ulaşın.</p>

      <h2>7. Saklama süresi</h2>
      <p>Hesabınız olduğu sürece verileri saklarız.</p>
      <p>Hesap silindiğinde veriler sunucularımızdan kalıcı olarak kaldırılır.</p>

      <h2>8. Politika değişiklikleri</h2>
      <p>Bu politikayı güncelleyebiliriz.</p>
      <p>Değişiklikler Uygulama ve bu web sitesinde güncellenen tarih ile yayınlanır.</p>

      <h2>9. İletişim</h2>
      <p>Bu politika hakkında sorularınız için:</p>
      <p><strong>ReLife Destek</strong></p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        E‑posta:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
