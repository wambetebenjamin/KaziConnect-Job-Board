import { NextRequest, NextResponse } from 'next/server';
import { verifyCaptcha } from '@/lib/captcha';
export async function POST(request:NextRequest){const {email,captchaToken}=await request.json();const check=await verifyCaptcha(captchaToken,'password_reset');if(!check.success)return NextResponse.json({error:check.message,fallbackRequired:check.fallbackRequired},{status:403});if(!email)return NextResponse.json({error:'Enter your email address.'},{status:400});return NextResponse.json({success:true})}
