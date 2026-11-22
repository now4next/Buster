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
{code:'B·01 / BUSTER SHOT',name:'M. LAB',industry:'Functional Beverage Startup',concept:'오후 3시, 하루를 다시 켠다.',brief:'기능성 음료 출시 8주 전. 성분과 효능은 명확하지만 경쟁 제품과 구별되는 순간과 언어가 없습니다.',shift:'피로를 없애는 음료가 아니라 오후의 흐름을 재부팅하는 데일리 스위치로 관점을 전환합니다.',output:['런칭 캠페인 컨셉 3안','메인·서브 카피 시스템','전기빛 키비주얼 방향','15초 RE:START 필름','SNS 카운트다운 6종'],scene:'오후 3시 정각, 멈춘 시계 그림자와 회색 사무실에 한 모금의 전기빛이 번지며 하루가 다시 움직입니다.',result:'제품 기능이 누구나 아는 구체적 순간과 연결되어 메시지와 비주얼을 단번에 기억하게 만듭니다.'},
{code:'B·02 / BUSTER BRAND',name:'O. SKIN',industry:'Slow-aging Skincare Brand',concept:'시간을 지우지 않고, 빛으로 쌓는다.',brief:'30대를 위한 슬로에이징 제품은 완성됐지만 안티에이징 브랜드와 다른 태도와 언어가 없습니다.',shift:'시간을 되돌리는 브랜드에서 매일의 시간이 피부의 빛으로 축적되는 브랜드로 질문을 바꿉니다.',output:['브랜드 포지셔닝','네이밍 후보 5–8개','LAYER OF LIGHT 슬로건','지층형 패키지 방향','론칭 캠페인 시나리오'],scene:'코랄과 바이올렛 지층 사이로 빛이 이동하고, 투명한 용기 안에 오늘의 빛 한 겹이 새롭게 쌓입니다.',result:'제품·패키지·콘텐츠를 판단하는 독자적인 언어와 컬러 세계가 만들어집니다.'},
{code:'B·03 / BUSTER EXPERIMENT',name:'N. SYSTEMS',industry:'Sleep Appliance Company',concept:'하루를 닫는 하나의 스위치.',brief:'기존 가전기업이 수면 시장 진입을 검토하지만 어떤 제품과 경험을 만들어야 할지 열려 있습니다.',shift:'잠을 재촉하는 기계에서 현실과 밤 사이의 전환 의식을 설계하는 제품으로 관점을 전환합니다.',output:['사용자 야간 맥락 리서치','기회 영역 4개','수면 포털 제품 컨셉 3안','OFF MODE 경험 시나리오','의사결정용 컨셉북'],scene:'주황빛 스위치를 한 번 누르면 소리·조명·온도가 인디고 밤의 포털 안으로 천천히 사라집니다.',result:'막연한 신사업이 명확한 사용 장면과 검증 질문을 가진 제품·서비스 컨셉으로 구체화됩니다.'},
{code:'R·01 / BOOSTER RESET',name:'H. COFFEE',industry:'Local Coffee Brand',concept:'매일 같은 자리, 오늘은 다른 시작.',brief:'8년 동안 운영된 로컬 브랜드. 지역 인지도는 높지만 프랜차이즈와의 차이가 흐려졌습니다.',shift:'커피를 파는 동네 매장에서 매일의 시작을 기억해 주는 나만의 거리 좌석으로 재정의합니다.',output:['브랜드 자산 진단','동네 루틴 인터뷰','MY SEAT 리포지셔닝','코발트·테라코타 비주얼','매장·패키지 리프레시'],scene:'이탈리아 골목처럼 좁은 거리, 매일 같은 작은 테이블 위에 에스프레소 한 잔과 서로 다른 하루가 놓입니다.',result:'오래된 익숙함이 약점이 아니라 반복 방문하게 만드는 브랜드의 가장 강한 자산으로 바뀝니다.'},
{code:'R·02 / BOOSTER CAMPAIGN',name:'S. HOTEL',industry:'Urban Boutique Hotel',concept:'아무 일도 없는 하루가 필요하다.',brief:'주말 투숙률은 높지만 평일 객실이 비어 있습니다. 가격 할인 없이 새로운 방문 이유가 필요합니다.',shift:'도시를 구경하는 숙박에서 일정을 완전히 비우기 위한 목적지로 경험을 재정의합니다.',output:['평일 캠페인 전략','NOTHING DAY 빅 아이디어','무계획 숙박 패키지','민트·레드 키비주얼','30초 필름·SNS 콘텐츠'],scene:'시계의 바늘이 사라지고, 민트색 방 한가운데 놓인 침대 위로 텅 빈 일정표가 천천히 내려옵니다.',result:'할인 메시지 대신 지금 필요한 감정을 판매하며 평일 객실에 브랜드다운 방문 이유를 만듭니다.'},
{code:'R·03 / BOOSTER EXPERIENCE',name:'V. EYEWEAR',industry:'D2C Eyewear Brand',concept:'세상을 고르는 건, 프레임 밖의 일.',brief:'제품 만족도는 높지만 온라인 구매 과정이 일반적인 쇼핑몰과 크게 다르지 않습니다.',shift:'안경테를 고르는 구매 과정에서 자신이 원하는 세계의 해상도와 온도를 고르는 경험으로 전환합니다.',output:['고객 여정과 감정 곡선','CHOOSE YOUR VIEW 컨셉','컬러 렌즈 진단 시나리오','화면별 마이크로카피','프리즘 패키지 방향'],scene:'하나의 안경을 움직일 때마다 같은 풍경이 시안·레드·라임의 서로 다른 세계로 굴절됩니다.',result:'검색부터 개봉까지의 접점이 하나의 경험 원칙으로 연결되어 브랜드의 관점을 체감하게 합니다.'}
];
const caseDialog=document.querySelector('#case-dialog');
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{const c=conceptCases[Number(button.dataset.case)];document.querySelector('#case-code').textContent=c.code;document.querySelector('#case-name').textContent=c.name;document.querySelector('#case-industry').textContent=c.industry;document.querySelector('#case-concept').textContent=c.concept;const image=document.querySelector('#case-image');image.src=button.querySelector('img').src;image.alt=`${c.name} 컨셉 시뮬레이션 이미지`;const container=document.querySelector('#case-content');container.replaceChildren();[['THE BRIEF',c.brief],['THE SHIFT',c.shift],['THE OUTPUT',c.output],['THE SCENE',c.scene],['EXPECTED CHANGE',c.result]].forEach(([title,body])=>{const section=document.createElement('section');const heading=document.createElement('h3');heading.textContent=title;section.append(heading);if(Array.isArray(body)){const list=document.createElement('ul');body.forEach(item=>{const li=document.createElement('li');li.textContent=item;list.append(li)});section.append(list)}else{const para=document.createElement('p');para.textContent=body;section.append(para)}container.append(section)});caseDialog.showModal()}));
document.querySelector('.case-close').addEventListener('click',()=>caseDialog.close());caseDialog.addEventListener('click',e=>{if(e.target===caseDialog){const r=caseDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)caseDialog.close()}});
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>document.querySelector('[name=service]').value=a.dataset.service));
document.querySelector('#brief-form').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget;const button=form.querySelector('button[type=submit]');const status=document.querySelector('#form-status');status.className='';button.disabled=true;button.setAttribute('aria-busy','true');const original=button.querySelector('.brief-copy strong').textContent;button.querySelector('.brief-copy strong').textContent='문의 내용을 보내는 중입니다';try{const f=new FormData(form);const payload={name:String(f.get('name')||'').trim(),email:String(f.get('email')||'').trim(),phone:String(f.get('phone')||'').trim(),service:String(f.get('service')||''),problem:String(f.get('problem')||'').trim(),privacy:f.get('privacy')==='on',website:String(f.get('website')||'')};const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(result.message||'문의 전송에 실패했습니다.');status.textContent='✓ 문의가 접수되었습니다. 영업일 기준 24시간 안에 입력하신 이메일로 연락드리겠습니다.';status.classList.add('is-visible');form.reset()}catch(error){status.textContent=`전송하지 못했습니다. ${error.message} 잠시 후 다시 시도해 주세요.`;status.classList.add('is-error')}finally{button.disabled=false;button.removeAttribute('aria-busy');button.querySelector('.brief-copy strong').textContent=original}});

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

const revealTargets=document.querySelectorAll('.section-title,.studio>div,.film-intro>div,.film-storyboard,.film-beats article,.work-card,.axis-intro,.axis-card,.service-list,.case-heading,.case-card,.process-grid article,.contact-layout>div,.contact form');
revealTargets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  }),{threshold:.12,rootMargin:'0px 0px -7%'});
  revealTargets.forEach(el=>observer.observe(el));
}else revealTargets.forEach(el=>el.classList.add('is-visible'));
