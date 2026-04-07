export default function Slide3() {
  const newsLinks = [
    { text: '삼성물산 라이프스타일 플랫폼 \'홈닉\' 출시', url: 'https://www.homeniq.co.kr/media.html' },
    { text: '홈닉, 입주민을 위한 커뮤니티 예약 기능 강화', url: 'https://www.homeniq.co.kr/media.html' }
  ];

  const packageCards = [
    {
      category: '정책 모듈화',
      items: ['21개 시설 정책 그룹화', '단지별 맞춤 설정']
    },
    {
      category: '여정 통합',
      items: ['예약/구매 여정 통합']
    },
    {
      category: '채널 통합',
      items: ['실시간 재고 동기화']
    },
    {
      category: '운영 효율화',
      items: ['모바일 전환율 32%↑']
    },
  ];

  return (
    <section className="w-full h-screen flex flex-col snap-start relative bg-[#fcfdff] overflow-hidden font-sans">
      {/* Background blobs */}
      <div className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] bg-[#A5B4FC] blur-[180px] opacity-[0.2] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[20%] -right-[15%] w-[700px] h-[700px] bg-[#00D2D2] blur-[160px] opacity-[0.3] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-[#00D2D2] blur-[180px] opacity-[0.2] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-[1720px] mx-auto w-full flex flex-row gap-16 items-start justify-between z-10 h-full px-12 md:px-20 py-10">

        {/* Left */}
        <div className="flex-[1.1] flex flex-col h-full justify-center">

          {/* Top note */}
          <div className="mb-6">
            <p className="text-[15px] text-gray-500 font-medium mb-2 border border-gray-200 rounded-full px-5 py-2 w-max">
              Project 01 — 예약 서비스의 복잡한 정책을 구조화하여 고객 경험을 개선한 경험
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-[40px] md:text-[48px] font-extrabold tracking-tight leading-tight mb-5">
            <span className="text-[#3E61DC]">커뮤니티 시설 예약</span>{' '}
            <span className="text-[#111]">서비스 리뉴얼</span>
          </h1>

          {/* Meta */}
          <div className="flex flex-col gap-1.5 mb-5 text-[16px] font-bold text-[#111]">
            <p>Period. <span className="font-medium text-gray-600">2023.09 ~ 2024.11 (1년 2개월)</span></p>
            <p className="flex items-center gap-2 flex-wrap">
              Position/Contribution. <span className="font-medium text-gray-600">Product Owner (MO) / 50%</span>
              <span className="text-[13px] text-gray-400 font-medium">* MO 프론트 기획 및 예약 정책 설계 100% 담당</span>
            </p>
          </div>

          {/* Business Impact */}
          <div className="bg-[#3E61DC] rounded-xl px-5 py-3 mb-6 inline-flex items-center gap-3 w-max max-w-full">
            <span className="text-[15px] font-medium text-[#c7d4ff]">Business Impact.</span>
            <span className="text-[16px] font-bold text-white">3개월 내 신규 단지 3곳 도입 · 모바일 예약률 32%↑ · VOC 60%→30% 감소</span>
          </div>

          {/* Description */}
          <p className="text-[15px] leading-[1.8] text-gray-700 font-medium mb-1">
            <strong className="text-[#111]">삼성물산 홈닉(Homeniq)</strong>은 아파트 입주민과 관리자 모두를 만족시켜야 하는 B2B2C 플랫폼입니다.<br />
            파편화된 21개 시설의 기존 예약 정책을 모듈화하고, 이용권 구매와 예약이 분리돼 있던<br />
            불편한 여정을 통합하여 커뮤니티 시설 예약 서비스를 기획했습니다.
          </p>
          <p className="text-[15px] leading-[1.8] text-gray-500 font-medium mb-6">
            입주민이 더 쉽고 빠르게 시설을 예약할 수 있도록 8단계의 복잡한 채널을 4단계로 축소하고,<br />
            관리자의 운영 공수를 최소화하는 정책 데이터 모델링에 중점을 두었습니다.
          </p>

          {/* Package Cards */}
          <h3 className="text-[15px] font-bold text-[#111] mb-3">서비스 핵심 모듈</h3>
          <div className="flex gap-3 mb-6 flex-wrap">
            {packageCards.map((card, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm min-w-[140px]">
                <p className="text-[13px] font-bold text-gray-400 mb-2">{card.category}</p>
                {card.items.map((item, i) => (
                  <div key={i} className="text-[13px] font-bold text-[#111] bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mb-1 text-center">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mr-1">관련 기사</span>
            {newsLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[13px] font-bold text-gray-600 hover:border-[#3E61DC] hover:text-[#3E61DC] shadow-sm transition-all duration-200">
                • {link.text} <span className="text-[#3E61DC]">바로가기</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Phone Mockups */}
        <div className="flex-[0.9] flex justify-center items-center relative h-full hidden xl:flex">
          <div className="relative w-[310px] h-[620px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,33,95,0.15)] rotate-[-6deg] translate-x-[-20px] z-10 overflow-hidden bg-white border border-gray-100 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 text-gray-300">
              <span className="text-3xl mb-2">📱</span>
              <span className="text-xs">Image Area 1</span>
            </div>
          </div>
          <div className="absolute w-[310px] h-[620px] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,33,95,0.2)] rotate-[8deg] translate-x-[130px] translate-y-14 z-20 overflow-hidden bg-white border border-gray-100 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 text-gray-300">
              <span className="text-3xl mb-2">📱</span>
              <span className="text-xs">Image Area 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        03 / 16
      </div>
    </section>
  );
}
