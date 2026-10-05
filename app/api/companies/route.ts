import { NextResponse } from 'next/server';
import { companies, jobs } from '@/lib/data';
export function GET(){return NextResponse.json({data:companies.map(company=>({...company,openRoles:jobs.filter(job=>job.companySlug===company.slug).length}))})}
