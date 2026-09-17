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
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>document.querySelector('[name=service]').value=a.dataset.service));
document.querySelector('#brief-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const text=`BUSTER 프로젝트 브리프\n\n서비스: ${f.get('service')}\n프로젝트: ${f.get('brand')}\n\n함께 풀고 싶은 문제\n${f.get('problem')}\n\n홈페이지 목업에서 작성한 검토용 초안입니다. 외부로 전송되지 않았습니다.\n`;const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='BUSTER-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#form-status').textContent='브리프 파일을 만들었습니다. 다운로드한 내용을 확인해 주세요.'});

const root=document.documentElement;
const hero=document.querySelector('.hero');
function updateScrollMotion(){
  const max=Math.max(1,root.scrollHeight-innerHeight);
  root.style.setProperty('--page-progress',Math.min(1,scrollY/max).toFixed(4));
  const heroMax=Math.max(1,hero.offsetHeight);
  root.style.setProperty('--hero-progress',Math.min(1,scrollY/heroMax).toFixed(4));
}
addEventListener('scroll',updateScrollMotion,{passive:true});
addEventListener('resize',updateScrollMotion,{passive:true});
updateScrollMotion();

const revealTargets=document.querySelectorAll('.section-title,.studio>div,.work-card,.axis-intro,.axis-card,.service-list,.process-grid article,.contact-layout>div,.contact form');
revealTargets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  }),{threshold:.12,rootMargin:'0px 0px -7%'});
  revealTargets.forEach(el=>observer.observe(el));
}else revealTargets.forEach(el=>el.classList.add('is-visible'));
