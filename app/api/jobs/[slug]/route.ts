import { NextResponse } from 'next/server';
import { getJob } from '@/lib/data';
export const revalidate=120;
export function GET(_:Request,{params}:{params:{slug:string}}){const job=getJob(params.slug);return job?NextResponse.json({data:job}):NextResponse.json({error:'Job not found.'},{status:404})}
