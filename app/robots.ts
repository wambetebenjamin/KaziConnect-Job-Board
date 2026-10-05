import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{const base=process.env.NEXT_PUBLIC_SITE_URL??'https://kaziconnect.co.ke';return {rules:{userAgent:'*',allow:'/',disallow:['/dashboard','/employer/dashboard','/api/']},sitemap:`${base}/sitemap.xml`}}
