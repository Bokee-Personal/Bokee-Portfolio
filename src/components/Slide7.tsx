import React from 'react';

const asIsSteps = [
  { num: '1', label: '이용권\n구매' },
  { num: '2', label: '구매\n완료' },
  { num: '3', label: '시설\n상세' },
  { num: '4', label: '시설\n예약' },
  { num: '5', label: '이용권\n선택' },
  { num: '6', label: '좌석/타석\n룸 선택' },
  { num: '7', label: '예약\n확인' },
  { num: '8', label: '예약\n완료' },
];

const toBeSteps = [
  { num: '1', label: '이용권 선택' },
  { num: '2', label: '좌석/타석/룸 선택' },
  { num: '3', label: '예약 확인' },
  { num: '4', label: '예약 완료' },
];

const modules = [
  {
    icon: '🎫',
    title: '이용권 선택 모듈',
    desc: '정기권 / 일일권 / 무료권 통합 표시',
    tag: 'Step 1',
    color: '#3E61DC',
    bg: '#EEF2FF',
    border: '#C7D2FE',
  },
  {
    icon: '📍',
    title: '좌석/타석/룸 선택 모듈',
    desc: '시설 유형별 동적 렌더링',
    tag: 'Step 2',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    icon: '✅',
    title: '예약 확인 모듈',
    desc: '정책 변수 기반 예약 가능 여부 실시간 검증',
    tag: 'Step 3',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
  },
  {
    icon: '🔔',
    title: '예약 완료 모듈',
    desc: '취소 정책 안내 + 알림 설정',
    tag: 'Step 4',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
];

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function Slide7() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[27%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[600px] h-[400px] bg-[#A5B4FC] blur-[160px] opacity-15 rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[13px] font-bold text-gray-400 tracking-widest uppercase">Background</span>
            <span className="text-gray-300 text-[13px]">→</span>
            <span className="text-[13px] font-bold text-[#3E61DC] tracking-widest uppercase">Solution</span>
            <span className="text-gray-300 text-[13px]">→</span>
            <span className="text-[13px] font-bold text-gray-400 tracking-widest uppercase">Results</span>
          </div>

          <h1 className="text-[36px] md:text-[40px] font-extrabold text-[#111] tracking-tight leading-tight mb-2.5">
            예약 Flow{' '}
            <span className="text-[#3E61DC]">8단계 → 4단계 축소</span>
            {' '}&{' '}
            <span className="text-[#3E61DC]">UI 모듈화</span>
          </h1>
          <p className="text-[17px] text-gray-500 font-medium leading-relaxed">
            이용권 구매와 예약을 단일 Flow로 통합하고, 4개의 재사용 가능한 모듈 컴포넌트로 서비스 확장성 확보
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-5 pb-10 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full flex flex-col gap-5">

          {/* Flow Comparison Row */}
          <div className="flex flex-row gap-5">

            {/* AS-IS */}
            <div className="flex-1 bg-[#FFF8F8] rounded-2xl px-6 py-5 border border-red-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="bg-red-100 text-red-600 text-[12px] font-extrabold px-3 py-1 rounded-full tracking-widest">AS-IS</span>
                  <span className="text-[15px] font-extrabold text-[#111]">이용권 구매·예약 이원화 Flow</span>
                </div>
                <div className="flex items-center gap-1.5 bg-red-500 text-white text-[13px] font-black px-4 py-1.5 rounded-full shadow-sm shadow-red-200">
                  <span>8</span><span className="font-medium">Step</span>
                </div>
              </div>

              {/* Steps */}
              <div className="flex items-center flex-wrap gap-1">
                {asIsSteps.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center mb-1.5">
                        <span className="text-[11px] font-black text-red-500">{step.num}</span>
                      </div>
                      <div className="bg-white border border-red-100 rounded-xl px-3 py-2 text-center shadow-sm min-w-[68px]">
                        <p className="text-[12px] font-bold text-[#444] whitespace-pre-line leading-tight">{step.label}</p>
                      </div>
                    </div>
                    {i < asIsSteps.length - 1 && <ArrowIcon />}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-3 bg-red-50 rounded-xl px-4 py-2 border border-red-100 flex items-center gap-2">
                <span className="text-[13px]">⚠️</span>
                <p className="text-[12px] text-red-600 font-bold">이용권 구매 후 30% 사용자가 예약 화면으로 이동하지 않음 → VOC 폭증</p>
              </div>
            </div>

            {/* TO-BE */}
            <div className="flex-[0.7] bg-[#F0F4FF] rounded-2xl px-6 py-5 border border-indigo-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="bg-[#3E61DC] text-white text-[12px] font-extrabold px-3 py-1 rounded-full tracking-widest">TO-BE</span>
                  <span className="text-[15px] font-extrabold text-[#111]">단일 통합 Flow</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#3E61DC] text-white text-[13px] font-black px-4 py-1.5 rounded-full shadow-sm shadow-blue-200">
                  <span>4</span><span className="font-medium">Step</span>
                </div>
              </div>

              {/* Highlight box: 이용권 선택&구매 통합 */}
              <div className="border-2 border-dashed border-[#3E61DC]/50 rounded-xl px-4 py-2.5 mb-3 bg-white/60 text-center">
                <p className="text-[13px] font-extrabold text-[#3E61DC]">이용권 선택 &amp; 구매 Flow 통합</p>
              </div>

              <div className="flex items-center gap-1.5">
                {toBeSteps.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-7 h-7 rounded-full bg-[#3E61DC] flex items-center justify-center mb-1.5 shadow-sm shadow-blue-300">
                        <span className="text-[11px] font-black text-white">{step.num}</span>
                      </div>
                      <div className="bg-white border border-indigo-100 rounded-xl px-2 py-2 text-center shadow-sm w-full">
                        <p className="text-[12px] font-bold text-[#3E61DC] leading-tight">{step.label}</p>
                      </div>
                    </div>
                    {i < toBeSteps.length - 1 && <ArrowIcon />}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Modules Row */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-5 bg-[#3E61DC] rounded-full" />
              <h3 className="text-[16px] font-extrabold text-[#111] tracking-tight">모듈화 UI 컴포넌트 — 시설 유형별 동적 렌더링으로 재사용성 확보</h3>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {modules.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 border shadow-sm flex flex-col gap-3"
                  style={{ backgroundColor: m.bg, borderColor: m.border }}
                >
                  {/* Tag + Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] font-extrabold px-2.5 py-1 rounded-full"
                      style={{ color: m.color, backgroundColor: 'white', border: `1px solid ${m.border}` }}
                    >
                      {m.tag}
                    </span>
                    <span className="text-[24px]">{m.icon}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <p className="text-[14px] font-extrabold text-[#111] leading-tight mb-1">{m.title}</p>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="mt-auto h-1 rounded-full opacity-40"
                    style={{ backgroundColor: m.color }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Result Strip */}
          <div className="bg-[#eef2ff]/70 rounded-2xl px-6 py-4 border border-indigo-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[15px] font-extrabold text-[#3E61DC] tracking-widest uppercase">Result</span>
              <div className="w-px h-5 bg-indigo-200" />
              <p className="text-[16px] text-[#111] font-bold">
                예약 완료율{' '}
                <strong className="text-indigo-700 underline decoration-2 underline-offset-4">68% → 89% 증가</strong>
                <span className="text-[13px] text-gray-400 font-medium ml-2">(런칭 후 3개월 기준)</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5">단계 감소</p>
                <p className="text-[20px] font-black text-[#3E61DC]">-50%</p>
              </div>
              <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5">예약 완료율</p>
                <p className="text-[20px] font-black text-[#059669]">+21%p</p>
              </div>
              <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                <p className="text-[11px] text-gray-400 font-bold mb-0.5">재사용 모듈</p>
                <p className="text-[20px] font-black text-[#D97706]">4개</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        07 / 16
      </div>

    </section>
  );
}
