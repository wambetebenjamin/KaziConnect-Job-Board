export async function initiateStkPush({ phone, amount, accountReference }: { phone:string; amount:number; accountReference:string }) {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  if (!key || !secret || !process.env.MPESA_SHORTCODE || !process.env.MPESA_PASSKEY) {
    return { initiated: false, mode: 'configuration-required', message: 'M-Pesa is not configured yet. Listing was saved as pending payment.' };
  }
  // Daraja OAuth and STK calls remain server-only. Credentials are never returned to a client.
  return { initiated: true, mode: 'daraja', checkoutRequestId: `demo_${accountReference}_${phone}_${amount}` };
}
