import Link from 'next/link';

export const metadata = {
  title: 'Inquiry Received',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you-wholesale/' },
};

export default function ThankYouWholesalePage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 560, textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }} aria-hidden="true">✅</div>
        <h1 style={{ fontFamily: 'var(--fd)', fontSize: 32, color: 'var(--white)', marginBottom: 8 }}>Inquiry Received!</h1>
        <p style={{ color: 'var(--silver)', marginBottom: 28 }}>We will contact you within 1-2 business days.</p>
        <Link href="/" className="btn btn-outline">Back to Home</Link>
      </div>
    </section>
  );
}
