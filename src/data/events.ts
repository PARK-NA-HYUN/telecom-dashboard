import type { CarrierId } from "@/lib/carriers"

export type TelecomEvent = {
  carrier: CarrierId
  title: string
  badge: string
  period: string
  href: string
  imgSrc: string
  isNew: boolean
}

export const EVENTS: TelecomEvent[] = [
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
]
