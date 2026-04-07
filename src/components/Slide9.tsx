import React from 'react';

const lessons = [
  {
    num: '1',
    icon: '🎯',
    color: '#3E61DC',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    tagColor: '#3E61DC',
    title: '전략적 우선순위 결정의 중요성',
    quote: '"모든 예외를 다루기보다 시스템에 맞는 정책을 선제적으로 개선"',
    points: [
      {
        label: '문제 인식',
        text: '21개 시설의 모든 예외 케이스를 다 구현하려 했으나, 개발 공수만 증가시키고 유지보수를 불가능하게 만든다는 것을 깨달음',
      },
      {
        label: '전환점',
        text: '"현장 관리자가 시스템에 맞춰 정책을 조정"하는 방향으로 전략 전환',
      },
      {
        label: '결과',
        text: '속도와 품질을 동시에 확보 → 도입 리드타임 6개월 → 2주',
      },
    ],
  },
  {
    num: '2',
    icon: '📊',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    tagColor: '#7C3AED',
    title: '사용자 행동 데이터 기반 의사결정',
    quote: '"가설이 아닌 데이터가 UX 개선의 출발점"',
    points: [
      {
        label: '발견',
        text: '"이용권 구매 후 30% 이탈"이라는 데이터를 발견하지 못했다면, Flow 통합이라는 근본적 해결책을 찾지 못했을 것',
      },
      {
        label: '적용',
        text: '이후 모든 프로젝트에서 GA, SQL을 활용한 사용자 행동 분석을 우선 실행',
      },
      {
        label: '결과',
        text: '데이터 기반 의사결정으로 예약 완료율 68% → 89% 달성',
      },
    ],
  },
  {
    num: '3',
    icon: '🤝',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    tagColor: '#059669',
    title: 'B2B2C 플랫폼에서의 이해관계자 관리',
    quote: '"B2C만 고려하면 실패 — B도 동시에 잡아야 한다"',
    points: [
      {
        label: '핵심 학습',
        text: 'B2C만 고려하면 실패: 현장 관리자(B)의 운영 편의성도 동시에 확보해야 신규 단지 도입이 가능하다는 것을 학습',
      },
      {
        label: '실행',
        text: 'Admin 기능에 현장 관리자 의견을 적극 반영하여 "현장에서 쓰기 편한 시스템" 설계에 집중',
      },
      {
        label: '결과',
        text: '3개월 내 3개 신규 단지 도입 목표 달성률 100%',
      },
    ],
  },
];

const labelColors: Record<string, { text: string; bg: string }> = {
  '문제 인식': { text: '#DC2626', bg: '#FEF2F2' },
  '전환점': { text: '#D97706', bg: '#FFFBEB' },
  '결과': { text: '#059669', bg: '#ECFDF5' },
  '발견': { text: '#7C3AED', bg: '#F5F3FF' },
  '적용': { text: '#3E61DC', bg: '#EEF2FF' },
  '핵심 학습': { text: '#DC2626', bg: '#FEF2F2' },
  '실행': { text: '#D97706', bg: '#FFFBEB' },
};

export default function Slide9() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[22%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute -left-20 top-0 w-[500px] h-[400px] bg-[#A5B4FC] blur-[160px] opacity-15 rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#f0f4ff] border border-[#00215F]/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-[18px] font-bold text-[#00215F] tracking-wider uppercase">Lesson Learned</span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-[36px] md:text-[42px] font-extrabold text-[#111] tracking-tight leading-tight mb-2">
                이 프로젝트가 남긴{' '}
                <span className="text-[#3E61DC]">3가지 핵심 인사이트</span>
              </h1>
              <p className="text-[16px] text-gray-500 font-medium">
                0→1 런칭부터 확장까지 1년 2개월간의 프로젝트를 통해 체득한 PM으로서의 성장
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-4 pb-10 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full grid grid-cols-3 gap-6 h-full">

          {lessons.map((lesson) => (
            <div
              key={lesson.num}
              className="flex flex-col rounded-3xl border overflow-hidden shadow-sm"
              style={{ borderColor: lesson.border, backgroundColor: lesson.bg }}
            >
              {/* Card Top */}
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-[18px] text-white shadow-sm"
                    style={{ backgroundColor: lesson.color }}
                  >
                    {lesson.num}
                  </div>
                  <span className="text-[30px]">{lesson.icon}</span>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#111] leading-snug mb-3 tracking-tight">
                  {lesson.title}
                </h3>

                {/* Quote */}
                <div
                  className="rounded-xl px-4 py-3 border"
                  style={{ backgroundColor: 'white', borderColor: lesson.border }}
                >
                  <p
                    className="text-[13px] font-bold leading-relaxed italic"
                    style={{ color: lesson.color }}
                  >
                    {lesson.quote}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-6 h-px" style={{ backgroundColor: lesson.border }} />

              {/* Points */}
              <div className="px-6 py-4 flex flex-col gap-3 flex-1">
                {lesson.points.map((point, j) => {
                  const lc = labelColors[point.label] ?? { text: lesson.color, bg: 'white' };
                  return (
                    <div key={j} className="flex items-start gap-3">
                      <span
                        className="shrink-0 text-[11px] font-extrabold px-2.5 py-1 rounded-full mt-0.5 whitespace-nowrap"
                        style={{ color: lc.text, backgroundColor: lc.bg, border: `1px solid ${lc.text}20` }}
                      >
                        {point.label}
                      </span>
                      <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom accent */}
              <div className="h-1.5 w-full" style={{ backgroundColor: lesson.color, opacity: 0.35 }} />
            </div>
          ))}

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        09 / 16
      </div>

    </section>
  );
}
