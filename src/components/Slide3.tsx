export default function Slide3() {
  const newsLinks = [
    { text: '삼성물산 라이프스타일 플랫폼 \'홈닉\' 출시', url: 'https://www.homeniq.co.kr/media.html' },
    { text: '홈닉, 입주민을 위한 커뮤니티 예약 기능 강화', url: 'https://www.homeniq.co.kr/media.html' }
  ];

  const works = [
    '고객 VOC 및 운영데이터 분석을 통한 주요 Pain Point 도출 및 개선 전략 수립',
    'AS-IS DB 구조 및 정책 분석을 통한 TO-BE 방향성 및 목표 수립',
    '모바일 서비스 플로우 및 정책 설계',
    'IA, UIUX 공통 가이드 등의 문서 작성 및 관리',
    '개발/디자인팀 커뮤니케이션 및 협업 리딩',
    '테스트 시나리오 작성 및 QA 진행 (Excel, 삼성물산 PMS 활용)',
    '운영 가이드 작성 및 아파트 입주민 사용자 배포',
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center p-8 md:p-16 snap-start relative bg-[#fcfdff] overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] bg-[#A5B4FC] blur-[180px] opacity-[0.2] rounded-full z-0"></div>
      <div className="absolute top-[20%] -right-[15%] w-[700px] h-[700px] bg-[#00D2D2] blur-[160px] opacity-[0.3] rounded-full z-0"></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-[#00D2D2] blur-[180px] opacity-[0.2] rounded-full z-0"></div>

      <div className="max-w-[1526px] mx-auto w-full flex flex-col md:flex-row gap-16 items-center justify-between z-10">

        {/* Left: Text Info Section */}
        <div className="flex-1 max-w-[820px] flex flex-col">

          {/* Title Area */}
          <div className="mb-6 font-sans">
            <span className="block text-[15px] font-bold text-[#3E61DC] mb-3 tracking-widest uppercase">Project 01</span>
            <p className="text-[16px] font-medium text-gray-500 mb-2">삼성물산 - Homeniq</p>
            <h1 className="text-[40px] md:text-[48px] font-extrabold text-[#111] tracking-tight leading-tight mb-4">
              커뮤니티 시설 예약 서비스 리뉴얼
            </h1>
            <div className="inline-block bg-[#3E61DC] text-white text-[15px] font-bold px-5 py-2.5 rounded-xl mb-5">
              아파트 관리자와 입주민 모두를 만족시키는 B2B2C 서비스 기획
            </div>
            <p className="text-[16px] leading-[1.8] text-gray-700 font-medium mb-1">
              복잡한 정책과 운영 방침으로 인해 시스템 확장에 병목이 발생하던 홈닉의 시설 예약 서비스를 리뉴얼 했습니다.<br />
              총 21개 시설의 복잡한 정책과 이용권·상품 구조를 모듈형으로 재구축하여, <strong className="text-[#111] font-bold">신규 단지 서비스 도입 기간을 단축하고 사용자 경험과 운영 효율성을 개선했습니다.</strong>
            </p>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-[80px_1fr] gap-y-4 gap-x-6 text-[15px] mb-6 border-t border-gray-100 pt-6">
            <span className="text-gray-400 font-bold">성과</span>
            <ul className="space-y-1 text-gray-700 font-medium">
              <li>• 3개월 내 3개 아파트 단지에 <strong className="text-[#111]">서비스 신규 도입</strong>, 비즈니스 확장에 기여</li>
              <li>• 모바일 채널 예약률 <strong className="text-[#111]">32% 증가</strong></li>
              <li>• 시설 예약 관련 <strong className="text-[#111]">VOC 감소</strong></li>
            </ul>

            <span className="text-gray-400 font-bold">업무</span>
            <ul className="space-y-1 text-gray-700 font-medium">
              {works.map((w, i) => <li key={i}>• {w}</li>)}
            </ul>

            <span className="text-gray-400 font-bold">활용</span>
            <span className="text-gray-700 font-medium">Figma · Excel · 삼성물산 PMS</span>

            <span className="text-gray-400 font-bold">기여도</span>
            <span className="text-gray-700 font-medium"><strong className="text-[#111]">50% (MO 프론트 기획/정책설계 100%)</strong> — 기획 2명</span>

            <span className="text-gray-400 font-bold">기간</span>
            <span className="text-gray-700 font-medium">2023.09 ~ 2024.11 (1년 2개월)</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mr-2">Link.</span>
            {newsLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-600 hover:border-[#3E61DC] hover:text-[#3E61DC] shadow-sm transition-all duration-300">
                🔗 {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Phone Mockups */}
        <div className="flex-1 flex justify-center items-center relative h-full hidden xl:flex">
          <div className="relative w-[340px] h-[680px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,33,95,0.15)] rotate-[-6deg] translate-x-[-30px] z-10 overflow-hidden bg-white border border-gray-50 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 text-gray-400">
              <span className="text-4xl mb-3">📱</span>
              <span className="font-bold text-sm">Image Area 1</span>
              <span className="text-xs text-gray-300 mt-1">340 x 680</span>
            </div>
          </div>
          <div className="absolute w-[340px] h-[680px] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,33,95,0.2)] rotate-[8deg] translate-x-[140px] translate-y-16 z-20 overflow-hidden bg-white border border-gray-50 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 text-gray-400">
              <span className="text-4xl mb-3">📱</span>
              <span className="font-bold text-sm">Image Area 2</span>
              <span className="text-xs text-gray-300 mt-1">340 x 680</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-gray-400 font-medium text-[15px] z-20">
        03 / 16
      </div>
    </section>
  );
}
