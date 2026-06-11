import type { DailySnapshot } from "./types"
import { SERVICES } from "@/data/services"

export const SNAPSHOT: DailySnapshot = {
  date: "2026-06-04",
  bannerAnalysis: {
    lgu: "신규 1건 추가 — 듀얼넘버 온앤오프 신규가입 이벤트(6/2~6/30) 배너 추가. 2종→3종으로 증가",
    skt: "변동 없음 — 휴대폰보험 찾기·약속번호·T올케어플러스6 배너 3종 동일",
    kt:  "변동 없음 — 아껴드림·데이터충전·My time plan·링투유 배너 4종 그대로 유지",
  },
  eventAnalysis: {
    lgu: "변동 없음 — 6월 출석체크·멤버십 신규가입·통신심플·버디5·인터넷+IPTV·모바일요금 이벤트 6건 유지. 버디5 이벤트 6/5 만료 예정",
    skt: "변동 없음 — 고향사랑기부(~7.08)·T멤버십 신규 제휴(~12.31) 2건 유지. 3사 중 이벤트 수 최소",
    kt:  "변동 없음 — 6월 1차 고객보답·컬처앤모어 등 7건 유지",
  },
  vasAnalysis: {
    lgu: "통화/문자 4개(듀얼넘버·듀얼넘버온앤오프·통화가능안내·익시오)로 추천 상단 구성. 1~2위가 듀얼넘버 계열",
    skt: "디지털콘텐츠 4개(FLO·Wavve·무비와컬처·해외주식노트)로 콘텐츠 비중 최대. 1위는 AI통화(스마트 콜키퍼)",
    kt:  "보안/안심 무료 서비스 3개(번호도용차단·유심보호·결제안심통보)를 2~4위에 집중 배치. 추천 항목 8개로 3사 중 가장 적음",
  },
  banners: [
    // LG U+ (3)
    {
      carrier: "lgu",
      title: "듀얼넘버 온앤오프 신규가입 이벤트",
      caption: "워라밸 지키고 커피 받기! · 6월 한정 100% 선물 증정",
      href: "https://www.lguplus.com/benefit-event/ongoing/82318",
      imgSrc: "https://www.lguplus.com/static/pc-contents/images/display/section_835/content_1544/Image38.png?20260602135128508",
      changed: true,
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
    // SKT (3)
    {
      carrier: "skt",
      title: "원하는 번호 추가해 일과 사생활 분리",
      caption: "번호2개 · 워라밸 · 사생활보호",
      href: "https://www.tworld.co.kr/web/product/callplan/NA00004073",
      imgSrc: "https://cdnw.tworld.co.kr/adminupload/pc/bnnr/18301/62695/1054519715.png",
      changed: false,
    },
    {
      carrier: "skt",
      title: "내게 맞는 휴대폰 보험 찾기",
      caption: "질문 3개만 답하면 끝",
      href: "https://www.tallcare.co.kr/#/intro/smart-search-process/tworld",
      imgSrc: "https://cdnw.tworld.co.kr/adminupload/pc/bnnr/12173/29574/1553400670.png",
      changed: false,
    },
    {
      carrier: "skt",
      title: "분실·파손 보상, 배터리 교체 지원",
      caption: "올인원 혜택 T 올케어플러스6",
      href: "https://www.tworld.co.kr/web/product/callplan/NA00009224",
      imgSrc: "https://cdnw.tworld.co.kr/adminupload/pc/bnnr/84611/1349/2102248724.jpg",
      changed: false,
    },
    // KT (4)
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
    // LG U+ (6)
    { carrier:"lgu", title:"6월 U+one 앱 출석체크 이벤트", badge:"유플러스 혜택", period:"2026-06-01 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82311", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260529-092503-235-dNn8rzKy.png", isNew:false },
    { carrier:"lgu", title:"[멤버십] 6월 멤버십 신규 가입 이벤트", badge:"멤버십 혜택", period:"2026-06-01 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82300", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260601-011223-769-y7jz4IIE.jpg", isNew:false },
    { carrier:"lgu", title:"가장 쉬운 통신 요금으로, 통신을 심플하게", badge:"유플러스 혜택", period:"2026-06-01 ~ 2026-06-30", href:"https://www.lguplus.com/benefit-event/ongoing/82307", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/evet/eh/20260529-113803-853-60PnypsC.png", isNew:false },
    { carrier:"lgu", title:"기다리던 순간, 기다리던 버디5", badge:"모바일 온라인 가입혜택", period:"2026-05-08 ~ 2026-06-05", href:"https://www.lguplus.com/benefit-event/ongoing/82281", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/event/eh/20260520-094841-759-JkJhp40n.png", isNew:false },
    { carrier:"lgu", title:"인터넷+IPTV 나에게 맞는 진짜 가입 혜택", badge:"홈 온라인 가입혜택", period:"진행중", href:"https://www.lguplus.com/benefit-event/ongoing/387", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/event/eh/20251231-040317-742-31XfX3PC.png", isNew:false },
    { carrier:"lgu", title:"모바일 요금만 내고, 인터넷도 쓰세요.", badge:"홈 온라인 가입혜택", period:"진행중", href:"https://www.lguplus.com/benefit-event/ongoing/82302", imgSrc:"https://www.lguplus.com/static-evet/pc-contents/images/event/eh/20260529-053247-970-49N4UfFO.png", isNew:false },
    // SKT (2)
    { carrier:"skt", title:"고향사랑기부하면 15,000원 쿠폰 증정", badge:"멤버십", period:"2026-05-06 ~ 2026-07-08", href:"https://www.tworld.co.kr/web/benefit/event/detail/ing/TW000001913?GUBUN=start&SHOWGUBUN=thumbnail&index=0", imgSrc:"https://cdnw.tworld.co.kr/adminupload/poc/13352/7155/600075894.png", isNew:false },
    { carrier:"skt", title:"2026년 T 멤버십 신규 제휴사 소개", badge:"멤버십", period:"2026-01-09 ~ 2026-12-31", href:"https://www.tworld.co.kr/web/benefit/event/detail/ing/TW000001902?GUBUN=start&SHOWGUBUN=thumbnail&index=1", imgSrc:"https://cdnw.tworld.co.kr/adminupload/poc/17609/56474/88702075.png", isNew:false },
    // KT (7)
    { carrier:"kt", title:"KT멤버십 고객 보답 프로그램 6월 1차", badge:"멤버십", period:"2026-05-29 ~ 2026-06-15", href:"https://app.membership.kt.com/eventpage/evn127330507/customerRwd_web.html", imgSrc:"https://event.kt.com/images/13860/open_01.jpg", isNew:false },
    { carrier:"kt", title:"6월 컬처앤모어", badge:"멤버십", period:"2026-05-29 ~ 2026-06-30", href:"https://app.membership.kt.com/eventpage/evn796750304/cultureAndMore_web.html", imgSrc:"https://event.kt.com/images/13866/open_01.jpg", isNew:false },
    { carrier:"kt", title:"KT 구독 티빙 생활구독팩 출시 기념 프로모션", badge:"상품/서비스", period:"2026-05-26 ~ 2026-06-30", href:"https://ktpromotion.co.kr/event/tvinglife/index.asp", imgSrc:"https://event.kt.com/images/13862/open_01.jpg", isNew:false },
    { carrier:"kt", title:"로밍 데이터 50% 더!", badge:"상품/서비스", period:"2026-03-01 ~ 2026-08-31", href:"https://globalroaming.kt.com/static/event/26bnf/pc/main.html", imgSrc:"https://event.kt.com/images/13794/open_04.jpg", isNew:false },
    { carrier:"kt", title:"해외여행 간다면? 2만원 혜택이 쏟아진다!", badge:"상품/서비스", period:"2025-11-05 ~ 2026-11-05", href:"https://globalroaming.kt.com/static/event/npay/pc/main.html", imgSrc:"https://event.kt.com/images/13685/open_01.jpg", isNew:false },
    { carrier:"kt", title:"KT멤버십 쇼핑라운지 혜택 안내", badge:"멤버십", period:"2025-10-31 ~ 2026-12-31", href:"https://event.kt.com/html/event/ongoing_event_list.html", imgSrc:"https://event.kt.com/images/13860/open_01.jpg", isNew:false },
    { carrier:"kt", title:"KT 아껴드림 혜택 프로모션", badge:"상품/서비스", period:"2025-02-26 ~ 2026-12-31", href:"https://savedream.co.kr/?utm_source=kt_com_pc", imgSrc:"https://event.kt.com/images/13685/open_01.jpg", isNew:false },
  ],
  // 6/2와 동일한 부가서비스 목록 — 변동이 생기는 날의 스냅샷에서 자체 배열로 교체
  services: SERVICES,
}
