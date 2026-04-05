import React from 'react';

export default function Slide4() {
  const painPoints = [
    {
      id: "1",
      title: "ëª¨ë°”???ˆì•½?ë? ê³ ë ¤?˜ì? ?Šì? ?´ì˜ ?•ì±…",
      result: "? ì—°???´ì˜ ë°??€??ë¶ˆê?",
      details: [
        <React.Fragment key="1">
          "?¬ìŠ¤????5?? ê²ŒìŠ¤?¸í•˜?°ìŠ¤ ??1??ì²˜ëŸ¼<br /> ?œì„¤ë§ˆë‹¤ ?¤ë¥¸ ?´ìš© ?œí•œ??<strong className="text-[#111] font-bold">?˜ê¸°ë¡?ê´€ë¦?/strong>
        </React.Fragment>,
        <React.Fragment key="2">
          ëª¨ë°”?¼ì—?œëŠ” ?´ë? <strong className="text-[#111] font-bold">?˜ë“œì½”ë”©</strong>?¼ë¡œ êµ¬í˜„<br /> ???•ì±… ë³€ê²???<strong className="text-[#111] font-bold">ê°œë°œ?€ ?¬ì… ?„ìˆ˜</strong>
        </React.Fragment>
      ]
    },
    {
      id: "2",
      title: "?ˆì•½ ì±„ë„/?œì„¤ë³??„í™© ê´€ë¦?ë¶ˆê?",
      result: "? ê·œ ?¨ì? ë¹„ì¦ˆ?ˆìŠ¤ ?•ì¥ ë³‘ëª©",
      details: [
        <React.Fragment key="1">
          Admin, ?¤ì˜¤?¤í¬, ëª¨ë°”??APP 3ê°?ì±„ë„ ?™ì‹œ ?ˆì•½
        </React.Fragment>,
        <React.Fragment key="2">
          ??ì±„ë„?ì„œ ?ˆì•½?˜ë©´ ?¤ë¥¸ ì±„ë„???¤ì‹œê°?ë°˜ì˜ ??????<strong className="text-[#111] font-bold">ì¤‘ë³µ ?ˆì•½ ë°œìƒ</strong>
        </React.Fragment>,
        <React.Fragment key="3">
          ? ê·œ ?¨ì? ?„ì… ??21ê°??œì„¤ ?•ì±…???¼ì¼??ê°œë°œ <br />??<strong className="text-[#111] font-bold">?„ì… ê¸°ê°„ 6ê°œì›” ?Œìš”</strong>
        </React.Fragment>
      ]
    },
    {
      id: "3",
      title: "?´ìš©ê¶?êµ¬ë§¤/?ˆì•½ ?´ì›??,
      result: "?ˆì•½ ì±„ë„ ?´íƒˆ ë°?CS ??¦",
      details: [
        <React.Fragment key="1">
          ?¬ìš©?ëŠ” "?´ìš©ê¶?êµ¬ë§¤ ???œì„¤ ?ˆì•½" <strong className="text-[#111] font-bold">ì´?8?¨ê³„ ì§„í–‰</strong>
        </React.Fragment>,
        <React.Fragment key="2">
          ?´ìš©ê¶?êµ¬ë§¤, ?œì„¤ ?ˆì•½ ?„ë¡œ?¸ìŠ¤ ?´ì›?????¬ìš©?ê? "ê²°ì œ?ˆëŠ”???ˆì•½?????ë‹¤"ê³??¤í•´?˜ë©° <strong className="text-[#111] font-bold">VOC ë°œìƒ</strong>
        </React.Fragment>
      ]
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header Section (Light Theme) */}
      <div className="h-[38%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        {/* Subtle blue glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A5B4FC] blur-[150px] opacity-20 rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#f0f4ff] border border-[#00215F]/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[20px] font-bold text-[#00215F] tracking-wider uppercase">Background</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[40px] md:text-[46px] font-extrabold text-[#111] tracking-tight leading-tight mb-5">
            ?„ì¥ë³„ë¡œ ?ì´???¤í”„?¼ì¸ ?•ì±…??ëª¨ë°”?¼ì— ê·¸ë?ë¡??´ì‹?˜ì–´ <span className="text-[#3E61DC]">?œìŠ¤???•ì¥??ë³‘ëª© ë°œìƒ</span>
          </h1>

          {/* Sub Title */}
          <p className="text-[25px] text-gray-500 font-medium leading-[1.6] max-w-[1100px] tracking-tight">
            ?ˆë‹‰?€ ?¼ì„±ë¬¼ì‚°???´ì˜?˜ëŠ” ?„íŒŒ???…ì£¼ë¯??€???¼ì´?„ìŠ¤?€???µí•© ?Œë«?¼ì…?ˆë‹¤.<br />
            ê·¸ì¤‘ ì»¤ë??ˆí‹° ?œì„¤ ?ˆì•½ ?œë¹„?¤ëŠ” <strong className="text-[#111] font-bold border-b-2 border-red-200">?„ì²´ VOC??60% ?´ìƒ??ì°¨ì??˜ëŠ” ìµœë? ë¶ˆí¸ ?¬í•­</strong>?´ì—ˆ?µë‹ˆ??
          </p>
        </div>
      </div>

      {/* Bottom Content Section (Light Theme, ê½?ì±„ìš´ 3???ˆì´?„ì›ƒ) */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-10 pb-16 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full h-full flex flex-row divide-x divide-gray-100">

          {painPoints.map((point, idx) => (
            <div key={idx} className="flex-1 flex flex-col px-10 first:pl-0 last:pr-0">

              {/* Type Category / Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center border border-blue-50 shadow-sm shrink-0">
                  <span className="text-[18px] font-black text-[#3E61DC]">{point.id}</span>
                </div>
                <h3 className="text-[24px] font-extrabold text-[#111] tracking-tight leading-tight whitespace-pre-line">
                  {point.title}
                </h3>
              </div>

              {/* Body Details */}
              <ul className="space-y-6 flex-1 mb-8">
                {point.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-4 text-[22px] text-gray-600 leading-[1.65] font-medium tracking-tight">
                    <span className="mt-3 w-2 h-2 bg-[#3E61DC] flex-shrink-0 rounded-full opacity-60"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Pink Pain Point Box (Bottom Pinned) */}
              <div className="mt-auto bg-[#FFF0F4] rounded-2xl p-7 border border-[#FFE4EB] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[16px] font-extrabold text-[#FF2E63] tracking-widest uppercase">?š¨ Pain Point</span>
                </div>
                <p className="text-[24px] font-bold text-[#D9042B] leading-snug">
                  ??{point.result}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Absolute Bottom Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        04 / 16
      </div>

    </section>
  );
}
