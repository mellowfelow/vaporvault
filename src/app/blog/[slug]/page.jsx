import { notFound } from 'next/navigation';
import Link from 'next/link';
import { POSTS, getPost } from '@/config/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComplianceBanner from '@/components/ComplianceBanner';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs trail={[{ label: 'Blog', href: '/blog/' }, { label: post.title.length > 40 ? `${post.title.slice(0, 40)}…` : post.title }]} />
          <p className="eyebrow" style={{ marginTop: 14 }}>{post.category}</p>
          <h1 style={{ maxWidth: 800 }}>{post.title}</h1>
          <p style={{ color: 'var(--silver)', fontSize: 14, marginTop: 12 }}>{post.dateLabel} · {post.readTime} · VaporVault Editorial Team</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <ComplianceBanner />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className="post-cta-box" style={{ marginTop: 48 }}>
            <h3>Shop Top Disposable Vapes</h3>
            <p>Ready to buy? Browse our full selection of authentic disposable vapes with fast shipping.</p>
            <Link href="/shop/disposable-vapes/" className="btn btn-primary btn-lg">Shop All Disposables →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
