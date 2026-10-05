import Link from 'next/link';
import { BriefcaseBusiness } from 'lucide-react';
export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="KaziConnect home"><span className="logo-mark"><BriefcaseBusiness size={19} strokeWidth={2.4}/></span><span>Kazi<span>Connect</span></span></Link>;
}
