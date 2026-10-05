import { NextRequest, NextResponse } from 'next/server';
import { verifyCaptcha } from '@/lib/captcha';
import { store } from '@/lib/store';
import { saveSubscriber } from '@/lib/persistence';
export async function POST(request:NextRequest){const {email,categories=[],captchaToken}=await request.json();const check=await verifyCaptcha(captchaToken,'newsletter');if(!check.success)return NextResponse.json({error:check.message,fallbackRequired:check.fallbackRequired},{status:403});if(!email||!/^\S+@\S+\.\S+$/.test(email))return NextResponse.json({error:'Enter a valid email address.'},{status:400});const subscriber={email,categories,createdAt:new Date().toISOString()};if(!store.subscribers.some(x=>x.email===email))store.subscribers.push(subscriber);await saveSubscriber(subscriber);return NextResponse.json({success:true})}
