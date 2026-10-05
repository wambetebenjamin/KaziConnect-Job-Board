import { NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { requireRole } from '@/lib/auth';
export async function GET(){const user=await requireRole('employer');if(!user)return NextResponse.json({error:'Unauthorized'},{status:401});return NextResponse.json({data:store.listings,protected:true,message:'Use a valid NextAuth employer session in production.'})}
