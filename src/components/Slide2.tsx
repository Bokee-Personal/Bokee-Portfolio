import React from 'react';

export default function Slide2() {
  const profileData = [
    { label: 'Name', value: '금보경' },
    { label: 'Strong', value: '#데이터기반의사결정 #고객경험_최적화 #B2B2C_플랫폼설계 #빠른실험_반복개선' },
    { label: 'Position', value: 'Product Owner (PO) / 서비스 기획' },
    { label: 'Total Experience', value: '4년 (3년 2개월)' },
    {
      label: 'Core Competencies',
      value: [
        '1) 고객 경험(CX) 설계 및 전략 방향 수립 구조화',
        '2) 가설 기반 A/B 테스트 및 데이터 기반 채널 최적화',
        '3) B2B2C 플랫폼 0 to 1 설계 및 정책 모듈화',
        '4) 자사 PoC 총괄 및 비즈니스 검증 (GEO)',
        '5) AI(AX) 기반 기획 워크플로우 혁신'
      ]
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center p-8 md:p-16 snap-start relative bg-[#f8faff] overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-[#dbe8ff] blur-[140px] opacity-40 rounded-full z-0"></div>

      {/* Page Title */}
      <div className="flex justify-center mb-12 z-10">
        <h1 className="text-[44px] font-extrabold tracking-tight text-[#111]">Profile</h1>
      </div>

      <div className="max-w-[1526px] mx-auto w-full flex flex-col md:flex-row gap-16 z-10 items-center">
        {/* Left: Profile Info */}
        <div className="flex-1 flex flex-col justify-start">
          <div className="space-y-0 text-[17.5px]">
            {profileData.map((item, idx) => (
              <div key={idx} className="border-b border-gray-200/60 py-6 grid grid-cols-[180px_1fr] gap-6 items-start text-left">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-sm pt-1">{item.label}</span>
                <div className="text-[#111]">
                  {item.label === 'Total Experience' ? (
                    <div className="font-bold leading-relaxed">
                      <p className="text-[19px]">4년</p>
                      <span className="text-[15px] text-gray-400 font-medium">(Product Owner / 서비스 기획 3년 2개월)</span>
                    </div>
                  ) : Array.isArray(item.value) ? (
                    <div className="space-y-3">
                      {item.value.map((v, i) => (
                        <p key={i} className="font-bold leading-relaxed">{v}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="font-bold leading-relaxed">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Skills Section */}
        <div className="flex-1 flex flex-col pl-6 border-l border-gray-100">
          <h2 className="text-[30px] font-black text-gray-300 mb-10 uppercase tracking-widest text-left">Skills</h2>

          <div className="space-y-10 text-left">
            {/* A. Vibe Design/Coding */}
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-[#111] flex items-center gap-3">
                <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                AI-Native Prototyping (Vibe Coding)
              </h3>
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.05)] flex items-center justify-center border border-gray-100 overflow-hidden text-left">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <span className="absolute -top-2 -left-2 bg-[#3b82f6] text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white">AI</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#333] text-[17px] mb-2 text-left">Google Antigravity / Claude Code</h4>
                  <p className="text-[15.5px] text-gray-500 font-medium leading-relaxed max-w-[500px] text-left">
                    자연어 프롬프트를 활용해 기획 의도를 즉각적인 인터랙티브 프로토타입으로 구현하여, 개발 전 가설 검증 사이클을 획기적으로 단축합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* B. Data Analysis */}
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-[#111] flex items-center gap-3">
                <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                Data Analysis & Automation
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.05)] flex items-center justify-center border border-gray-100 overflow-hidden text-left">
                      <span className="text-3xl">📊</span>
                    </div>
                    <span className="absolute -top-2 -left-2 bg-[#3b82f6] text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white">AI</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333] text-[17px] mb-2 text-left">Google Colab</h4>
                    <p className="text-[15.5px] text-gray-500 font-medium leading-relaxed max-w-[500px] text-left">
                      자연어 지시로 Python을 사용하여 실데이터 자동 파이프라인 분석하고 시각화하여 비즈니스 인사이트를 도출합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Management & Communication */}
            <div className="flex flex-col md:flex-row gap-16 pt-6">
              <div>
                <h3 className="text-[13px] font-black text-gray-400 mb-6 uppercase tracking-[0.2em] text-left">Management</h3>
                <div className="flex gap-5">
                  {['🎨', '📝', '🎫', '📚'].map((ico, i) => (
                    <div key={i} className="group relative">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100 text-xl hover:translate-y-[-4px] transition-transform cursor-default text-left">
                        {ico}
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {['Figma', 'Notion', 'Jira', 'Confluence'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pl-6 border-l border-gray-100 px-10">
                <h3 className="text-[13px] font-black text-gray-400 mb-6 uppercase tracking-[0.2em] text-left">Communication</h3>
                <div className="flex gap-5">
                  {['💬', '📧'].map((ico, i) => (
                    <div key={i} className="group relative">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100 text-xl hover:translate-y-[-4px] transition-transform cursor-default text-left">
                        {ico}
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {['Slack', 'G-Suite'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 text-gray-400 font-medium text-[15px]">
        02 / 16
      </div>
    </section>
  );
}
