import { NextResponse } from 'next/server';
import { salaryRoles } from '@/lib/data';
export function GET(){return NextResponse.json({data:salaryRoles,source:'Static KaziConnect salary guide dataset'})}
