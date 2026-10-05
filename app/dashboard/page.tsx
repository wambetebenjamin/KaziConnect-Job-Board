import { SeekerDashboard } from '@/components/Dashboards';
import { requireRole } from '@/lib/auth';
import { redirect } from 'next/navigation';
export const metadata={title:'My Dashboard'};
export const dynamic='force-dynamic';
export default async function DashboardPage(){if(!await requireRole('jobseeker'))redirect('/sign-in');return <SeekerDashboard/>}
