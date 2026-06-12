import type { DailySnapshot } from "./types"
import { SERVICES } from "@/data/services"

export const SNAPSHOT: DailySnapshot = {
  date: "2026-06-12",
  insights: [
    "📢 LG U+가 이벤트 11건으로 3사 중 최다(SKT 2건의 5.5배) — 이달 7건 신규 추가하며 가장 공격적인 프로모션 전개 중",
    "⚽ KT는 월드컵·광화문 거리응원 등 시즌 이슈 활용 이벤트 4건 신규 추가(총 9건), 스포츠 마케팅 집중",
    "📌 SKT는 배너·이벤트 모두 변동 없음 — 3사 중 유일하게 이번 기간 업데이트 없어 이벤트 공백 상태",
  ],
  bannerAnalysis: {
    lgu: "변동 없음 — 듀얼넘버 온앤오프·벨링모아 여름·피싱/해킹 안심 배너 3종 동일",
    skt: "일부 변경 — 약속번호 배너 문구 변경(\"원하는 번호 추가\"→\"집에 두고 오셨나요\") 및 순서 조정(보험찾기 1번↔약속번호 2번). T올케어플러스6 유지",
    kt:  "변동 없음 — 아껴드림·데이터충전·My time plan·링투유 배너 4종 그대로 유지",
  },
  eventAnalysis: {
    lgu: "대폭 변경 — 버디5(~6/5)·통신심플 이벤트 종료. Simple사서함·전시회입장권·유튜브+구글AI Pro·로밍100개국·장기고객감사·원플원친구추천·일본로밍 7건 신규 추가. 총 11건으로 증가",
    skt: "변동 없음 — 고향사랑기부(~7.08)·T멤버십 신규 제휴(~12.31) 2건 유지",
    kt:  "4건 신규 — 2026 광화문광장 거리응원(6/8~6/25)·월드컵 온라인 프로모션(6/5~7/19)·VVIP 블루보틀 6월·6월 네이버페이 이벤트 신규 추가. 총 9건으로 증가",
  },
  vasAnalysis: {
    lgu: "통화/문자 4개(듀얼넘버·듀얼넘버온앤오프·통화가능안내·익시오)로 추천 상단 구성. 1~2위가 듀얼넘버 계열",
    skt: "디지털콘텐츠 4개(FLO·Wavve·무비와컬처·해외주식노트)로 콘텐츠 비중 최대. 1위는 AI통화(스마트 콜키퍼)",
    kt:  "보안/안심 무료 서비스 3개(번호도용차단·유심보호·결제안심통보)를 2~4위에 집중 배치. 추천 항목 8개로 3사 중 가장 적음",
  },
  banners: [
    // LG U+ (3) — 변동 없음
    {
      carrier: "lgu",
      title: "듀얼넘버 온앤오프 신규가입 이벤트",
      caption: "워라밸 지키고 커피 받기! · 6월 한정 100% 선물 증정",
      href: "https://www.lguplus.com/benefit-event/ongoing/82318",
      imgSrc: "https://www.lguplus.com/static/pc-contents/images/display/section_835/content_1544/Image38.png?20260602135128508",
      changed: false,
    },
    {
      carrier: "lgu",
      title: "벨링모아 여름을 부탁해!",
      caption: "가입하면 아이스커피 100% 증정",
      href: "https://www.lguplus.com/benefit-event/ongoing/82313",
      imgSrc: "https://www.lguplus.com/static/pc-contents/images/display/section_835/content_2023/Image38.png?20260601104459619",
      changed: false,
    },
    {
      carrier: "lgu",
      title: "피싱/해킹 안심 서비스",
      caption: "너겟 요금제 가입자 24개월 무료",
      href: "https://www.lguplus.com/mobile/plan/addon/addon-safe/LRZ1005178",
      imgSrc: "https://www.lguplus.com/static/pc-contents/images/display/section_835/content_1545/Image38.png?20250821170650406",
      changed: false,
    },
    // SKT (3) — 약속번호 배너 문구·순서 변경
    {
      carrier: "skt",
      title: "내게 맞는 휴대폰 보험 찾기",
      caption: "질문 3개만 답하면 끝",
      href: "https://www.tallcare.co.kr/#/intro/smart-search-process/tworld",
      imgSrc: "https://cdnw.tworld.co.kr/adminupload/pc/bnnr/12173/29574/1553400670.png",
      changed: true,
    },
    {
      carrier: "skt",
      title: "약속번호 — 집에 두고 오셨나요?",
      caption: "통화·문자를 바로 다른 번호로 연결",
      href: "https://www.tworld.co.kr/web/product/callplan/NA00001350",
      imgSrc: "https://cdnw.tworld.co.kr/adminupload/pc/bnnr/72199/4266/679663827.png",
      changed: true,
    },
    {
      carrier: "skt",
      title: "분실·파손 보상, 배터리 교체 지원",
      caption: "올인원 혜택 T 올케어플러스6",
      href: "https://www.tworld.co.kr/web/product/callplan/NA00009224",
      imgSrc: "https://cdnw.tworld.co.kr/adminupload/pc/bnnr/84611/1349/2102248724.jpg",
      changed: false,
    },
    // KT (4) — 변동 없음
    {
      carrier: "kt",
      title: "내 일상을 위한 생활혜택플랫폼",
      caption: "아껴드림으로 한번에 해결",
      href: "https://savedream.co.kr/?utm_source=kt_com_pc&utm_medium=display&utm_campaign=savedream",
      imgSrc: "https://product.kt.com/static/index/6003/web/category/banner/big/PC_1080x220_%EB%A6%AC%EC%8A%A4%ED%8A%B8%ED%95%98%EB%8B%A8%EB%B0%B0%EB%84%88_01_%EC%95%84%EA%BB%B4%EB%93%9C%EB%A6%BC_20250613103313.png",
      changed: false,
    },
    {
      carrier: "kt",
      title: "부족한 데이터 채우는 방법",
      caption: "KT만의 방법으로 데이터 충전",
      href: "https://product.kt.com/wDic/productDetail.do?ItemCode=1068",
      imgSrc: "https://product.kt.com/static/index/6003/web/category/banner/big/PC_1080x220_%EB%A6%AC%EC%8A%A4%ED%8A%B8%ED%95%98%EB%8B%A8%EB%B0%B0%EB%84%88_02_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%B6%A9%EC%A0%84_20250613103331.png",
      changed: false,
    },
    {
      carrier: "kt",
      title: "시간을 골라 데이터를 마음껏",
      caption: "My time plan · 3시간 무제한",
      href: "https://product.kt.com/wDic/productDetail.do?ItemCode=1041",
      imgSrc: "https://product.kt.com/static/index/6003/web/category/banner/big/PC_1080x220_%EB%A6%AC%EC%8A%A4%ED%8A%B8%ED%95%98%EB%8B%A8%EB%B0%B0%EB%84%88_03_My%20time%20plan_20250613103320.png",
      changed: false,
    },
    {
      carrier: "kt",
      title: "음악으로 나를 표현하자",
      caption: "링투유 · 통화연결음 설정",
      href: "https://product.kt.com/wDic/productDetail.do?ItemCode=62",
      imgSrc: "https://product.kt.com/static/index/6003/web/category/banner/big/PC_1080x220_%EB%A6%AC%EC%8A%A4%ED%8A%B8%ED%95%98%EB%8B%A8%EB%B0%B0%EB%84%88_04_%EB%A7%81%ED%88%AC%EC%9C%A0_20250613103325.png",
      changed: false,
    },
  ],
  events: [
    // LG U+ (11) — 버디5·통신심플 종료, 7건 신규 추가
    { carrier:"lgu", title:"6월 U+one 앱 출석체크 이벤트", badge:"유플러스 혜택", period:"2026-06-01 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82311", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260529-092503-235-dNn8rzKy.png", isNew:false },
    { carrier:"lgu", title:"[멤버십] 6월 멤버십 신규 가입 이벤트", badge:"멤버십 혜택", period:"2026-06-01 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82300", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260601-011223-769-y7jz4IIE.jpg", isNew:false },
    { carrier:"lgu", title:"Simple. 사서함 이벤트", badge:"유플러스 혜택", period:"2026-06-08 ~ 2026-06-26", href:"https://www.lguplus.com/benefit-event/ongoing/82309", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260605-060643-273-275yaKJ6.jpg", isNew:true },
    { carrier:"lgu", title:"S26 시리즈도 U+에서 심플하게", badge:"모바일 온라인 가입혜택", period:"2026-01-30 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82171", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/event/eh/20260602-043035-817-VyTrKH13.png", isNew:false },
    { carrier:"lgu", title:"모바일 요금만 내고, 인터넷도 쓰세요.", badge:"홈 온라인 가입혜택", period:"2026-06-01 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82302", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/event/eh/20260529-053247-970-49N4UfFO.png", isNew:false },
    { carrier:"lgu", title:"인터넷+IPTV 나에게 맞는 진짜 가입 혜택", badge:"홈 온라인 가입혜택", period:"2026-05-29 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/387", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/event/eh/20251231-040317-742-31XfX3PC.png", isNew:false },
    { carrier:"lgu", title:"전시회 입장권 무료 증정 이벤트", badge:"유플러스 혜택", period:"2026-06-11 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82342", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260611-050535-039-GLnvqaoe.png", isNew:true },
    { carrier:"lgu", title:"유튜브+구글 AI Pro 쿠폰 이벤트", badge:"유플러스 혜택", period:"2026-06-11 ~ 2026-07-19", href:"https://www.lguplus.com/benefit-event/ongoing/82341", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260610-045438-404-4Vdce8vT.jpg", isNew:true },
    { carrier:"lgu", title:"[로밍] 5G커버리지 100개국 달성 기념이벤트", badge:"유플러스 혜택", period:"2026-06-11 ~ 2026-07-14", href:"https://www.lguplus.com/benefit-event/ongoing/82332", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260608-110129-899-p3CV5ocS.jpg", isNew:true },
    { carrier:"lgu", title:"6월 U+ 장기고객 감사 이벤트", badge:"멤버십 혜택", period:"2026-06-08 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82331", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260605-012344-879-QQQcHUWX.jpg", isNew:true },
    { carrier:"lgu", title:"더운 여름 시원한 혜택! U+ 원플원 친구추천 이벤트", badge:"유플러스 혜택", period:"2026-06-08 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82323", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260605-044453-792-dGSVsTOR.png", isNew:true },
    // SKT (2) — 변동 없음
    { carrier:"skt", title:"고향사랑기부하면 15,000원 쿠폰 증정", badge:"멤버십", period:"2026-05-06 ~ 2026-07-08", href:"https://www.tworld.co.kr/web/benefit/event/detail/ing/TW000001913?GUBUN=start&SHOWGUBUN=thumbnail&index=0", imgSrc:"https://cdnw.tworld.co.kr/adminupload/poc/13352/7155/600075894.png", isNew:false },
    { carrier:"skt", title:"2026년 T 멤버십 신규 제휴사 소개", badge:"멤버십", period:"2026-01-09 ~ 2026-12-31", href:"https://www.tworld.co.kr/web/benefit/event/detail/ing/TW000001902?GUBUN=start&SHOWGUBUN=thumbnail&index=1", imgSrc:"https://cdnw.tworld.co.kr/adminupload/poc/17609/56474/88702075.png", isNew:false },
    // KT (9) — 4건 신규 추가
    { carrier:"kt", title:"2026 광화문광장 거리응원 사전 이벤트", badge:"기타", period:"2026-06-08 ~ 2026-06-25", href:"https://event.kt.com/html/event/ongoing_event_list.html", imgSrc:"https://event.kt.com/images/13880/open_01.jpg", isNew:true },
    { carrier:"kt", title:"2026 월드컵 온라인 프로모션", badge:"기타", period:"2026-06-05 ~ 2026-07-19", href:"https://event.kt.com/html/event/ongoing_event_list.html", imgSrc:"https://event.kt.com/images/13879/open_01.jpg", isNew:true },
    { carrier:"kt", title:"KT멤버십 VVIP 스페셜 혜택 6월 블루보틀", badge:"멤버십", period:"2026-06-02 ~ 2026-06-30", href:"https://event.kt.com/html/event/ongoing_event_list.html", imgSrc:"https://event.kt.com/images/13864/open_01.jpg", isNew:true },
    { carrier:"kt", title:"6월 네이버페이 간편결제 이벤트", badge:"기타", period:"2026-06-01 ~ 2026-06-30", href:"https://event.kt.com/html/event/ongoing_event_list.html", imgSrc:"https://event.kt.com/images/13877/open_01.jpg", isNew:true },
    { carrier:"kt", title:"KT멤버십 고객 보답 프로그램 6월 1차", badge:"멤버십", period:"2026-05-29 ~ 2026-06-15", href:"https://app.membership.kt.com/eventpage/evn127330507/customerRwd_web.html", imgSrc:"https://event.kt.com/images/13860/open_01.jpg", isNew:false },
    { carrier:"kt", title:"6월 컬처앤모어", badge:"멤버십", period:"2026-05-29 ~ 2026-06-30", href:"https://app.membership.kt.com/eventpage/evn796750304/cultureAndMore_web.html", imgSrc:"https://event.kt.com/images/13866/open_01.jpg", isNew:false },
    { carrier:"kt", title:"KT 구독 티빙 생활구독팩 출시 기념 프로모션", badge:"상품/서비스", period:"2026-05-26 ~ 2026-06-30", href:"https://ktpromotion.co.kr/event/tvinglife/index.asp", imgSrc:"https://event.kt.com/images/13862/open_01.jpg", isNew:false },
    { carrier:"kt", title:"로밍 데이터 50% 더!", badge:"상품/서비스", period:"2026-03-01 ~ 2026-08-31", href:"https://globalroaming.kt.com/static/event/26bnf/pc/main.html", imgSrc:"https://event.kt.com/images/13794/open_04.jpg", isNew:false },
    { carrier:"kt", title:"해외여행 간다면? 2만원 혜택이 쏟아진다!", badge:"상품/서비스", period:"2025-11-05 ~ 2026-11-05", href:"https://globalroaming.kt.com/static/event/npay/pc/main.html", imgSrc:"https://event.kt.com/images/13685/open_01.jpg", isNew:false },
  ],
  services: SERVICES,
}
