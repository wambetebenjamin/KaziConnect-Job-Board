import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const requests = new Map<string, { count:number; reset:number }>();
function limited(key:string) {
  const now = Date.now(); const current = requests.get(key);
  if (!current || now > current.reset) { requests.set(key, { count:1, reset:now + 60_000 }); return false; }
  current.count += 1; return current.count > 8;
}
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === '/api/apply' || path === '/api/employer/post') {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'anonymous';
    if (limited(`${ip}:${path}`)) return NextResponse.json({ error:'Too many requests. Please wait a minute and try again.' }, { status:429 });
  }
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options','nosniff');
  return response;
}
export const config = { matcher: ['/api/apply', '/api/employer/post'] };
