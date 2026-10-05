import { NextRequest, NextResponse } from 'next/server';
import { verifyCaptcha } from '@/lib/captcha';
import { store, uid } from '@/lib/store';
export async function POST(request:NextRequest){const {name,company,email,subject,message,captchaToken}=await request.json();const check=await verifyCaptcha(captchaToken,'contact');if(!check.success)return NextResponse.json({error:check.message,fallbackRequired:check.fallbackRequired},{status:403});if(!name||!email||!subject||!message)return NextResponse.json({error:'Please complete all required fields.'},{status:400});store.contacts.push({id:uid('contact'),name,company,email,subject,message,createdAt:new Date().toISOString()});return NextResponse.json({success:true})}
