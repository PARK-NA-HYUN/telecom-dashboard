import type { CarrierId } from "@/lib/carriers"

export type TabKey = "recommend" | "phonecare" | "digital" | "call" | "ring"
export type Category = "통화/문자" | "디지털콘텐츠" | "휴대폰케어" | "통화연결음" | "보안" | "데이터" | "기타"

export type Service = {
  carrier: CarrierId
  tab: TabKey
  rank: number
  name: string
  price: string
  desc: string
  href: string
  category: Category
}

export const TAB_LABELS: Record<TabKey, string> = {
  recommend: "추천",
  phonecare: "휴대폰케어",
  digital:   "디지털콘텐츠",
  call:      "통화/문자",
  ring:      "통화연결음",
}

export const TAB_ICONS: Record<TabKey, string> = {
  recommend: "⭐",
  phonecare: "📱",
  digital:   "🎵",
  call:      "📞",
  ring:      "🎶",
}

export const TAB_HREFS: Record<TabKey, Record<CarrierId, string>> = {
  recommend: {
    lgu: "https://www.lguplus.com/mobile/plan/addon/addon-all",
    skt: "https://www.tworld.co.kr/web/product/addon/submain",
    kt:  "https://product.kt.com/wDic/index.do?CateCode=6003",
  },
  phonecare: {
    lgu: "https://www.lguplus.com/mobile/plan/addon/addon-phonecare",
    skt: "https://www.tworld.co.kr/web/product/addon/list?idxCtgCd=F01200&searchFltIds=F01233",
    kt:  "https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=145",
  },
  digital: {
    lgu: "https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent",
    skt: "https://www.tworld.co.kr/web/product/addon/list?idxCtgCd=F01200&searchFltIds=F01235",
    kt:  "https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=141",
  },
  call: {
    lgu: "https://www.lguplus.com/mobile/plan/addon/addon-call-msg",
    skt: "https://www.tworld.co.kr/web/product/addon/list?idxCtgCd=F01200&searchFltIds=F01234",
    kt:  "https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142",
  },
  ring: {
    lgu: "https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes",
    skt: "https://www.tworld.co.kr/web/product/addon/list?idxCtgCd=F01200&searchFltIds=F01234",
    kt:  "https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142",
  },
}

export const SERVICES: Service[] = [
  // ── 추천 ──────────────────────────────────────────────────────────────────
  { carrier:"lgu", tab:"recommend", rank:1,  name:"듀얼넘버",                     price:"월 3,300원",  category:"통화/문자",    desc:"하나의 폰으로 사생활을 보호하는 나의 두 번째 번호",                    href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ0000264" },
  { carrier:"lgu", tab:"recommend", rank:2,  name:"통화가능안내",                   price:"월 550원",    category:"통화/문자",    desc:"내가 전화한 상대가 하던 통화가 끝나면 즉시 알려주는 메시지",            href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ0002941" },
  { carrier:"lgu", tab:"recommend", rank:3,  name:"구글 원(Google One)",           price:"월 2,400원~", category:"디지털콘텐츠", desc:"한 번의 구독으로 Gemini와 저장공간을 함께 누리는 서비스",                href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent/Z020251101" },
  { carrier:"lgu", tab:"recommend", rank:4,  name:"폰교체 패스 (휴대폰보험)",        price:"월 정액",     category:"휴대폰케어",   desc:"파손 시 수리 또는 교체 중 원하는 방식 선택",                          href:"https://www.lguplus.com/mobile/plan/addon/addon-phonecare/Z020240121" },
  { carrier:"lgu", tab:"recommend", rank:5,  name:"폰 안심패스 (휴대폰보험)",        price:"월 정액",     category:"휴대폰케어",   desc:"분실·도난·파손·침수 시 단말기 교체 또는 수리비 지원",                 href:"https://www.lguplus.com/mobile/plan/addon/addon-phonecare/Z020250801" },
  { carrier:"lgu", tab:"recommend", rank:6,  name:"벨링모아(벨소리·통화연결음·MP3)", price:"월 2,200원~", category:"통화연결음",   desc:"벨소리, 통화연결음, MP3까지 최대 40% 알뜰하게 이용",                  href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/Z20250312" },
  { carrier:"lgu", tab:"recommend", rank:7,  name:"듀얼넘버 온앤오프",               price:"월 3,850원",  category:"통화/문자",    desc:"하나의 폰으로 필요할 때만 켜고 끄는 두 번째 번호",                     href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ1000655" },
  { carrier:"lgu", tab:"recommend", rank:8,  name:"V컬러링 음악감상 플러스",          price:"월 8,800원",  category:"디지털콘텐츠", desc:"V컬러링과 지니뮤직을 함께 할인된 금액으로 이용",                       href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent/LRZ1005266" },
  { carrier:"lgu", tab:"recommend", rank:9,  name:"V컬러링",                       price:"월 3,300원",  category:"통화연결음",   desc:"보이는 동영상 통화연결음으로 나를 표현하는 서비스",                     href:"https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes/LRZ0002150" },
  { carrier:"lgu", tab:"recommend", rank:10, name:"익시오 (ixi-O)",                price:"무료",        category:"통화/문자",    desc:"AI 통화 녹음·요약, 스팸 차단, 실시간 보이스피싱 탐지",                href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ1002380" },

  { carrier:"skt", tab:"recommend", rank:1,  name:"스마트 콜키퍼",                  price:"월 990원",    category:"통화/문자",    desc:"AI로 똑똑해진 소리샘과 매너있는 콜키퍼의 만남",                        href:"https://www.tworld.co.kr/web/product/callplan/NA00009517" },
  { carrier:"skt", tab:"recommend", rank:2,  name:"V 컬러링",                      price:"월 3,300원",  category:"통화연결음",   desc:"나를 더 다채롭게 표현하는 새로운 영상 컬러링 서비스",                  href:"https://www.tworld.co.kr/web/product/callplan/NA00007017" },
  { carrier:"skt", tab:"recommend", rank:3,  name:"FLO 앤 데이터",                 price:"월 7,900원",  category:"디지털콘텐츠", desc:"매일 내 취향에 맞는 음악 FLO, 데이터 걱정없이 이용",                   href:"https://www.tworld.co.kr/web/product/callplan/NA00006520" },
  { carrier:"skt", tab:"recommend", rank:4,  name:"Wavve 앤 데이터",               price:"월 9,900원",  category:"디지털콘텐츠", desc:"드라마/예능/영화/해외시리즈 30만편을 데이터 걱정없이",                 href:"https://www.tworld.co.kr/web/product/callplan/NA00006577" },
  { carrier:"skt", tab:"recommend", rank:5,  name:"가족폰나눠쓰기(나눔)",            price:"무료",        category:"기타",        desc:"자녀에게 스마트폰을 물려주신 부모님께 드리는 데이터·가족로밍 혜택",      href:"https://www.tworld.co.kr/web/product/callplan/NC00000227" },
  { carrier:"skt", tab:"recommend", rank:6,  name:"휴대폰 결제 멤버십 플래티넘",     price:"월 9,900원",  category:"기타",        desc:"안전하고 편리한 휴대폰 결제 혜택, 플래티넘으로 한 단계 높이는 서비스", href:"https://www.tworld.co.kr/web/product/callplan/NA00009764" },
  { carrier:"skt", tab:"recommend", rank:7,  name:"무비와컬처",                     price:"월 4,290원",  category:"디지털콘텐츠", desc:"다양한 장르의 영화 무제한 스트리밍 + 문화 정보 제공",                  href:"https://www.tworld.co.kr/web/product/callplan/NA00006688" },
  { carrier:"skt", tab:"recommend", rank:8,  name:"해외주식노트",                    price:"월 5,500원",  category:"디지털콘텐츠", desc:"미국 주식 AI 예측·종목 추천 분석 서비스",                             href:"https://www.tworld.co.kr/web/product/callplan/NC00000230" },
  { carrier:"skt", tab:"recommend", rank:9,  name:"번호도용문자차단",                 price:"무료",        category:"보안",        desc:"웹에서 발송되는 스팸·스미싱문자에서 이동전화번호 악용 방지",           href:"https://www.tworld.co.kr/web/product/callplan/NA00004406" },
  { carrier:"skt", tab:"recommend", rank:10, name:"T 올케어+6 고급(온라인)",         price:"월 9,000원",  category:"휴대폰케어",   desc:"100만원 초과 휴대폰의 분실/파손 보험 및 프리미엄 서비스",              href:"https://www.tworld.co.kr/web/product/callplan/NA00009224" },

  { carrier:"kt",  tab:"recommend", rank:1,  name:"티빙 생활구독팩",                price:"월 9,500원~", category:"디지털콘텐츠", desc:"tvN, JTBC, Mnet 등 실시간 채널과 최신 인기 프로그램, 생활 혜택 패키지", href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1669" },
  { carrier:"kt",  tab:"recommend", rank:2,  name:"(안심) 번호도용문자 차단서비스",   price:"무료",        category:"보안",        desc:"번호도용 문자발신 자동차단으로 안전성 강화",                            href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1047" },
  { carrier:"kt",  tab:"recommend", rank:3,  name:"(안심) 유심보호서비스",           price:"무료",        category:"보안",        desc:"유심 이동 제한으로 부정사용 방지",                                     href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1645" },
  { carrier:"kt",  tab:"recommend", rank:4,  name:"휴대폰결제 안심통보 서비스",      price:"무료",        category:"보안",        desc:"과도요금 발생 예방 및 문자 알림 서비스",                               href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1264" },
  { carrier:"kt",  tab:"recommend", rank:5,  name:"내 마음대로 2시간 데이터 프리",   price:"월 2,900원",  category:"데이터",      desc:"원하는 시간에 매일 2시간 데이터 무제한 이용",                          href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1650" },
  { carrier:"kt",  tab:"recommend", rank:6,  name:"LTE 데이터충전",                price:"1,980원~",    category:"데이터",      desc:"LTE 요금제 전용, 멤버십 80% 할인, 월 최대 3회 충전",                   href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1068" },
  { carrier:"kt",  tab:"recommend", rank:7,  name:"KT 365 폰케어",                price:"월 5,900원~", category:"휴대폰케어",   desc:"휴대폰과 2nd 디바이스 파손 보장, 피싱해킹 보장보험 제공",             href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1604" },
  { carrier:"kt",  tab:"recommend", rank:8,  name:"필수팩 L",                     price:"월 9,900원",  category:"통화/문자",    desc:"무제한 음악 스트리밍, 전자책, 웹소설/웹툰, 통화연결음, 듀얼넘버",      href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1544" },

  // ── 휴대폰케어 ───────────────────────────────────────────────────────────
  { carrier:"lgu", tab:"phonecare", rank:1, name:"폰교체 패스 (휴대폰보험)",   price:"월 정액",     category:"휴대폰케어", desc:"파손 시 수리 또는 교체 선택 가능한 폰케어 서비스",      href:"https://www.lguplus.com/mobile/plan/addon/addon-phonecare/Z020240121" },
  { carrier:"lgu", tab:"phonecare", rank:2, name:"폰 안심패스 (휴대폰보험)",  price:"월 정액",     category:"휴대폰케어", desc:"분실·도난·파손·침수 시 단말기 교체 또는 수리비 지원",   href:"https://www.lguplus.com/mobile/plan/addon/addon-phonecare/Z020250801" },
  { carrier:"lgu", tab:"phonecare", rank:3, name:"폰교체 슬림",               price:"월 정액",     category:"휴대폰케어", desc:"언제 어디서나 원하는 휴대폰으로 교체할 수 있는 서비스",  href:"https://www.lguplus.com/mobile/plan/addon/addon-phonecare" },
  { carrier:"skt", tab:"phonecare", rank:1, name:"파손6 i파손(온라인)",       price:"월 4,100원",  category:"휴대폰케어", desc:"아이폰 파손 전용 보험 (분실 제외)",                      href:"https://www.tworld.co.kr/web/product/callplan/NA00009285" },
  { carrier:"skt", tab:"phonecare", rank:2, name:"분실파손6 i일반(온라인)",    price:"월 5,400원",  category:"휴대폰케어", desc:"100만원 이하 아이폰 분실·파손 보험",                     href:"https://www.tworld.co.kr/web/product/callplan/NA00009280" },
  { carrier:"skt", tab:"phonecare", rank:3, name:"분실파손6 i고급(온라인)",    price:"월 7,400원",  category:"휴대폰케어", desc:"150만원 초과 아이폰 분실·파손 보험",                     href:"https://www.tworld.co.kr/web/product/callplan/NA00009275" },
  { carrier:"skt", tab:"phonecare", rank:4, name:"파손6 파손(온라인)",        price:"월 3,400원",  category:"휴대폰케어", desc:"안드로이드 파손 전용 보험 (분실 제외)",                   href:"https://www.tworld.co.kr/web/product/callplan/NA00009295" },
  { carrier:"skt", tab:"phonecare", rank:5, name:"파손6 파손F(온라인)",       price:"월 7,700원",  category:"휴대폰케어", desc:"갤럭시Z 폴드/플립 파손 전용 보험",                        href:"https://www.tworld.co.kr/web/product/callplan/NA00009290" },
  { carrier:"kt",  tab:"phonecare", rank:1, name:"KT 365 폰케어",            price:"월 5,900원~", category:"휴대폰케어", desc:"파손 보장 + 피싱해킹 보장보험 + 폰교체·안심포인트",      href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1604" },
  { carrier:"kt",  tab:"phonecare", rank:2, name:"KT 245 폰체인지",          price:"월 9,900원",  category:"휴대폰케어", desc:"2년 사용 후 반납 시 최대 50% 보장 + 폰교체 1회",         href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=145" },
  { carrier:"kt",  tab:"phonecare", rank:3, name:"갤럭시 프리미엄 Y 구독",    price:"월 1,000원~", category:"휴대폰케어", desc:"부담없이 2년 사용 후 반납, 이용료만 지불",                href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=145" },
  { carrier:"kt",  tab:"phonecare", rank:4, name:"갤럭시 S23 FE 구독",      price:"월 2,000원~", category:"휴대폰케어", desc:"갤럭시 S23 FE 구독형 서비스",                            href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=145" },
  { carrier:"kt",  tab:"phonecare", rank:5, name:"KT 폰케어 라이트",         price:"월 정액",     category:"휴대폰케어", desc:"경량형 휴대폰 케어 서비스로 기본적인 파손 보장",          href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=145" },

  // ── 디지털콘텐츠 ─────────────────────────────────────────────────────────
  { carrier:"lgu", tab:"digital", rank:1, name:"구글 원(Google One)",       price:"월 2,400원~", category:"디지털콘텐츠", desc:"한 번의 구독으로 Gemini와 저장공간 함께 이용",                href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:2, name:"지니뮤직 마음껏 듣기",       price:"월 9,600원",  category:"디지털콘텐츠", desc:"모든 디바이스에서 지니뮤직, 앱에서 데이터 무료",             href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:3, name:"교보문고 sam + 구글 원",    price:"월 16,500원", category:"디지털콘텐츠", desc:"교보문고 전자책 + 구글 클라우드 저장공간 통합",              href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:4, name:"모아진 (무제한 매거진)",     price:"특정 요금제", category:"디지털콘텐츠", desc:"전 세계 매거진 20만여 권을 무제한으로 볼 수 있는 플랫폼",    href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:5, name:"유튜브 프리미엄",            price:"월 정액",     category:"디지털콘텐츠", desc:"통신료와 함께 결제하고 편리하게 이용할 수 있는 유튜브 프리미엄", href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:6, name:"티빙 스탠다드",              price:"월 13,500원", category:"디지털콘텐츠", desc:"tvN, JTBC, Mnet 등의 최신 방송, 스포츠, 공연, 애니메이션",  href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:7, name:"티빙 프리미엄",              price:"월 17,000원", category:"디지털콘텐츠", desc:"Apple TV+ 콘텐츠를 포함한 프리미엄 OTT 서비스",             href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"lgu", tab:"digital", rank:8, name:"모두의할인팩",                price:"월 11,000원", category:"디지털콘텐츠", desc:"OTT부터 영화, 방송, 월정액까지 다양한 미디어상품 할인 멤버십", href:"https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent" },
  { carrier:"skt", tab:"digital", rank:1, name:"Wavve 앤 데이터",            price:"월 9,900원",  category:"디지털콘텐츠", desc:"드라마/예능/영화 30만편 데이터 무료",                        href:"https://www.tworld.co.kr/web/product/callplan/NA00006577" },
  { carrier:"skt", tab:"digital", rank:2, name:"FLO 앤 데이터",              price:"월 7,900원",  category:"디지털콘텐츠", desc:"FLO 음악 무제한 + 데이터 무료 (모바일 전용)",                href:"https://www.tworld.co.kr/web/product/callplan/NA00006520" },
  { carrier:"skt", tab:"digital", rank:3, name:"해외주식노트",                price:"월 5,500원",  category:"디지털콘텐츠", desc:"AI 예측·종목 추천 미국 주식 분석 서비스",                    href:"https://www.tworld.co.kr/web/product/callplan/NC00000230" },
  { carrier:"skt", tab:"digital", rank:4, name:"투자 시그널",                price:"월 8,800원",  category:"디지털콘텐츠", desc:"AI 활용 실시간 종목 모니터링 및 알림",                       href:"https://www.tworld.co.kr/web/product/callplan/NA00009574" },
  { carrier:"skt", tab:"digital", rank:5, name:"AI가족안부전화",              price:"월 4,950원",  category:"디지털콘텐츠", desc:"AI 보호사가 앱을 통해 가족 안부와 일상을 살피는 서비스",      href:"https://www.tworld.co.kr/web/product/callplan/NC00000223" },
  { carrier:"kt",  tab:"digital", rank:1, name:"티빙 생활구독팩",             price:"월 9,500원~", category:"디지털콘텐츠", desc:"티빙 OTT + 매월 생활혜택 5종 중 1개 선택",                  href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1669" },
  { carrier:"kt",  tab:"digital", rank:2, name:"유튜브 프리미엄+메가MGC커피",  price:"월 8,500원~", category:"디지털콘텐츠", desc:"유튜브 프리미엄 + 메가MGC커피 매월 최대 3잔",               href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1678" },
  { carrier:"kt",  tab:"digital", rank:3, name:"유튜브 프리미엄 (KT 구독)",   price:"월 8,000원~", category:"디지털콘텐츠", desc:"광고 없는 유튜브 + YouTube Music Premium",                 href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1581" },
  { carrier:"kt",  tab:"digital", rank:4, name:"디즈니플러스+메가MGC커피",    price:"월 9,900원~", category:"디지털콘텐츠", desc:"디즈니플러스 OTT + 메가MGC커피 매월 최대 3잔",              href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1668" },
  { carrier:"kt",  tab:"digital", rank:5, name:"티빙+메가MGC커피",           price:"월 정액~",    category:"디지털콘텐츠", desc:"티빙 OTT + 메가MGC커피 번들 상품",                          href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1665" },

  // ── 통화/문자 ────────────────────────────────────────────────────────────
  { carrier:"lgu", tab:"call", rank:1, name:"듀얼넘버 온앤오프",    price:"월 3,850원", category:"통화/문자", desc:"필요할 때만 켜고 끄는 두 번째 번호",                    href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ1000655" },
  { carrier:"lgu", tab:"call", rank:2, name:"듀얼넘버",            price:"월 3,300원", category:"통화/문자", desc:"하나의 폰으로 사생활을 보호하는 두 번째 번호",           href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ0000264" },
  { carrier:"lgu", tab:"call", rank:3, name:"익시오 (ixi-O)",     price:"무료",       category:"통화/문자", desc:"자동 통화 녹음·AI 요약, 스팸 차단, 보이스피싱 탐지",    href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ1002380" },
  { carrier:"lgu", tab:"call", rank:4, name:"통화가능안내",         price:"월 550원",   category:"통화/문자", desc:"상대방 통화가 끝나면 즉시 알려주는 똑똑한 메시지",       href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ0002941" },
  { carrier:"lgu", tab:"call", rank:5, name:"지정번호 필터링",      price:"월 2,200원", category:"통화/문자", desc:"받고 싶지 않은 전화·문자를 차단하고 안내 멘트 남김",     href:"https://www.lguplus.com/mobile/plan/addon/addon-call-msg/LRZ0000815" },
  { carrier:"skt", tab:"call", rank:1, name:"스마트 콜키퍼",       price:"월 990원",   category:"통화/문자", desc:"AI로 똑똑해진 소리샘과 매너있는 콜키퍼의 만남",           href:"https://www.tworld.co.kr/web/product/callplan/NA00009517" },
  { carrier:"skt", tab:"call", rank:2, name:"시니어 컬러링무제한팩", price:"월 2,200원", category:"통화/문자", desc:"시니어 고객 전용 컬러링 무제한 이용 패키지",              href:"https://www.tworld.co.kr/web/product/callplan/NA00009388" },
  { carrier:"skt", tab:"call", rank:3, name:"휴대폰약속번호",       price:"월 1,650원", category:"통화/문자", desc:"나만의 약속번호로 일과 사생활 분리",                      href:"https://www.tworld.co.kr/web/product/callplan/NC00000200" },
  { carrier:"skt", tab:"call", rank:4, name:"컬러링슬림팩",        price:"월 1,760원", category:"통화/문자", desc:"월 1회 컬러링 무료 구매·자동 변경 + 부가서비스 포함",     href:"https://www.tworld.co.kr/web/product/callplan/NA00008824" },
  { carrier:"skt", tab:"call", rank:5, name:"컬러링슬림",          price:"월 770원",   category:"통화/문자", desc:"기본형 컬러링 서비스, 저렴하게 통화연결음 설정",          href:"https://www.tworld.co.kr/web/product/callplan/NA00008823" },
  { carrier:"kt",  tab:"call", rank:1, name:"필수팩 L",           price:"월 9,900원", category:"통화/문자", desc:"음악+전자책+컬러링+두번호+캐치콜 올인원",                href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1544" },
  { carrier:"kt",  tab:"call", rank:2, name:"필수팩 M",           price:"월 6,900원", category:"통화/문자", desc:"보이는 통화연결음 + 두번호 + 캐치콜",                    href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },
  { carrier:"kt",  tab:"call", rank:3, name:"필수팩 S",           price:"월 3,900원", category:"통화/문자", desc:"보이는 통화연결음 + 두번호 + 캐치콜 기본형",             href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },
  { carrier:"kt",  tab:"call", rank:4, name:"캐치콜",             price:"월 550원",   category:"통화/문자", desc:"놓친 전화를 문자로 알림 (처음 두 달 무료)",              href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },
  { carrier:"kt",  tab:"call", rank:5, name:"캐치콜 플러스",      price:"월 880원",   category:"통화/문자", desc:"놓친 전화 알림 + 상대방 통화가능 상태 알림",             href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },

  // ── 통화연결음/벨소리 ────────────────────────────────────────────────────
  { carrier:"lgu", tab:"ring", rank:1, name:"V컬러링",                       price:"월 3,300원", category:"통화연결음", desc:"다양한 장르 콘텐츠를 제한 없이 즐기는 보이는 동영상 컬러링",              href:"https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes/LRZ0002150" },
  { carrier:"lgu", tab:"ring", rank:2, name:"AI보이스링 캐릭터플러스",          price:"월 2,500원", category:"통화연결음", desc:"AI보이스링의 모든 캐릭터를 제한없이 이용",                               href:"https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes/LRZ1003388" },
  { carrier:"lgu", tab:"ring", rank:3, name:"필링 라이트(통화연결음_매달1곡)",  price:"월 1,540원", category:"통화연결음", desc:"매달 벨·링을 새로운 노래로 바꿀 수 있는 실속형 연결음",                   href:"https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes/LRZ0001036" },
  { carrier:"lgu", tab:"ring", rank:4, name:"벨링모아B(벨소리·통화연결음 3건)", price:"월 2,200원", category:"통화연결음", desc:"통화연결음과 벨소리를 매월 3건까지 교체할 수 있는 패키지",                 href:"https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes/LRZ0003993" },
  { carrier:"lgu", tab:"ring", rank:5, name:"벨링모아A(벨소리·통화연결음·MP3)", price:"월 2,200원", category:"통화연결음", desc:"통화연결음/벨소리 2건과 MP3 1건을 매월 교체할 수 있는 패키지",           href:"https://www.lguplus.com/mobile/plan/addon/addon-ringtones-callertunes/LRZ0001764" },
  { carrier:"skt", tab:"ring", rank:1, name:"V 컬러링",                      price:"월 3,300원", category:"통화연결음", desc:"나를 더 다채롭게 표현하는 새로운 영상 컬러링 서비스",                    href:"https://www.tworld.co.kr/web/product/callplan/NA00007017" },
  { carrier:"skt", tab:"ring", rank:2, name:"시니어 컬러링무제한팩",            price:"월 2,200원", category:"통화연결음", desc:"시니어 고객 전용 컬러링 콘텐츠 무제한 이용 패키지",                      href:"https://www.tworld.co.kr/web/product/callplan/NA00009388" },
  { carrier:"skt", tab:"ring", rank:3, name:"컬러링슬림팩",                    price:"월 1,760원", category:"통화연결음", desc:"월 1회 컬러링 무료 구매·자동 변경 + 컬러링 부가서비스 포함",             href:"https://www.tworld.co.kr/web/product/callplan/NA00008824" },
  { carrier:"skt", tab:"ring", rank:4, name:"컬러링슬림",                     price:"월 770원",   category:"통화연결음", desc:"기본형 컬러링 서비스, 저렴하게 통화연결음 설정",                         href:"https://www.tworld.co.kr/web/product/callplan/NA00008823" },
  { carrier:"skt", tab:"ring", rank:5, name:"컬러링무제한2",                   price:"월 3,850원", category:"통화연결음", desc:"매달 컬러링 콘텐츠 무제한 구매, 5회 선물·자동 변경",                    href:"https://www.tworld.co.kr/web/product/callplan/NA00008819" },
  { carrier:"kt",  tab:"ring", rank:1, name:"링투유",                         price:"월 정액",    category:"통화연결음", desc:"최신 음악이나 멘트를 통화연결음으로 설정하는 서비스",                     href:"https://product.kt.com/wDic/productDetail.do?ItemCode=62" },
  { carrier:"kt",  tab:"ring", rank:2, name:"V컬러링 (공통)",                 price:"월 3,300원", category:"통화연결음", desc:"3사 공통 — 보이는 동영상 통화연결음",                                    href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },
  { carrier:"kt",  tab:"ring", rank:3, name:"필수팩 L (컬러링 포함)",          price:"월 9,900원", category:"통화연결음", desc:"음악스트리밍+전자책+컬러링+두번호+캐치콜 올인원",                         href:"https://product.kt.com/wDic/productDetail.do?ItemCode=1544" },
  { carrier:"kt",  tab:"ring", rank:4, name:"필수팩 M (컬러링 포함)",          price:"월 6,900원", category:"통화연결음", desc:"보이는 통화연결음 + 두번호 + 캐치콜",                                    href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },
  { carrier:"kt",  tab:"ring", rank:5, name:"필수팩 S (컬러링 포함)",          price:"월 3,900원", category:"통화연결음", desc:"보이는 통화연결음 + 두번호 + 캐치콜 기본형",                             href:"https://product.kt.com/wDic/index.do?CateCode=6003&FilterCode=142" },
]
