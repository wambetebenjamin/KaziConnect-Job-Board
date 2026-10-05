import nodemailer from 'nodemailer';

export async function sendApplicationConfirmation(email: string, applicantName: string, jobTitle: string) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return { delivered: false, mode: 'not-configured' };
  const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT ?? 587), secure: false, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
  await transporter.sendMail({ from: process.env.EMAIL_FROM ?? process.env.SMTP_USER, to: email, subject: `We received your application for ${jobTitle}`, text: `Hello ${applicantName},\n\nThank you for applying for ${jobTitle} through KaziConnect. We have sent your application to the employer.` });
  return { delivered: true, mode: 'smtp' };
}

export function employerWhatsAppLink(jobTitle: string, applicantName: string, applicantEmail: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '254112272061';
  return `https://wa.me/${number}?text=${encodeURIComponent(`New KaziConnect application for ${jobTitle}: ${applicantName} (${applicantEmail}).`)}`;
}
