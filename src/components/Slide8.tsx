import React from 'react';

const impacts = [
  {
    icon: '💬',
    tag: 'VOC 감소',
    headline: '시설 예약 VOC 절반 감소',
    metric: '60% → 30%',
    metricSub: '월평균 120건 → 60건',
    details: ['고객 경험 개선 및 CS팀 업무 부담 50% 감소'],
    lesson: '좋은 UX는 기능이 아니라 사용자의 혼란을 없애는 것에서 시작된다',
  },
  {
    icon: '🏢',
    tag: '비즈니스 확장',
    headline: '런칭 3개월 내 3개 단지 도입',
    metric: '100%',
    metricSub: '목표 달성률',
    details: [
      '래미안 원펜타스 (2,100세대)',
      '래미안 포레스티지 (1,800세대)',
      '한화 포레나 수원 (1,500세대)',
    ],
    lesson: 'B2C뿐 아니라 관리자(B)가 쓰기 편한 시스템이 비즈니스 확장의 핵심이다',
  },
  {
    icon: '📈',
    tag: '예약률 증가',
    headline: '모바일 채널 예약률 32% 증가',
    metric: '+32%',
    metricSub: '450건 → 594건 / 월',
    details: ['커뮤니티 시설 활성화 및 입주민 만족도 향상'],
    lesson: '가설이 아닌 사용자 이탈 데이터가 근본적인 해결책을 이끌어냈다',
  },
  {
    icon: '⚡',
    tag: '운영 효율',
    headline: '신규 단지 리드타임 92% 단축',
    metric: '6개월 → 2주',
    metricSub: '개발 공수 없이 Admin 설정만으로',
    details: [
      'AS-IS: 개발팀 하드코딩 6개월 소요',
      'TO-BE: Admin 설정 2일 + 테스트 2주',
    ],
    lesson: '예외를 모두 구현하기보다 시스템 중심으로 정책을 설계하면 속도와 품질을 함께 잡을 수 있다',
  },
];

export default function Slide8() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[22%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[400px] bg-[#A5B4FC] blur-[160px] opacity-15 rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1526px] mx-auto w-full z-10">
          <div className="inline-flex items-center bg-[#f0f4ff] border border-[#00215F]/10 px-4 py-1.5 rounded-full mb-5">
            <span className="text-[20px] font-bold text-[#00215F] tracking-wider uppercase">Business Impact</span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-[38px] md:text-[42px] font-extrabold text-[#111] tracking-tight leading-tight">
                정량적 성과 —{' '}
                <span className="text-[#3E61DC]">4가지 핵심 지표</span>
              </h1>
              <p className="text-[17px] text-gray-500 font-medium mt-1">
                MO 예약 시스템 재설계를 통해 달성한 비즈니스 임팩트
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5 tracking-widest">측정 기간</p>
                <p className="text-[20px] font-black text-[#111]">6개월</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5 tracking-widest">신규 단지</p>
                <p className="text-[20px] font-black text-[#3E61DC]">3개</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5 tracking-widest">리드타임 단축</p>
                <p className="text-[20px] font-black text-[#3E61DC]">92%</p>
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
              className="flex flex-col rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-sm overflow-hidden"
            >
              {/* Card Header */}
              <div className="px-5 pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#3E61DC] border border-[#C7D2FE]">
                    {item.tag}
                  </span>
                  <span className="text-[26px]">{item.icon}</span>
                </div>

                <p className="text-[13px] font-bold text-gray-500 mb-2 leading-snug">{item.headline}</p>

                {/* Big Metric */}
                <p className="text-[32px] font-black text-[#3E61DC] leading-tight tracking-tight">
                  {item.metric}
                </p>
                <p className="text-[12px] text-gray-400 font-medium mt-0.5">{item.metricSub}</p>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-gray-200" />

              {/* Details */}
              <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                <ul className="space-y-1.5">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3E61DC] opacity-40 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lesson Learned Footer */}
              <div className="mx-5 h-px bg-gray-100" />
              <div className="px-5 py-3 bg-white flex items-start gap-2.5">
                <span className="text-[10px] font-black text-[#3E61DC] tracking-widest uppercase px-2 py-0.5 bg-[#EEF2FF] rounded-full shrink-0 mt-0.5">Lesson</span>
                <p className="text-[12px] text-gray-400 font-medium leading-relaxed italic">{item.lesson}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        08 / 15
      </div>

    </section>
  );
}
