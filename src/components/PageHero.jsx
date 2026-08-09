import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';

export default function PageHero({ title, subtitle, trail = [], image = '/images/hero-1.jpg', eyebrow }) {
  return (
    <div className="page-hero">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src={image} alt="" role="presentation" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 60%', filter: 'brightness(.3) saturate(.8)' }} priority />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(8,11,15,1) 0%,rgba(8,11,15,.2) 100%)', zIndex: 1 }} />
      <div className="page-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
        <Breadcrumbs trail={trail} />
        {eyebrow && <p className="eyebrow" style={{ marginTop: 14 }}>{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
