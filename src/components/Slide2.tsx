export default function Slide2() {
  const profileData = [
    { label: 'Name', value: 'Í∏àÎ≥¥Í≤? },
    { label: 'Strong', value: '#?∞Ïù¥?∞Í∏∞Î∞?Í∞Ä?§Í?Ï¶?#Í≥†Í∞ù?¨Ï†ï_ÏµúÏ†Å??#B2B2C_?åÎû´?ºÏÑ§Í≥?Îπ†Î•∏?§Ìóò_Î∞òÎ≥µÍ∞úÏÑ†' },
    { label: 'Position', value: 'Product Owner (PO) / ?úÎπÑ??Í∏∞Ìöç' },
    { label: 'Total Experience', value: '4??(3??2Í∞úÏõî)' },
    {
      label: 'Core Competencies',
      value: [
        '1) Í≥†Í∞ù ?¨Ï†ï(CX) ?§Í≥Ñ Î∞??àÏïΩ ?úÎπÑ???ïÏ±Ö Íµ¨Ï°∞??,
        '2) Í∞Ä??Í∏∞Î∞ò A/B ?åÏä§??Î∞??∞Ïù¥??Í∏∞Î∞ò ?ºÎÑê ÏµúÏ†Å??,
        '3) B2B2C ?åÎû´??0 to 1 ?§Í≥Ñ Î∞??ïÏ±Ö Î™®Îìà??,
        '4) ?†ÏÇ¨??PoC Ï¥ùÍ¥Ñ Î∞?ÎπÑÏ¶à?àÏä§ Í≤ÄÏ¶?(GEO ??',
        '5) AI(AX) Í∏∞Î∞ò Í∏∞Ìöç ?åÌÅ¨?åÎ°ú???ÅÏã†'
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
                      <p className="text-[19px]">4??/p>
                      <span className="text-[15px] text-gray-400 font-medium">(Product Owner / ?úÎπÑ??Í∏∞Ìöç 3??2Í∞úÏõî)</span>
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
                    <span className="text-3xl">??/span>
                  </div>
                  <span className="absolute -top-2 -left-2 bg-[#3b82f6] text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white">AI</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#333] text-[17px] mb-2 text-left">Google Antigravity / Claude Code</h4>
                  <p className="text-[15.5px] text-gray-500 font-medium leading-relaxed max-w-[500px] text-left">
                    ?êÏó∞???ÑÎ°¨?ÑÌä∏Î•??úÏö©??Í∏∞Ìöç ?òÎèÑÎ•?Ï¶âÍ∞Å?ÅÏù∏ ?∏ÌÑ∞?ôÌã∞Î∏??ÑÎ°ú?†Ì??ÖÏúºÎ°?Íµ¨ÌòÑ?òÏó¨, Í∞úÎ∞ú ??Í∞Ä??Í≤ÄÏ¶??¨Ïù¥?¥ÏùÑ ?çÍ∏∞?ÅÏúºÎ°??®Ï∂ï?©Îãà??
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
                      <span className="text-3xl">?ìä</span>
                    </div>
                    <span className="absolute -top-2 -left-2 bg-[#3b82f6] text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white">AI</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333] text-[17px] mb-2 text-left">Google Colab</h4>
                    <p className="text-[15.5px] text-gray-500 font-medium leading-relaxed max-w-[500px] text-left">
                      ?êÏó∞??ÏßÄ?úÏ? Python???úÏö©?òÏó¨ ?†Ï? ?âÎèô ?∞Ïù¥?∞Î? Î∂ÑÏÑù?òÍ≥† ?úÍ∞Å?îÌïò??ÎπÑÏ¶à?àÏä§ ?∏ÏÇ¨?¥Ìä∏Î•??ÑÏ∂ú?©Îãà??
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
                  {['?é®', '?ìù', '?èÉ', '?ìÇ'].map((ico, i) => (
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
                  {['?í¨', '?ìß'].map((ico, i) => (
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
