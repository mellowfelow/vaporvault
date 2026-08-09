'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FORMS, SITE } from '@/config/site';
import { submitWeb3Form, CONTACT_FALLBACK_MSG } from '@/lib/forms';

export default function WholesaleForm() {
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
      router.push('/thank-you-wholesale/');
    } else {
      setError(`${result.message}. ${CONTACT_FALLBACK_MSG}`);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={`New wholesale inquiry — ${SITE.name}`} />
      <input type="hidden" name="from_name" value={SITE.name} />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="form-row">
        <div className="form-group"><label>First Name</label><input type="text" name="first_name" required /></div>
        <div className="form-group"><label>Last Name</label><input type="text" name="last_name" required /></div>
      </div>
      <div className="form-group"><label>Business Name *</label><input type="text" name="business_name" required /></div>
      <div className="form-group"><label>Email Address *</label><input type="email" name="email" required /></div>
      <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" /></div>
      <div className="form-group">
        <label>Business Type</label>
        <select name="business_type">
          <option>Vape Shop</option><option>Convenience Store</option><option>Tobacco Retailer</option><option>Online Retailer</option><option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Estimated Monthly Volume</label>
        <select name="volume">
          <option>Under $1,000/month</option><option>$1,000 - $5,000/month</option><option>$5,000 - $10,000/month</option><option>Over $10,000/month</option>
        </select>
      </div>
      <div className="form-group"><label>Additional Information</label><textarea name="message" rows={3} /></div>
      {error && <p style={{ color: 'var(--red)', fontSize: 13, marginBottom: 12 }}>{error}</p>}
      <button type="submit" className="btn btn-primary btn-block" disabled={sending}>{sending ? 'Sending…' : 'Submit Wholesale Inquiry →'}</button>
    </form>
  );
}
