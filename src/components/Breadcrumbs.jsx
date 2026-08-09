import Link from 'next/link';

export default function Breadcrumbs({ trail }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {trail.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span aria-hidden="true">›</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
