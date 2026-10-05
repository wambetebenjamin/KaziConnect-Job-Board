export type ApplicationStatus = 'New' | 'Reviewed' | 'Shortlisted' | 'Rejected';
export type Application = { id:string; jobSlug:string; name:string; email:string; phone:string; linkedIn?:string; coverLetter?:string; cvUrl?:string; createdAt:string; status:ApplicationStatus };
export type Subscriber = { email:string; categories:string[]; createdAt:string };
export type ContactMessage = { id:string; name:string; company?:string; email:string; subject:string; message:string; createdAt:string };
export type EmployerListing = { id:string; title:string; category:string; type:string; location:string; deadline:string; plan:string; status:'Active'|'Pending payment'|'Expired'; applications:number; createdAt:string };

const globalStore = globalThis as typeof globalThis & { kaziStore?: { applications:Application[]; subscribers:Subscriber[]; contacts:ContactMessage[]; listings:EmployerListing[]; alerts:Record<string, unknown> } };
export const store = globalStore.kaziStore ?? (globalStore.kaziStore = { applications:[], subscribers:[], contacts:[], listings:[], alerts:{} });
export function uid(prefix:string) { return `${prefix}_${crypto.randomUUID()}`; }
