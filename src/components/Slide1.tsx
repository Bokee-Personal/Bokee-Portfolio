export default function Slide1() {
  return (
    <section className="w-full h-screen flex flex-col justify-between p-8 md:p-16 snap-start relative bg-[#f8faff] overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -right-20 top-1/4 w-[600px] h-[600px] bg-[#dbe8ff] blur-[140px] opacity-60 rounded-full z-0"></div>


      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center max-w-[1526px] mx-auto w-full z-10 -mt-10">
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-medium text-[#333] mb-4 tracking-tight">
            고객 데이터로 문제를 정의하고,<br /> AI 기반 빠른 실험으로 경험을 밀도있게 쌓이다
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#111] leading-[1.15] mb-6 tracking-tight">
            AI Native Product Owner 금보경 입니다
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium opacity-80">
            데이터와 AI로 비즈니스 유효성을 가장 빠르게 검증하고 증명합니다
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Card 1 */}
          <div className="bg-white border-[1px] border-gray-100 rounded-[24px] p-8 shadow-[0_10px_30px_rgba(200,210,240,0.1)] flex flex-col items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(200,210,240,0.15)]">
            <h3 className="font-bold text-2xl mb-4 text-[#111]">고객 경험 설계</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              예약 정책 설계 및 정책 모듈화 <br />
              예약 단계 축소(8단계→4단계) <br />
              VOC 60% → 0% 감소 성과 창출
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-[1px] border-gray-100 rounded-[24px] p-8 shadow-[0_10px_30px_rgba(200,210,240,0.1)] flex flex-col items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(200,210,240,0.15)]">
            <h3 className="font-bold text-2xl mb-4 text-[#111]">데이터 기반 실험/AI 프로덕트 디핑</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              실시간 데이터 기반 A/B 테스트 리딩<br />
              전환율 44% 증가 달성<br />
              POC→Validation→Scale-up 사이클 관리
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-[1px] border-gray-100 rounded-[24px] p-8 shadow-[0_10px_30px_rgba(200,210,240,0.1)] flex flex-col items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(200,210,240,0.15)]">
            <h3 className="font-bold text-2xl mb-4 text-[#111]">0 to 1 Product Lifecycle Owner</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              신규 플랫폼 홈닉 APP 0→1 런칭 <br />
              정보구조 최적화로 초기 세션 리드 70% 달성<br />
              런칭 후 3개월 만 3배 성장 평점 유지
            </p>
          </div>
        </div>

        {/* Experience Tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-3 mt-12">
          {['0 to 1 서비스 런칭', 'B2B2C 서비스 운영/개선', '헬스 서비스 기획', '커머스 시간관리 BO 개선', '오프라인 커머스 CS리딩'].map((tag, i) => (
            <div key={i} className="px-6 py-2.5 rounded-full bg-white shadow-sm text-[#111] text-sm font-bold">
              {tag}
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
