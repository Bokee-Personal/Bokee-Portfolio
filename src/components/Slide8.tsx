import React from 'react';

const impacts = [
  {
    icon: '💬',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    tag: 'VOC 감소',
    headline: '시설 예약 VOC',
    metric: '60% → 30%',
    metricSub: '절반 감소',
    details: ['월평균 120건 → 60건'],
    result: '고객 경험 개선 및 CS팀 업무 부담 50% 감소',
  },
  {
    icon: '🏢',
    color: '#3E61DC',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    tag: '신규 도입',
    headline: '런칭 후 3개월 내 3개 단지',
    metric: '100%',
    metricSub: '목표 달성',
    details: [
      '래미안 원펜타스 (2,100세대)',
      '래미안 포레스티지 (1,800세대)',
      '한화 포레나 수원 (1,500세대)',
    ],
    result: 'B2B 수주 실적 기여 및 비즈니스 확장 마일스톤 달성',
  },
  {
    icon: '📈',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    tag: '예약률 증가',
    headline: '모바일 채널 예약률',
    metric: '+32%',
    metricSub: '증가',
    details: ['AS-IS: 월평균 450건', 'TO-BE: 월평균 594건'],
    result: '커뮤니티 시설 활성화 및 입주민 만족도 향상',
  },
  {
    icon: '⚡',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    tag: '도입 속도',
    headline: '신규 단지 리드타임',
    metric: '6개월 → 2주',
    metricSub: '92% 단축',
    details: ['AS-IS: 개발팀 하드코딩 6개월', 'TO-BE: Admin 설정 2일 + 테스트 2주'],
    result: '비즈니스 확장 속도 가속화',
  },
];

export default function Slide8() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[24%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[400px] bg-[#A5B4FC] blur-[160px] opacity-15 rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[13px] font-bold text-gray-400 tracking-widest uppercase">Background</span>
            <span className="text-gray-300 text-[13px]">→</span>
            <span className="text-[13px] font-bold text-gray-400 tracking-widest uppercase">Solution</span>
            <span className="text-gray-300 text-[13px]">→</span>
            <span className="text-[13px] font-bold text-[#3E61DC] tracking-widest uppercase">Results</span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-[38px] md:text-[44px] font-extrabold text-[#111] tracking-tight leading-tight mb-2">
                Business Impact —{' '}
                <span className="text-[#3E61DC]">정량적 성과</span>
              </h1>
              <p className="text-[17px] text-gray-500 font-medium">
                MO 예약 시스템 재설계를 통해 달성한 4가지 핵심 성과 지표
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5 tracking-widest">런칭 후</p>
                <p className="text-[22px] font-black text-[#111]">6개월</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5 tracking-widest">신규 단지</p>
                <p className="text-[22px] font-black text-[#3E61DC]">3개</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5 tracking-widest">도입 단축</p>
                <p className="text-[22px] font-black text-[#059669]">92%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-6 pb-10 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full grid grid-cols-4 gap-5 h-full">

          {impacts.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border shadow-sm overflow-hidden"
              style={{ borderColor: item.border, backgroundColor: item.bg }}
            >
              {/* Card Header */}
              <div className="px-5 pt-5 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-extrabold px-3 py-1 rounded-full"
                    style={{ color: item.color, backgroundColor: 'white', border: `1px solid ${item.border}` }}
                  >
                    {item.tag}
                  </span>
                  <span className="text-[28px]">{item.icon}</span>
                </div>

                <p className="text-[14px] font-bold text-gray-500 mb-1 leading-tight">{item.headline}</p>

                {/* Big Metric */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-[28px] font-black leading-tight tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.metric}
                  </span>
                </div>
                <p className="text-[13px] font-bold" style={{ color: item.color }}>{item.metricSub}</p>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px" style={{ backgroundColor: item.border }} />

              {/* Details */}
              <div className="px-5 py-4 flex-1 flex flex-col gap-2">
                <ul className="space-y-2 flex-1">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color, opacity: 0.6 }}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow Result */}
                <div className="mt-auto pt-3 flex items-start gap-2">
                  <span className="text-[16px] shrink-0 mt-0.5">→</span>
                  <p className="text-[13px] text-[#111] font-bold leading-relaxed">{item.result}</p>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: item.color, opacity: 0.3 }} />
            </div>
          ))}

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        08 / 16
      </div>

    </section>
  );
}
