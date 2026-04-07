import React from 'react';

export default function Slide9() {
  const metaInfo = [
    { label: 'Period', value: '2025. 01 ~ 2025. 05 (5개월, POC: 5/19 ~ 5/31)' },
    { label: 'Position/Contribution', value: '기획 PL/100%' },
  ];

  const packageCategories = [
    {
      title: '성과 지표',
      items: ['클릭률 37.6%', '전환율 15.2%', '전환율 최고 18.1% (SEG3)'],
    },
    {
      title: '핵심 업무',
      items: ['SEG 타겟팅 전략 수립', 'UX 원칙 5가지 설계', '바텀시트 UI 설계'],
    },
    {
      title: '활용 기술',
      items: ['Figma / GA4 / Excel / Jira'],
    },
    {
      title: '비즈니스 성과',
      items: ['정규화 개발 승인', '연 매출 36억 기여 예상'],
    },
  ];

  const newsLinks = [
    { text: 'Figma 기획서 상세 보기', url: '#' },
    { text: 'GA4 성과 분석 리포트 확인', url: '#' },
  ];

  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#FDFCFB] overflow-hidden">

      <div className="max-w-[1526px] mx-auto w-full px-12 md:px-20 flex-1 flex flex-col justify-center pt-2 pb-10">

        <div className="flex flex-row gap-16 items-start justify-between">

          {/* Left Column */}
          <div className="flex-1 max-w-[1500px]">
            {/* Title */}
            <h1 className="text-[42px] md:text-[48px] font-extrabold text-[#111] tracking-tighter leading-tight mb-8 whitespace-nowrap">
              Chapter2. <span className="text-[#E91E8A]">요금제 업셀/다운케어 서비스 개선</span>
            </h1>

            {/* Meta Info */}
            <div className="space-y-1 mb-6">
              {metaInfo.map((info, idx) => (
                <div key={idx} className="flex gap-2 text-[14px]">
                  <span className="font-bold text-[#111] w-[150px]">{info.label}.</span>
                  <span className="text-gray-500 font-medium">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Business Impact Highlight */}
            <div className="bg-[#FEF9C3] px-5 py-2.5 rounded-lg mb-8 inline-block w-full max-w-[700px]">
              <p className="text-[14px] font-bold text-[#111]">
                Business Impact. <span className="font-medium ml-1">실시간 데이터 기반 개인화 맞춤 요금제 추천을 통한 정규화 승인 및 매출 기여</span>
              </p>
            </div>

            {/* Body Description */}
            <div className="space-y-6 text-[16px] leading-[1.8] text-gray-700 font-medium mb-10 max-w-[750px]">
              <p>
                데이터 사용량을 고려하지 않고 요금제를 하향 선택하는 고객에게 실시간 데이터 사용 패턴을 분석하여 최적의 요금제를 제안하는 개인화 캠페인을 설계했습니다.
              </p>
              <p>
                총 963명 대상 13일간 POC 실험을 통해 <span className="text-[#111] font-bold">클릭률 37.6%, 전환율 15.2%</span> 등 압도적인 성과를 기록하며, 데이터 기반 개인화 UX의 효용성을 검증하고 전사 확산을 위한 정규화 개발 승인을 획득했습니다.
              </p>
            </div>

            {/* Features/Packages Grid */}
            <h3 className="text-[18px] font-black text-[#111] mb-5">프로젝트 성과 및 업무 범위</h3>
            <div className="grid grid-cols-4 gap-4 mb-10">
              {packageCategories.map((cat, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[13px] font-bold text-gray-400 mb-3 uppercase tracking-wider">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <span key={j} className="bg-gray-50 text-[#111] text-[12px] font-bold px-2 py-1 rounded border border-gray-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* News/Links Section */}
            <div className="bg-[#F8F9FA] rounded-xl p-5 border border-gray-100 max-w-[700px]">
              <h4 className="text-[14px] font-bold text-[#111] mb-3 uppercase tracking-wider">관련 자료</h4>
              <ul className="space-y-2">
                {newsLinks.map((link, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[14px] font-medium text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <a href={link.url} className="hover:text-[#E91E8A] transition-colors decoration-gray-300 underline underline-offset-4">
                      {link.text} <span className="text-[12px] font-bold text-[#3E61DC] ml-1">바로가기</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Performance Cards */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 hidden xl:flex relative h-full min-h-[600px] xl:-mt-10">
            {/* Background Glows for Glassmorphism */}
            <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[#E91E8A]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-[#3B82F6]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

            {/* Title */}
            <div className="bg-white/50 backdrop-blur-md px-6 py-2 rounded-full shadow-sm mb-2">
              <h3 className="text-[14px] font-black text-[#111] uppercase tracking-[0.15em]">POC 핵심 성과</h3>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col gap-4 w-[280px]">

              {/* Card 1 */}
              <div className="flex flex-col items-center justify-center h-[125px] rounded-3xl bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/15 to-transparent" />
                <p className="text-[42px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] leading-none mb-1.5 relative z-10 tracking-tight">37.6%</p>
                <p className="text-[15px] font-bold text-gray-600 relative z-10">추천 클릭률</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center h-[125px] rounded-3xl bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/15 to-transparent" />
                <p className="text-[42px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#E91E8A] leading-none mb-1.5 relative z-10 tracking-tight">15.2%</p>
                <p className="text-[15px] font-bold text-gray-600 relative z-10">추천 전환율</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center justify-center h-[125px] rounded-3xl bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/15 to-transparent" />
                <p className="text-[42px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#2563EB] leading-none mb-1.5 relative z-10 tracking-tight">963명</p>
                <p className="text-[15px] font-bold text-gray-600 relative z-10">POC 대상</p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center justify-center h-[125px] rounded-3xl bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/15 to-transparent" />
                <p className="text-[42px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669] leading-none mb-1.5 relative z-10 tracking-tight">13일간</p>
                <p className="text-[15px] font-bold text-gray-600 relative z-10">실험 기간</p>
              </div>

            </div>

            {/* Bottom Highlight Status */}
            <div className="mt-4 flex flex-col items-center justify-center bg-white/60 backdrop-blur-xl px-10 py-5 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
              <p className="text-[18px] font-black text-[#111] mb-1.5 flex items-center gap-2 tracking-tight">
                <span className="text-[20px]">💡</span> 정규화 승인
              </p>
              <p className="text-[14px] font-bold text-[#E91E8A]">→ 그로스해킹플랫폼 전환</p>
            </div>
          </div>

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-10 right-10 text-gray-400 font-medium text-[15px] z-20">
        09 / 15
      </div>
    </section>
  );
}
