'use client';
import { FORMS, SITE } from '@/config/site';

export function web3formsKeyIsPending() {
  return !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-');
}

/**
 * Submits via Web3Forms using the exact CORS-safe method: FormData body,
 * Accept-only header, no Content-Type, no action attribute. See WebForge forms spec.
 */
export async function submitWeb3Form(formEl) {
  if (web3formsKeyIsPending()) {
    return { ok: true, pending: true };
  }
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(formEl),
  });
  const data = await res.json().catch(() => ({}));
  if (res.status === 200 && data.success) return { ok: true };
  return { ok: false, message: data.message || `Submission failed (status ${res.status})` };
}

export const CONTACT_FALLBACK_MSG = `Something went wrong. Please email us directly at ${SITE.email}.`;
