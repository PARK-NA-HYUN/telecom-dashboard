import type { CarrierId } from "@/lib/carriers"

export type Banner = {
  carrier: CarrierId
  title: string
  caption: string
  href: string
  imgSrc: string
  changed: boolean
}

export const BANNERS: Banner[] = [
  // LG U+ (2)
  {
    carrier: "lgu",
    title: "벨링모아 여름을 부탁해!",
    caption: "가입하면 아이스커피 100% 증정",
    href: "https://www.lguplus.com/benefit-event/ongoing/82313",
    imgSrc: "https://www.lguplus.com/static/pc-contents/images/display/section_835/content_2023/Image38.png?20260507144149786",
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
]
