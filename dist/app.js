const projects=[
{name:'LAST RUNNER CLUB',line:'꼴찌에게도 결승선은 있다.',problem:'기록과 속도를 강조하는 러닝 시장에서, 달리기를 시작하기 어려운 사람을 위한 운동화 브랜드를 가정했습니다.',idea:'빠른 사람의 성취 대신, 마지막까지 달리는 사람의 지속을 응원합니다. 속도가 아닌 완주로 러닝의 기준을 바꿉니다.',scene:'모두가 떠난 결승선. 마지막 러너를 기다리는 환영 문구. 6컷 구성: 출발의 망설임 → 혼자 달리기 → 추월당하기 → 계속하기 → 늦은 도착 → 환영.',expand:'초보 러너의 느린 기록 일지, 마지막 러너를 위한 피니시 이벤트, 매장 커뮤니티 프로그램.'},
{name:'BARE MINIMUM',line:'덜어낼수록, 나답게.',problem:'복잡한 스킨케어 루틴에 피로를 느끼는 사람을 위한 가상 화장품 브랜드입니다.',idea:'더 많은 단계를 권하는 대신, 자기에게 필요한 루틴을 선택하게 합니다. 효능에 대한 과장 없이 단순한 사용 경험을 이야기합니다.',scene:'빼곡한 화장대에서 세 가지 일상만 남는 장면. 키비주얼은 여백과 짧은 문장으로 구성합니다.',expand:'루틴 편집 가이드, 제품별 사용 맥락 카드, 덜어내는 화장대 캠페인. 실제 효능 표현은 제품 근거 확보 후 검토.'},
{name:'OFF HOURS',line:'아무것도 안 할 체크인.',problem:'여행 중에도 계획과 일정에 쫓기는 사람을 위한 가상 호텔 컨셉입니다.',idea:'볼거리의 개수보다 비워둔 시간의 가치를 팝니다. 숙박을 일정에서 벗어나는 경험으로 재정의합니다.',scene:'아무 일정도 없는 하루의 시간표. 체크인 순간 받는 빈 페이지가 브랜드의 첫 접점이 됩니다.',expand:'무일정 숙박 패키지, 조용한 공용 공간, 늦은 아침 프로그램. 실제 운영과 인력 조건에 맞춰 범위 조정.'},
{name:'AFTER TABLE',line:'오늘의 끝에, 한 끼의 쉼표.',problem:'늦게 일을 마친 사람에게 식사 시간이 사라지는 상황에서 출발한 가상 F&B 브랜드입니다.',idea:'야식의 자극보다 늦은 시간에도 나를 챙기는 식사의 의미를 전달합니다.',scene:'영업이 끝나는 도시에서 한 테이블의 불이 켜집니다. 한 사람을 위해 차려지는 저녁을 중심으로 15초 필름을 설계합니다.',expand:'퇴근길 메뉴 언어, 1인 테이블 경험, 동네의 늦은 저녁 이야기. 메뉴·영업시간은 운영 검증 필요.'},
{name:'THE PAUSE BUTTON',line:'아무것도 해결하지 않는 버튼.',problem:'모든 제품이 생산성을 약속하는 세상에서, 잠깐 멈추는 행위에 의미를 부여하는 가상 제품 실험입니다.',idea:'버튼을 눌러도 일은 끝나지 않습니다. 대신 사용자가 잠깐 멈추기로 결정합니다. 쓸모를 줄여 경험을 만드는 아이디어입니다.',scene:'수많은 알림 문장 한가운데, 단 하나의 정지 문장. “지금, 10초만.”이라는 카피로 연결합니다.',expand:'책상 위 오브제, 짧은 휴식 팝업, 팀의 멈춤 의식. 제품 사양·안전성·제작 단가는 개발 단계에서 검토.'}
];
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[Number(button.dataset.project)];document.querySelector('#dialog-title').textContent=p.name;document.querySelector('#dialog-line').textContent=p.line;const container=document.querySelector('#dialog-content');container.replaceChildren();[['출발한 질문',p.problem],['한 문장의 컨셉',p.idea],['한 장면의 방향',p.scene],['캠페인으로의 확장',p.expand]].forEach(([title,body])=>{const h=document.createElement('h3');h.textContent=title;const para=document.createElement('p');para.textContent=body;container.append(h,para)});dialog.showModal()}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const conceptCases=[
{code:'B·01 / BUSTER SHOT',name:'M. LAB',industry:'Functional Beverage Startup',concept:'오후 3시를 다시 켜는 한 모금.',brief:'기능성 음료 출시 8주 전. 성분과 기능은 명확하지만 경쟁 제품과 구별되는 이야기가 없습니다.',shift:'피로를 없애는 음료에서 하루의 흐름을 다시 시작하게 하는 음료로 관점을 전환합니다.',output:['캠페인 컨셉 3안','메인·서브 카피 시스템','키비주얼 방향','15초 광고 스토리보드','SNS 출시 콘텐츠 6종'],scene:'오후 3시, 멈춰 있던 사무실의 시계와 사람들이 한 모금을 마시는 순간 다시 움직이기 시작합니다.',result:'제품 기능이 일상의 구체적인 순간과 연결되어 출시 메시지와 콘텐츠 제작 기준이 하나로 정렬됩니다.'},
{code:'B·02 / BUSTER BRAND',name:'O. SKIN',industry:'Slow-aging Skincare Brand',concept:'시간은 줄이는 것이 아니라, 잘 쌓는 것.',brief:'30대를 위한 슬로에이징 제품은 완성됐지만 브랜드 이름과 태도, 언어가 정해지지 않았습니다.',shift:'시간을 늦추는 브랜드에서 시간이 쌓일수록 나다워지는 브랜드로 관점을 바꿉니다.',output:['브랜드 포지셔닝','네이밍 후보 5–8개','슬로건과 보이스 원칙','비주얼 디렉션','론칭 캠페인 시나리오'],scene:'나이를 감추는 피부 이미지 대신 한 사람의 표정과 생활의 흔적이 아름답게 축적되는 장면을 보여줍니다.',result:'제품·패키지·콘텐츠를 판단할 하나의 브랜드 기준과 시장에 처음 소개할 론칭 언어가 만들어집니다.'},
{code:'B·03 / BUSTER EXPERIMENT',name:'N. SYSTEMS',industry:'Home Appliance Company',concept:'오늘을 닫는 가장 부드러운 방법.',brief:'기존 가전기업이 수면 시장 진입을 검토하지만 어떤 제품과 경험을 만들어야 할지 열려 있습니다.',shift:'잠들게 하는 기계를 만드는 것에서 하루를 잘 닫게 하는 의식을 설계하는 것으로 질문을 바꿉니다.',output:['사용자 맥락 리서치','기회 영역 4개','미래 제품·서비스 컨셉 3안','경험 시나리오','의사결정용 컨셉북'],scene:'조명, 소리, 온도가 하나의 동작으로 천천히 변화하며 사용자의 하루가 종료됩니다.',result:'막연한 신사업 주제가 비교 가능한 컨셉과 검증 질문으로 구체화되어 다음 개발 단계의 의사결정을 돕습니다.'},
{code:'R·01 / BOOSTER RESET',name:'H. COFFEE',industry:'Local Coffee Brand',concept:'같은 자리에서, 다른 하루를 시작합니다.',brief:'8년 동안 운영된 로컬 브랜드. 지역 인지도는 높지만 프랜차이즈와의 차이가 흐려졌습니다.',shift:'커피를 판매하는 동네 매장에서 동네의 반복되는 일상을 지키는 브랜드로 재정의합니다.',output:['브랜드 자산 진단','고객 접점 인벤토리','리포지셔닝','핵심 메시지와 보이스','비주얼 리프레시 방향'],scene:'매일 같은 시간, 같은 자리에 앉지만 서로 다른 하루를 시작하는 지역 주민들의 모습을 기록합니다.',result:'기존 고객이 사랑한 자산은 유지하면서 매장·패키지·SNS에서 반복할 선명한 브랜드 이유가 생깁니다.'},
{code:'R·02 / BOOSTER CAMPAIGN',name:'S. HOTEL',industry:'Urban Boutique Hotel',concept:'아무 일 없는 하루를 예약하세요.',brief:'주말 투숙률은 높지만 평일 객실이 비어 있습니다. 가격 할인 없이 새로운 방문 이유가 필요합니다.',shift:'도시를 여행하는 숙박에서 아무 일정도 만들지 않는 하루로 경험을 재정의합니다.',output:['캠페인 전략','빅 아이디어와 카피','평일 숙박 패키지 컨셉','키비주얼','30초 필름·SNS 콘텐츠'],scene:'체크인 시 관광 지도가 아닌 아무것도 적혀 있지 않은 빈 일정표를 건넵니다.',result:'할인 중심의 판매 메시지가 브랜드다운 체류 이유로 전환되고 평일 패키지와 콘텐츠가 같은 이야기로 연결됩니다.'},
{code:'R·03 / BOOSTER EXPERIENCE',name:'V. EYEWEAR',industry:'D2C Eyewear Brand',concept:'당신의 시야를 편집하는 시간.',brief:'제품 만족도는 높지만 온라인 구매 과정이 일반적인 쇼핑몰과 크게 다르지 않습니다.',shift:'안경을 고르는 구매 과정에서 자신이 보고 싶은 세상을 편집하는 경험으로 전환합니다.',output:['고객 여정과 감정 곡선','경험 컨셉','온라인 진단 시나리오','화면별 마이크로카피','패키지·배송 경험 방향'],scene:'상품을 형태나 가격으로 먼저 보여주는 대신 사용자가 원하는 시야와 생활 장면을 선택하며 제품에 도달합니다.',result:'검색부터 개봉까지 흩어져 있던 접점이 하나의 경험 원칙으로 연결되어 브랜드 인상을 강화합니다.'}
];
const caseDialog=document.querySelector('#case-dialog');
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{const c=conceptCases[Number(button.dataset.case)];document.querySelector('#case-code').textContent=c.code;document.querySelector('#case-name').textContent=c.name;document.querySelector('#case-industry').textContent=c.industry;document.querySelector('#case-concept').textContent=c.concept;const image=document.querySelector('#case-image');image.src=button.querySelector('img').src;image.alt=`${c.name} 컨셉 시뮬레이션 이미지`;const container=document.querySelector('#case-content');container.replaceChildren();[['THE BRIEF',c.brief],['THE SHIFT',c.shift],['THE OUTPUT',c.output],['THE SCENE',c.scene],['EXPECTED CHANGE',c.result]].forEach(([title,body])=>{const section=document.createElement('section');const heading=document.createElement('h3');heading.textContent=title;section.append(heading);if(Array.isArray(body)){const list=document.createElement('ul');body.forEach(item=>{const li=document.createElement('li');li.textContent=item;list.append(li)});section.append(list)}else{const para=document.createElement('p');para.textContent=body;section.append(para)}container.append(section)});caseDialog.showModal()}));
document.querySelector('.case-close').addEventListener('click',()=>caseDialog.close());caseDialog.addEventListener('click',e=>{if(e.target===caseDialog){const r=caseDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)caseDialog.close()}});
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>document.querySelector('[name=service]').value=a.dataset.service));
document.querySelector('#brief-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const text=`BUSTER 프로젝트 브리프\n\n서비스: ${f.get('service')}\n프로젝트: ${f.get('brand')}\n\n함께 풀고 싶은 문제\n${f.get('problem')}\n\n홈페이지에서 작성한 비공개 초안입니다. 내용은 자동으로 전송되지 않았습니다.\n`;const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='BUSTER-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);const status=document.querySelector('#form-status');status.textContent='✓ 브리프가 저장되었습니다. 내용을 확인한 뒤 준비가 되었을 때 BUSTER에 전달해 주세요.';status.classList.add('is-visible')});

const root=document.documentElement;
const hero=document.querySelector('.hero');
const breakthrough=document.querySelector('.breakthrough');
function updateScrollMotion(){
  const max=Math.max(1,root.scrollHeight-innerHeight);
  root.style.setProperty('--page-progress',Math.min(1,scrollY/max).toFixed(4));
  const heroMax=Math.max(1,hero.offsetHeight);
  root.style.setProperty('--hero-progress',Math.min(1,scrollY/heroMax).toFixed(4));
  if(breakthrough){
    const rect=breakthrough.getBoundingClientRect();
    const travel=Math.max(1,breakthrough.offsetHeight-innerHeight);
    const progress=Math.min(1,Math.max(0,-rect.top/travel));
    breakthrough.style.setProperty('--break-progress',progress.toFixed(4));
    breakthrough.style.setProperty('--break-crack',Math.min(1,Math.max(0,(progress-.10)/.30)).toFixed(4));
    breakthrough.style.setProperty('--break-open',Math.min(1,Math.max(0,(progress-.34)/.66)).toFixed(4));
    breakthrough.style.setProperty('--break-copy-fade',Math.min(1,Math.max(0,(progress-.38)/.30)).toFixed(4));
    breakthrough.style.setProperty('--break-result-in',Math.min(1,Math.max(0,(progress-.76)/.20)).toFixed(4));
  }
}
addEventListener('scroll',updateScrollMotion,{passive:true});
addEventListener('resize',updateScrollMotion,{passive:true});
updateScrollMotion();

const revealTargets=document.querySelectorAll('.section-title,.studio>div,.work-card,.axis-intro,.axis-card,.service-list,.case-heading,.case-card,.process-grid article,.contact-layout>div,.contact form');
revealTargets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  }),{threshold:.12,rootMargin:'0px 0px -7%'});
  revealTargets.forEach(el=>observer.observe(el));
}else revealTargets.forEach(el=>el.classList.add('is-visible'));
