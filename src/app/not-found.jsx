import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 560, textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: 72, marginBottom: 20 }} aria-hidden="true">🔍</div>
        <h1 style={{ fontFamily: 'var(--fd)', fontSize: 48, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 12 }}>PAGE NOT FOUND</h1>
        <p style={{ color: 'var(--silver)', marginBottom: 28 }}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
          <Link href="/shop/disposable-vapes/" className="btn btn-outline">Shop Disposables</Link>
        </div>
      </div>
    </section>
  );
}
