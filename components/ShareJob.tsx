'use client';
import { Copy, Share2 } from 'lucide-react';
import { useState } from 'react';
export function ShareJob({title,slug}:{title:string;slug:string}){const [copied,setCopied]=useState(false);const href=typeof window==='undefined'?`/jobs/${slug}`:window.location.href;const whatsapp=`https://wa.me/?text=${encodeURIComponent(`Apply for ${title} on KaziConnect: ${href}`)}`;return <div className="share-row"><a className="share-button" href={whatsapp} target="_blank" rel="noreferrer"><Share2 size={14}/>WhatsApp</a><button onClick={async()=>{await navigator.clipboard.writeText(href);setCopied(true);setTimeout(()=>setCopied(false),1800)}}><Copy size={14}/>{copied?'Copied':'Copy link'}</button></div>}
