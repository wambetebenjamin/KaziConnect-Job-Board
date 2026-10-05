export type CaptchaResult = { success: boolean; score: number; fallbackRequired: boolean; message?: string };

export async function verifyCaptcha(token: string | null | undefined, action?: string): Promise<CaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const minimum = Number(process.env.RECAPTCHA_MIN_SCORE ?? '0.5');
  if (!secret) {
    if (process.env.NODE_ENV !== 'production') return { success: true, score: 1, fallbackRequired: false, message: 'Development CAPTCHA bypass.' };
    return { success: false, score: 0, fallbackRequired: true, message: 'CAPTCHA is not configured.' };
  }
  if (!token) return { success: false, score: 0, fallbackRequired: true, message: 'Please complete the security check.' };
  try {
    const body = new URLSearchParams({ secret, response: token });
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', body, cache: 'no-store' });
    const data = await response.json() as { success?: boolean; score?: number; action?: string };
    const score = data.score ?? 0;
    const validAction = !action || !data.action || data.action === action;
    if (!data.success || !validAction || score < minimum) {
      return { success: false, score, fallbackRequired: true, message: 'We could not verify this request. Please complete the visible check.' };
    }
    return { success: true, score, fallbackRequired: false };
  } catch {
    return { success: false, score: 0, fallbackRequired: true, message: 'Security verification is temporarily unavailable.' };
  }
}
