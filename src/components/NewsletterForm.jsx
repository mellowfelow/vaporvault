'use client';
import { useState } from 'react';
import { FORMS, SITE } from '@/config/site';
import { submitWeb3Form } from '@/lib/forms';
import { showToast } from '@/lib/toast';

export default function NewsletterForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const result = await submitWeb3Form(e.target);
    setSending(false);
    if (result.ok) {
      showToast('Subscribed! Welcome to VaporVault.', 'success');
      e.target.reset();
    } else {
      showToast(`Error: ${result.message}`, '');
    }
  };

  return (
    <form className="nl-form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={`Newsletter signup — ${SITE.name}`} />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input type="email" id="nl-email" name="email" placeholder="your@email.com" required autoComplete="email" className="nl-input" />
      <button type="submit" className="btn btn-primary" disabled={sending}>{sending ? 'Subscribing…' : 'Subscribe'}</button>
    </form>
  );
}
