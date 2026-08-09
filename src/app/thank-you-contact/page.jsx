import Link from 'next/link';

export const metadata = {
  title: 'Message Sent',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you-contact/' },
};

export default function ThankYouContactPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 560, textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }} aria-hidden="true">✅</div>
        <h1 style={{ fontFamily: 'var(--fd)', fontSize: 32, color: 'var(--white)', marginBottom: 8 }}>Message Sent!</h1>
        <p style={{ color: 'var(--silver)', marginBottom: 28 }}>We&apos;ll reply to your email within a few hours during business hours.</p>
        <Link href="/" className="btn btn-outline">Back to Home</Link>
      </div>
    </section>
  );
}
