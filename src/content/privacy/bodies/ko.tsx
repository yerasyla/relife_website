import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyKo() {
  return (
    <>
      <p>
        ReLife(&quot;앱&quot;, &quot;당사&quot;)는 개인 생산성 및 자기계발 앱입니다. 본 개인정보
        처리방침은 ReLife 이용 시 당사가 정보를 어떻게 수집·이용·보호하는지 설명합니다. 앱을
        이용하면 아래 조항에 동의한 것으로 간주됩니다.
      </p>

      <h2>1. 수집하는 정보</h2>

      <h3>1.1. 사용자가 제공하는 정보</h3>
      <ul>
        <li>
          <strong>계정 데이터</strong>: 이메일과 비밀번호(인증 제공업체가 관리).
        </li>
        <li>
          <strong>작업 데이터</strong>: 작업, 목록, 완료 상태, 통계 변경, 사용자 규칙.
        </li>
        <li>
          <strong>설정</strong>: 언어, 테마, 기타 환경설정.
        </li>
      </ul>
      <p>
        이름, 전화번호, 실제 주소 등 기타 개인 식별 정보는{" "}
        <em>수집하지 않습니다</em>.
      </p>

      <h3>1.2. 자동 수집 데이터</h3>
      <p>다음 정보를 수집할 수 있습니다.</p>
      <ul>
        <li>기기 유형(iOS/Android)</li>
        <li>앱 버전</li>
        <li>운영체제</li>
        <li>충돌 로그 및 성능 데이터(안정성 개선)</li>
      </ul>
      <p>
        기기 ID, 광고 ID, 정확한 위치 정보는{" "}
        <strong>수집하지 않습니다</strong>.
      </p>

      <h3>1.3. 구독 정보</h3>
      <p>구독을 구매하는 경우:</p>
      <ul>
        <li>Apple 또는 Google이 안전한 거래 토큰을 제공합니다.</li>
        <li>
          ReLife는 카드 결제 정보를{" "}
          <strong>보거나 저장하지 않습니다</strong>.
        </li>
      </ul>
      <p>결제는 다음을 통해 안전하게 처리됩니다.</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play 스토어</strong></li>
        <li>(선택) 웹 결제 <strong>Stripe</strong></li>
      </ul>

      <h2>2. 정보 이용 목적</h2>
      <p>당사는 다음 목적으로 정보를 이용합니다.</p>
      <ul>
        <li>작업 및 통계 제공·기기 간 동기화</li>
        <li>통계 진행 계산</li>
        <li>프리미엄 기능 제공</li>
        <li>앱 성능 개선</li>
        <li>구독 상태 확인</li>
        <li>환경설정 저장</li>
      </ul>
      <ul>
        <li>데이터를 판매하지 않음</li>
        <li>광고주와 공유하지 않음</li>
        <li>앱·웹사이트 간 추적하지 않음</li>
      </ul>

      <h2>3. 저장 및 보안</h2>
      <p>데이터는 암호화된 클라우드 저장소에 안전하게 보관됩니다.</p>
      <p>HTTPS 통신, 암호화된 데이터베이스, 서버 접근 제한 등 표준 보안 조치를 적용합니다.</p>
      <p>어떤 시스템도 절대적인 보안을 보장할 수 없습니다.</p>

      <h2>4. 제3자 서비스</h2>
      <p>ReLife는 신뢰할 수 있는 제3자를 사용합니다.</p>

      <h3>인증 및 데이터베이스</h3>
      <ul>
        <li>Supabase(보안 백엔드 및 인증)</li>
      </ul>

      <h3>인앱 결제</h3>
      <ul>
        <li>Apple App Store(StoreKit)</li>
        <li>Google Play 결제</li>
        <li>RevenueCat(구독 관리)</li>
        <li>Stripe(웹 결제 활성화 시)</li>
      </ul>

      <h3>충돌 보고(선택)</h3>
      <ul>
        <li>Sentry 또는 Expo 오류 로그</li>
      </ul>
      <p>해당 서비스는 운영에 필요한 최소한의 데이터만 받습니다.</p>

      <h2>5. 이용자의 권리</h2>
      <p>관할 지역에 따라 다음 권리를 가질 수 있습니다.</p>
      <ul>
        <li>데이터 접근</li>
        <li>수정 또는 업데이트</li>
        <li>계정 및 관련 데이터 삭제</li>
        <li>데이터 내보내기</li>
        <li>분석 수집 거부(해당 시)</li>
      </ul>
      <p>
        요청:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. 아동 개인정보</h2>
      <p>
        ReLife는 <strong>만 13세 미만 아동을 대상으로 하지 않습니다</strong>.
      </p>
      <p>아동 데이터를 고의로 수집하지 않습니다.</p>
      <p>아동이 앱을 사용했다고 생각되면 연락 주시면 데이터를 삭제합니다.</p>

      <h2>7. 보관 기간</h2>
      <p>계정이 유지되는 동안 데이터를 보관합니다.</p>
      <p>계정 삭제 시 서버에서 영구 삭제됩니다.</p>

      <h2>8. 방침 변경</h2>
      <p>본 방침을 업데이트할 수 있습니다.</p>
      <p>변경 사항은 앱 및 본 사이트에 업데이트 날짜와 함께 게시됩니다.</p>

      <h2>9. 문의</h2>
      <p>본 방침 관련 문의:</p>
      <p><strong>ReLife 지원</strong></p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        이메일:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
