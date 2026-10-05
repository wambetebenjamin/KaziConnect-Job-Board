import { NextRequest, NextResponse } from 'next/server';
import { verifyCaptcha } from '@/lib/captcha';
export async function POST(request:NextRequest){const {token,action}=await request.json();const result=await verifyCaptcha(token,action);return NextResponse.json(result,{status:result.success?200:403})}
