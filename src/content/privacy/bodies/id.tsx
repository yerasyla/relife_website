import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyId() {
  return (
    <>
      <p>
        ReLife (&quot;Aplikasi&quot;, &quot;kami&quot;) adalah aplikasi produktivitas dan
        pengembangan diri pribadi. Kebijakan Privasi ini menjelaskan bagaimana kami
        mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan ReLife.
        Dengan menggunakan Aplikasi, Anda menyetujui ketentuan di bawah ini.
      </p>

      <h2>1. Informasi yang kami kumpulkan</h2>

      <h3>1.1. Informasi yang Anda berikan</h3>
      <ul>
        <li>
          <strong>Data akun</strong>: email dan kata sandi (dikelola oleh penyedia autentikasi).
        </li>
        <li>
          <strong>Data tugas</strong>: tugas, daftar, status penyelesaian, perubahan statistik,
          aturan kustom.
        </li>
        <li>
          <strong>Pengaturan</strong>: bahasa, tema, preferensi.
        </li>
      </ul>
      <p>
        Kami <em>tidak</em> mengumpulkan nama, nomor telepon, alamat fisik, atau identifikasi
        pribadi lainnya.
      </p>

      <h3>1.2. Data otomatis</h3>
      <p>Kami dapat mengumpulkan:</p>
      <ul>
        <li>Jenis perangkat (iOS/Android)</li>
        <li>Versi aplikasi</li>
        <li>Sistem operasi</li>
        <li>Log kerusakan dan data kinerja (untuk meningkatkan stabilitas)</li>
      </ul>
      <p>
        Kami <strong>tidak</strong> mengumpulkan ID perangkat, ID iklan, atau lokasi presisi.
      </p>

      <h3>1.3. Data langganan</h3>
      <p>Jika Anda membeli langganan:</p>
      <ul>
        <li>Apple atau Google memberi kami token transaksi yang aman.</li>
        <li>
          ReLife <strong>tidak</strong> melihat atau menyimpan informasi kartu pembayaran Anda.
        </li>
      </ul>
      <p>Pembayaran diproses secara aman oleh:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(opsional) <strong>Stripe</strong> untuk pembayaran web</li>
      </ul>

      <h2>2. Cara kami menggunakan informasi</h2>
      <p>Kami menggunakan informasi untuk:</p>
      <ul>
        <li>Menyediakan dan menyinkronkan tugas serta statistik antar perangkat</li>
        <li>Menghitung kemajuan statistik</li>
        <li>Mengaktifkan fitur premium</li>
        <li>Meningkatkan kinerja aplikasi</li>
        <li>Mengetahui status langganan</li>
        <li>Menyimpan preferensi Anda</li>
      </ul>
      <ul>
        <li>Tidak menjual data Anda</li>
        <li>Tidak membagikannya kepada pengiklan</li>
        <li>Tidak melacak Anda lintas aplikasi atau situs web</li>
      </ul>

      <h2>3. Penyimpanan dan keamanan</h2>
      <p>Data Anda disimpan dengan aman menggunakan penyimpanan cloud terenkripsi.</p>
      <p>Kami menerapkan langkah-langkah keamanan standar termasuk HTTPS, basis data terenkripsi, dan akses server terbatas.</p>
      <p>Tidak ada sistem yang menjamin keamanan mutlak.</p>

      <h2>4. Layanan pihak ketiga</h2>
      <p>ReLife menggunakan penyedia tepercaya:</p>

      <h3>Autentikasi dan basis data</h3>
      <ul>
        <li>Supabase (backend dan autentikasi aman)</li>
      </ul>

      <h3>Pembelian dalam aplikasi</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Penagihan Google Play</li>
        <li>RevenueCat (manajemen langganan)</li>
        <li>Stripe (checkout web jika diaktifkan)</li>
      </ul>

      <h3>Pelaporan kerusakan (opsional)</h3>
      <ul>
        <li>Sentry atau log kesalahan Expo</li>
      </ul>
      <p>Layanan ini hanya menerima data minimum yang diperlukan.</p>

      <h2>5. Hak Anda</h2>
      <p>Bergantung pada yurisdiksi, Anda dapat berhak untuk:</p>
      <ul>
        <li>Mengakses data</li>
        <li>Memperbarui atau memperbaiki data</li>
        <li>Menghapus akun dan data terkait</li>
        <li>Mengekspor data</li>
        <li>Menolak analitik (jika berlaku)</li>
      </ul>
      <p>
        Permintaan ke:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Privasi anak</h2>
      <p>
        ReLife <strong>tidak ditujukan untuk anak di bawah 13 tahun</strong>.
      </p>
      <p>Kami tidak dengan sengaja mengumpulkan data dari anak-anak.</p>
      <p>Jika Anda percaya seorang anak telah menggunakan Aplikasi, hubungi kami untuk menghapus data.</p>

      <h2>7. Retensi</h2>
      <p>Kami menyimpan data selama Anda memiliki akun.</p>
      <p>Setelah akun dihapus, data dihapus permanen dari server kami.</p>

      <h2>8. Perubahan kebijakan</h2>
      <p>Kami dapat memperbarui kebijakan ini.</p>
      <p>Perubahan akan dipublikasikan di Aplikasi dan situs ini dengan tanggal pembaruan.</p>

      <h2>9. Hubungi kami</h2>
      <p>Pertanyaan tentang kebijakan ini:</p>
      <p><strong>Dukungan ReLife</strong></p>
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
