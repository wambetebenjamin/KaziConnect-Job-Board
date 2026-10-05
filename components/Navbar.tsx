'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { categories } from '@/lib/data';
const navigation = [{href:'/', label:'Home'}, {href:'/jobs',label:'Find Jobs'}, {href:'/companies',label:'Companies'}, {href:'/career-advice',label:'Career Advice'}, {href:'/salary-guide',label:'Salary Guide'}];
export function Navbar() {
 const [menuOpen,setMenuOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const pathname=usePathname();
 useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>24); onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); return ()=>window.removeEventListener('scroll',onScroll);},[]);
 useEffect(()=>setMenuOpen(false),[pathname]);
 return <><header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="nav-shell"><Logo light={!scrolled}/><nav className={`primary-nav ${menuOpen?'is-open':''}`} aria-label="Main navigation">{navigation.map(item=><Link className={pathname===item.href ? 'active':''} href={item.href} key={item.href}>{item.label}</Link>)}<div className="mobile-nav-actions"><Link className="nav-link-employer" href="/employer/post-job">Post a Job</Link><Link href="/sign-in">Sign In</Link><Link className="button button-small" href="/register">Register</Link></div></nav><div className="nav-actions"><Link className="nav-link-employer" href="/employer/post-job">Post a Job</Link><Link href="/sign-in">Sign In</Link><Link className="button button-small" href="/register">Register</Link></div><button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen}>{menuOpen?<X/>:<Menu/>}</button></div></header>
 <div className="category-strip" aria-label="Job categories"><div className="category-scroll">{categories.map(category=><Link href={`/jobs?category=${encodeURIComponent(category)}`} key={category}>{category}<ChevronDown size={12}/></Link>)}</div></div></>;
}
