import { compileMDX } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/lib/data';
export function generateStaticParams(){return articles.map(article=>({slug:article.slug}))}
export default async function ArticlePage({params}:{params:{slug:string}}){const article=articles.find(x=>x.slug===params.slug);if(!article)notFound();let source='';try{source=await readFile(path.join(process.cwd(),'content/articles',`${params.slug}.mdx`),'utf8')}catch{notFound()}const {content,frontmatter}=await compileMDX<{title:string;category:string;author:string;readTime:string}>({source,options:{parseFrontmatter:true}});return <article className="article-content"><p className="breadcrumbs" style={{color:'#53647b'}}><Link href="/">Home</Link> / <Link href="/career-advice">Career Advice</Link></p><p className="eyebrow">{frontmatter.category}</p><h1>{frontmatter.title}</h1><div className="article-meta"><span>{frontmatter.author}</span><span>·</span><span>{article.date}</span><span>·</span><span>{frontmatter.readTime}</span></div><img className="article-hero-image" src={article.image} alt=""/><div className="mdx-content">{content}</div></article>}
