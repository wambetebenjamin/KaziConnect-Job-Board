'use client';
import Link from 'next/link';
export function PageHero({title,description}:{title:string;description:string}){return <section className="page-hero"><div className="inner"><p className="breadcrumbs"><Link href="/">Home</Link> / <span>Explore</span></p><h1>{title}</h1><p>{description}</p></div></section>}
