const SERVICES=new Set(['BUSTER SHOT','BUSTER BRAND','BUSTER EXPERIMENT','BOOSTER RESET','BOOSTER CAMPAIGN','BOOSTER EXPERIENCE','아직 잘 모르겠어요']);

const json=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const clean=(value,max)=>String(value??'').trim().slice(0,max);
const escapeHtml=value=>String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

export async function onRequestPost({request,env}){
  try{
    const origin=request.headers.get('Origin');
    if(origin&&new URL(origin).host!==new URL(request.url).host)return json({message:'허용되지 않은 요청입니다.'},403);
    if(Number(request.headers.get('Content-Length')||0)>12000)return json({message:'입력 내용이 너무 깁니다.'},413);

    const body=await request.json();
    if(clean(body.website,200))return json({ok:true});

    const name=clean(body.name,50);
    const email=clean(body.email,120).toLowerCase();
    const phone=clean(body.phone,30);
    const service=clean(body.service,60);
    const problem=clean(body.problem,3000);
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length<2)return json({message:'이름을 확인해 주세요.'},400);
    if(!emailPattern.test(email))return json({message:'이메일 주소를 확인해 주세요.'},400);
    if(!SERVICES.has(service))return json({message:'관심 서비스를 선택해 주세요.'},400);
    if(problem.length<20)return json({message:'함께 풀고 싶은 내용을 20자 이상 작성해 주세요.'},400);
    if(body.privacy!==true)return json({message:'개인정보 수집 및 이용에 동의해 주세요.'},400);

    const to=env.CONTACT_TO;
    const from=env.CONTACT_FROM||'website@buster.fyi';
    if(!to)throw new Error('CONTACT_TO is not configured');

    const subject=`[BUSTER 문의] ${service} · ${name}`;
    const text=`BUSTER 웹사이트 신규 문의\n\n이름: ${name}\n이메일: ${email}\n연락처: ${phone||'미입력'}\n관심 서비스: ${service}\n\n함께 풀고 싶은 것\n${problem}\n\n접수 시각: ${new Date().toISOString()}`;
    const html=`<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#171717"><p style="font-size:12px;letter-spacing:1px;color:#666">BUSTER WEBSITE INQUIRY</p><h1 style="font-size:28px">새 프로젝트 문의가 도착했습니다.</h1><table style="width:100%;border-collapse:collapse;margin:28px 0"><tr><td style="padding:10px;border-top:1px solid #ddd;color:#666">이름</td><td style="padding:10px;border-top:1px solid #ddd">${escapeHtml(name)}</td></tr><tr><td style="padding:10px;border-top:1px solid #ddd;color:#666">이메일</td><td style="padding:10px;border-top:1px solid #ddd">${escapeHtml(email)}</td></tr><tr><td style="padding:10px;border-top:1px solid #ddd;color:#666">연락처</td><td style="padding:10px;border-top:1px solid #ddd">${escapeHtml(phone||'미입력')}</td></tr><tr><td style="padding:10px;border-top:1px solid #ddd;color:#666">관심 서비스</td><td style="padding:10px;border-top:1px solid #ddd">${escapeHtml(service)}</td></tr></table><h2 style="font-size:17px">함께 풀고 싶은 것</h2><p style="white-space:pre-wrap;line-height:1.8;background:#f5f5f1;padding:20px">${escapeHtml(problem)}</p></div>`;

    const message={to,from:{email:from,name:'BUSTER Website'},replyTo:{email,name},subject,text,html};
    if(env.EMAIL?.send){
      await env.EMAIL.send(message);
    }else{
      if(!env.CF_ACCOUNT_ID||!env.EMAIL_API_TOKEN)throw new Error('Email service is not configured');
      const response=await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/email/sending/send`,{method:'POST',headers:{Authorization:`Bearer ${env.EMAIL_API_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify(message)});
      if(!response.ok)throw new Error(`Email API failed: ${response.status}`);
    }

    return json({ok:true});
  }catch(error){
    console.error('Contact form error',error instanceof Error?error.message:'Unknown error');
    return json({message:'현재 문의를 전송할 수 없습니다.'},500);
  }
}

export function onRequest(){
  return json({message:'허용되지 않은 요청입니다.'},405);
}
