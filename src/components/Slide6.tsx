import React from 'react';

const facilityTypes = [
  { num: '1', label: '정기권 시설', examples: '헬스장, 사우나, 수영장', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '2', label: '타석제 시설', examples: '골프연습장', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '3', label: '좌석제 시설', examples: '독서실, 락커', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '4', label: '룸제 시설', examples: '스크린골프', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '5', label: '숙박 시설', examples: '게스트하우스', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '6', label: '대관 시설', examples: '연회장, 파티룸', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '7', label: '주문형 시설', examples: '카페테리아', color: '#3E61DC', bg: '#F8FAFC' },
  { num: '8', label: '일반 상품', examples: '세탁, 세차', color: '#3E61DC', bg: '#F8FAFC' },
];

const policyVars = [
  { icon: '⏱', label: '예약 단위', desc: '시간 / 일 / 월' },
  { icon: '🔢', label: '횟수 제한', desc: '일 / 주 / 월 단위' },
  { icon: '🌙', label: '연박 정책', desc: '가능 여부 + 최대 연박 일수' },
  { icon: '↩️', label: '취소 정책', desc: '가능 기한 + 환불율' },
  { icon: '📅', label: '예약 가능 기간', desc: '당일 예약 여부 + 최대 N일 전' },
];

export default function Slide6() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[28%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-[500px] h-[500px] bg-[#A5B4FC] blur-[150px] opacity-20 rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#f0f4ff] border border-[#00215F]/10 px-4 py-1.5 rounded-full mb-5">
            <span className="text-[20px] font-bold text-[#00215F] tracking-wider uppercase">Solution</span>
          </div>

          <h1 className="text-[36px] md:text-[42px] font-extrabold text-[#111] tracking-tight leading-tight mb-3">
            21개 시설 정책 분석 →{' '}
            <span className="text-[#3E61DC]">8개 유형으로 모듈화</span>
          </h1>
          <p className="text-[18px] text-gray-500 font-medium leading-relaxed">
            하드코딩된 21개 정책을 패턴 분석하여 Admin에서 설정 가능한 8개 유형 모듈로 재설계
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-6 pb-10 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full h-full flex flex-row gap-6">

          {/* Left Column: AS-IS → TO-BE */}
          <div className="w-[52%] flex flex-col gap-5">

            {/* AS-IS */}
            <div className="bg-[#FFF8F8] rounded-2xl p-5 border border-red-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-[12px] font-extrabold px-3 py-1 rounded-full tracking-widest">AS-IS</span>
                <span className="text-[15px] font-bold text-[#111]">21개 시설별 개별 하드코딩</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: '헬스장', policy: '월 5회, 당일 예약 불가' },
                  { name: '게스트하우스', policy: '월 1회, 연박 가능' },
                  { name: '스크린골프', policy: '당일 예약 가능' },
                  { name: '독서실', policy: '좌석별 기간 예약' },
                  { name: '사우나', policy: '월 8회 제한' },
                  { name: '수영장', policy: '시간당 예약' },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-red-100 rounded-xl px-3 py-2 shadow-sm">
                    <p className="text-[13px] font-extrabold text-[#111]">{f.name}</p>
                    <p className="text-[11px] text-gray-400 font-medium">{f.policy}</p>
                  </div>
                ))}
                <div className="bg-white border border-dashed border-red-200 rounded-xl px-3 py-2 flex items-center justify-center">
                  <span className="text-[12px] text-red-300 font-bold">+ 15개 시설 더...</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 bg-red-50 rounded-xl px-4 py-2.5 border border-red-100">
                <span className="text-red-500 text-[14px]">⚠️</span>
                <p className="text-[13px] text-red-600 font-bold">정책 변경 = 개발팀 투입 필수 / 신규 단지 도입 6개월 소요</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="flex flex-col items-center gap-1">
                <div className="bg-[#3E61DC] text-white text-[11px] font-bold px-3 py-1 rounded-full">패턴 분석 → 모듈화</div>
                <svg className="w-5 h-5 text-[#3E61DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            {/* TO-BE: 8 facility types grid */}
            <div className="bg-[#F0F4FF] rounded-2xl p-5 border border-indigo-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#3E61DC] text-white text-[12px] font-extrabold px-3 py-1 rounded-full tracking-widest">TO-BE</span>
                <span className="text-[15px] font-bold text-[#111]">8개 유형 패턴화</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {facilityTypes.map((t) => (
                  <div
                    key={t.num}
                    className="rounded-xl p-3 border flex flex-col gap-1 shadow-sm"
                    style={{ backgroundColor: t.bg, borderColor: t.color + '30' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black text-white"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.num}
                      </span>
                      <p className="text-[12px] font-extrabold" style={{ color: t.color }}>{t.label}</p>
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium leading-tight pl-[26px]">{t.examples}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Admin Policy Variables */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Section title */}
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-[#3E61DC] rounded-full" />
              <h3 className="text-[18px] font-extrabold text-[#111] tracking-tight">Admin 설정 가능한 정책 변수</h3>
            </div>

            {/* Policy variables list */}
            <div className="flex flex-col gap-3 flex-1">
              {policyVars.map((v, i) => (
                <div
                  key={i}
                  className="bg-[#fcfdff] rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center text-[20px] shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-[#111]">{v.label}</p>
                    <p className="text-[13px] text-gray-400 font-medium">{v.desc}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-[#f0f4ff] text-[#3E61DC] text-[11px] font-bold px-2.5 py-1 rounded-full border border-indigo-100">
                      가변 설정
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Result box */}
            <div className="bg-[#eef2ff]/70 rounded-2xl p-5 border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[60px] opacity-10">✅</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[15px] font-extrabold text-[#3E61DC] tracking-widest uppercase">Result</span>
              </div>
              <p className="text-[17px] text-[#111] font-bold leading-[1.6]">
                신규 단지 도입 시 개발 공수 없이 Admin 설정만으로<br />
                <strong className="text-indigo-700 underline decoration-2 underline-offset-4">21개 시설 정책을 2일 내 세팅 가능한 구조 확보</strong>
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        06 / 16
      </div>

    </section>
  );
}
