import { getServerSession, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET ? [GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })] : []),
    ...(process.env.EMAIL_SERVER ? [EmailProvider({ server: process.env.EMAIL_SERVER, from: process.env.EMAIL_FROM })] : []),
    CredentialsProvider({
      name: 'Demo account',
      credentials: { email: { label: 'Email', type: 'email' }, role: { label: 'Role', type: 'text' } },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        const role = credentials.role === 'employer' ? 'employer' : 'jobseeker';
        return { id: credentials.email, email: credentials.email, name: credentials.email.split('@')[0], role };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) { if (user?.role) token.role=user.role; return token; },
    async session({ session, token }) { if (session.user) { session.user.id=token.sub??'';session.user.role=token.role; } return session; }
  }
};

export async function requireRole(role:'employer'|'jobseeker') {
  // Local preview remains usable without mail/OAuth credentials. A production deployment requires a signed NextAuth session.
  if (process.env.NODE_ENV !== 'production' && !process.env.NEXTAUTH_SECRET) return { id:'local-demo',role };
  const session=await getServerSession(authOptions);
  if (!session?.user || session.user.role!==role) return null;
  return session.user;
}
