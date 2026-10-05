import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { LoadingScreen } from '@/components/LoadingScreen';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kaziconnect.co.ke'), title: { default:'KaziConnect | Work that moves East Africa forward', template:'%s | KaziConnect' }, description:'Find meaningful jobs, build your career and hire capable people across East Africa.', openGraph:{type:'website',locale:'en_KE',siteName:'KaziConnect',images:[{url:'/images/hero-african-professionals.jpg',width:500,height:333,alt:'African professionals collaborating in an office'}]} };
export default function RootLayout({children}:{children:React.ReactNode}) { const key=process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;return <html lang="en"><body><LoadingScreen/>{key&&<Script src={`https://www.google.com/recaptcha/api.js?render=${key}`} strategy="afterInteractive"/>}<Navbar/><main>{children}</main><Footer/><WhatsAppButton/><CookieBanner/></body></html>; }
