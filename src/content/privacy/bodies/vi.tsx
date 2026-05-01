import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyVi() {
  return (
    <>
      <p>
        ReLife (“ứng dụng”, “chúng tôi”) là ứng dụng năng suất và phát triển bản thân cho cá
        nhân. Chính sách quyền riêng tư này giải thích cách chúng tôi thu thập, sử dụng và
        bảo vệ thông tin của bạn khi dùng ReLife. Khi dùng ứng dụng, bạn đồng ý với các điều
        khoản dưới đây.
      </p>

      <h2>1. Thông tin chúng tôi thu thập</h2>

      <h3>1.1. Thông tin bạn cung cấp</h3>
      <ul>
        <li>
          <strong>Dữ liệu tài khoản</strong>: email và mật khẩu (do nhà cung cấp xác thực quản lý).
        </li>
        <li>
          <strong>Dữ liệu nhiệm vụ</strong>: nhiệm vụ, danh sách, trạng thái hoàn thành, thay đổi
          chỉ số, quy tắc tùy chỉnh.
        </li>
        <li>
          <strong>Cài đặt</strong>: ngôn ngữ, giao diện, tùy chọn.
        </li>
      </ul>
      <p>
        Chúng tôi <em>không</em> thu thập họ tên, số điện thoại, địa chỉ nhà hay định danh cá nhân
        khác.
      </p>

      <h3>1.2. Dữ liệu tự động</h3>
      <p>Chúng tôi có thể thu thập:</p>
      <ul>
        <li>Loại thiết bị (iOS/Android)</li>
        <li>Phiên bản ứng dụng</li>
        <li>Hệ điều hành</li>
        <li>Nhật ký lỗi và dữ liệu hiệu năng (để cải thiện độ ổn định)</li>
      </ul>
      <p>
        Chúng tôi <strong>không</strong> thu thập ID thiết bị, ID quảng cáo hay vị trí chính xác.
      </p>

      <h3>1.3. Dữ liệu đăng ký</h3>
      <p>Nếu bạn mua gói đăng ký:</p>
      <ul>
        <li>Apple hoặc Google cung cấp mã giao dịch bảo mật.</li>
        <li>
          ReLife <strong>không</strong> xem hay lưu thông tin thẻ thanh toán của bạn.
        </li>
      </ul>
      <p>Thanh toán được xử lý an toàn bởi:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(tuỳ chọn) <strong>Stripe</strong> cho thanh toán web</li>
      </ul>

      <h2>2. Cách chúng tôi sử dụng thông tin</h2>
      <p>Chúng tôi dùng thông tin để:</p>
      <ul>
        <li>Cung cấp và đồng bộ nhiệm vụ &amp; chỉ số giữa các thiết bị</li>
        <li>Tính tiến độ chỉ số</li>
        <li>Bật tính năng cao cấp</li>
        <li>Cải thiện hiệu năng ứng dụng</li>
        <li>Xác định trạng thái đăng ký</li>
        <li>Lưu tùy chọn của bạn</li>
      </ul>
      <ul>
        <li>Không bán dữ liệu của bạn</li>
        <li>Không chia sẻ với nhà quảng cáo</li>
        <li>Không theo dõi bạn giữa các ứng dụng hoặc website</li>
      </ul>

      <h2>3. Lưu trữ và bảo mật</h2>
      <p>Dữ liệu được lưu an toàn bằng lưu trữ đám mây mã hoá.</p>
      <p>Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn như HTTPS, cơ sở dữ liệu mã hoá, giới hạn truy cập máy chủ.</p>
      <p>Không hệ thống nào đảm bảo an toàn tuyệt đối.</p>

      <h2>4. Dịch vụ bên thứ ba</h2>
      <p>ReLife dùng các nhà cung cấp đáng tin cậy:</p>

      <h3>Xác thực &amp; cơ sở dữ liệu</h3>
      <ul>
        <li>Supabase (hạ tầng &amp; xác thực bảo mật)</li>
      </ul>

      <h3>Mua trong ứng dụng</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Thanh toán Google Play</li>
        <li>RevenueCat (quản lý đăng ký)</li>
        <li>Stripe (thanh toán web nếu bật)</li>
      </ul>

      <h3>Báo cáo sự cố (tuỳ chọn)</h3>
      <ul>
        <li>Sentry hoặc nhật ký lỗi Expo</li>
      </ul>
      <p>Các dịch vụ này chỉ nhận dữ liệu tối thiểu cần thiết.</p>

      <h2>5. Quyền của bạn</h2>
      <p>Tùy khu vực pháp lý, bạn có thể có quyền:</p>
      <ul>
        <li>Truy cập dữ liệu</li>
        <li>Cập nhật hoặc chỉnh sửa</li>
        <li>Xoá tài khoản và dữ liệu liên quan</li>
        <li>Xuất dữ liệu</li>
        <li>Từ chối phân tích (nếu áp dụng)</li>
      </ul>
      <p>
        Yêu cầu qua email:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Trẻ em</h2>
      <p>
        ReLife <strong>không dành cho trẻ dưới 13 tuổi</strong>.
      </p>
      <p>Chúng tôi không cố ý thu thập dữ liệu trẻ em.</p>
      <p>Nếu bạn cho rằng trẻ đã dùng ứng dụng, hãy liên hệ để chúng tôi xoá dữ liệu.</p>

      <h2>7. Lưu giữ</h2>
      <p>Chúng tôi giữ dữ liệu trong khi bạn còn tài khoản.</p>
      <p>Khi xoá tài khoản, dữ liệu sẽ bị xoá vĩnh viễn khỏi máy chủ.</p>

      <h2>8. Thay đổi chính sách</h2>
      <p>Chúng tôi có thể cập nhật chính sách này.</p>
      <p>Thay đổi sẽ được đăng trong ứng dụng và trên website kèm ngày cập nhật.</p>

      <h2>9. Liên hệ</h2>
      <p>Thắc mắc về chính sách:</p>
      <p><strong>Hỗ trợ ReLife</strong></p>
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
