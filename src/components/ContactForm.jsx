'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FORMS, SITE } from '@/config/site';
import { submitWeb3Form, CONTACT_FALLBACK_MSG } from '@/lib/forms';

export default function ContactForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    const result = await submitWeb3Form(e.target);
    setSending(false);
    if (result.ok) {
      router.push('/thank-you-contact/');
    } else {
      setError(`${result.message}. ${CONTACT_FALLBACK_MSG}`);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={`New contact message — ${SITE.name}`} />
      <input type="hidden" name="from_name" value={SITE.name} />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="form-row">
        <div className="form-group"><label htmlFor="cf-fname">First Name</label><input type="text" id="cf-fname" name="first_name" required /></div>
        <div className="form-group"><label htmlFor="cf-lname">Last Name</label><input type="text" id="cf-lname" name="last_name" required /></div>
      </div>
      <div className="form-group"><label htmlFor="cf-email">Email Address</label><input type="email" id="cf-email" name="email" required /></div>
      <div className="form-group">
        <label htmlFor="cf-subject">Subject</label>
        <select id="cf-subject" name="topic">
          <option>Order Question</option>
          <option>Product Question</option>
          <option>Shipping Question</option>
          <option>Age Verification Issue</option>
          <option>Wholesale Inquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group"><label htmlFor="cf-msg">Message</label><textarea id="cf-msg" name="message" rows={5} required /></div>
      {error && <p style={{ color: 'var(--red)', fontSize: 13, marginBottom: 12 }}>{error}</p>}
      <button type="submit" className="btn btn-primary btn-block" disabled={sending}>{sending ? 'Sending…' : 'Send Message →'}</button>
    </form>
  );
}
