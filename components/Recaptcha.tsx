'use client';
declare global { interface Window { grecaptcha?: { ready:(callback:()=>void)=>void; execute:(key:string,options:{action:string})=>Promise<string> } } }
export async function executeCaptcha(action:string) { const key=process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; if(!key || !window.grecaptcha) return 'development-bypass'; return new Promise<string>((resolve,reject)=>window.grecaptcha!.ready(()=>window.grecaptcha!.execute(key,{action}).then(resolve).catch(reject))); }
