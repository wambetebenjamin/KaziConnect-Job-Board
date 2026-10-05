import { DefaultSession } from 'next-auth';
import 'next-auth';
import 'next-auth/jwt';
declare module 'next-auth' { interface Session { user: { id: string; role?: 'employer' | 'jobseeker' } & NonNullable<DefaultSession['user']> } interface User { role?: 'employer' | 'jobseeker' } }
declare module 'next-auth/jwt' { interface JWT { role?: 'employer' | 'jobseeker' } }
