import Link from 'next/link';
import { POSTS } from '@/config/site';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Blog & Guides',
  description: 'Vape buying guides, device education, and compliance explainers from the VaporVault editorial team.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero title="Vault Blog" subtitle="Buying guides, device education, and compliance explainers." trail={[{ label: 'Blog' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="blog-card">
                <div className="bc-img">{p.emoji}</div>
                <div className="bc-body">
                  <p className="bc-cat">{p.category}</p>
                  <h3 className="bc-title">{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--silver)' }}>{p.excerpt}</p>
                  <p className="bc-meta">{p.dateLabel} · {p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
