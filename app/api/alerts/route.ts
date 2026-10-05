import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { saveAlert } from '@/lib/persistence';
import { requireRole } from '@/lib/auth';
export async function GET(){const user=await requireRole('jobseeker');if(!user)return NextResponse.json({error:'Unauthorized'},{status:401});return NextResponse.json({data:store.alerts})}
export async function POST(request:NextRequest){const user=await requireRole('jobseeker');if(!user)return NextResponse.json({error:'Unauthorized'},{status:401});const alert=await request.json();if(!alert.keywords)return NextResponse.json({error:'Add at least one keyword.'},{status:400});store.alerts['demo-user']=alert;await saveAlert('demo-user',alert);return NextResponse.json({success:true,data:alert})}
