import { EmployerDashboard } from '@/components/Dashboards';
import { requireRole } from '@/lib/auth';
import { redirect } from 'next/navigation';
export const metadata={title:'Employer Dashboard'};
export const dynamic='force-dynamic';
export default async function EmployerDashboardPage(){if(!await requireRole('employer'))redirect('/sign-in');return <EmployerDashboard/>}
